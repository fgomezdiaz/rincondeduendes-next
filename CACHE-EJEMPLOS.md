# 📚 Guía Completa: Directivas de Caché en Next.js

Esta guía explica con ejemplos prácticos cómo usar las tres directivas de caché de Next.js 16+.

## 🎯 Resumen Rápido

| Directiva | Cuándo se cachea | Compartido | Mejor para |
|-----------|------------------|------------|------------|
| `'use cache'` | Build time | ✅ Todos | Datos estáticos |
| `'use cache: remote'` | Runtime (servidor) | ✅ Todos | Datos públicos dinámicos |
| `'use cache: private'` | Runtime (servidor) | ❌ Por usuario | Datos personalizados |

---

## 1️⃣ `'use cache'` - Caché Estático

### ¿Qué hace?
- Se ejecuta y cachea **durante el build** (`npm run build`)
- Se comparte entre **todos los usuarios**
- El resultado se "hornea" en el HTML estático

### Cuándo usar:
- ✅ Datos que **nunca cambian** o cambian solo con cada deploy
- ✅ Configuraciones, constantes
- ✅ Rutas estáticas

### Ejemplo en tu código:

```typescript
// ✅ PERFECTO: Marcas no cambian frecuentemente
export const getAllMarcas = async () => {
  'use cache'
  return Marcas // Se cachea en build time
}

// ✅ PERFECTO: Categorías son estáticas
export const getAllCategorias = async () => {
  'use cache'
  return Categorias // Todos los usuarios ven lo mismo
}
```

### ⚠️ Limitaciones:
- ❌ NO funciona bien en rutas dinámicas sin contexto estático
- ❌ Si cambias los datos, necesitas hacer **rebuild completo**

---

## 2️⃣ `'use cache: remote'` - Caché Compartido en Runtime

### ¿Qué hace?
- Se cachea **en el servidor** durante la ejecución
- Se **comparte entre todos los usuarios**
- Funciona en **rutas dinámicas**
- Reduce carga en BD/APIs

### Cuándo usar:
- ✅ Datos **públicos** que todos ven igual
- ✅ Quieres reducir carga en base de datos
- ✅ Datos que cambian ocasionalmente (productos, precios, etc.)
- ✅ Rutas dinámicas

### Ejemplo en tu código:

```typescript
// ✅ PERFECTO: Productos por marca (compartido)
export const getArticulosByMarca = async (marcaId: string) => {
  'use cache: remote'
  
  // Tag para poder invalidar después
  cacheTag(`articulos-marca-${marcaId}`)
  
  // Expira después de 1 hora
  cacheLife({ expire: 3600 })
  
  return Articulos.filter(a => a.marca === marcaId)
  // Primera petición: query real
  // Siguientes peticiones: desde caché (cualquier usuario)
}

// ✅ PERFECTO: Productos por categoría (compartido)
export const getArticulosByCategoria = async (categoria: string) => {
  'use cache: remote'
  cacheTag(`articulos-categoria-${categoria}`)
  
  // Configuración avanzada de caché
  cacheLife({ 
    stale: 1800,      // Después de 30min = "stale" pero válido
    revalidate: 300,  // Intentar revalidar cada 5min
    expire: 7200       // Expirar completamente después de 2h
  })
  
  return Articulos.filter(a => a.categoria?.includes(categoria))
}
```

### Ejemplo adicional:

```typescript
// Llamada a API externa (todos comparten el resultado)
export const getPreciosDesdeAPI = async () => {
  'use cache: remote'
  cacheTag('precios-api')
  cacheLife({ expire: 600 }) // 10 minutos
  
  const response = await fetch('https://api.externa.com/precios')
  return response.json()
  // Primera vez: hace fetch real
  // Siguientes: usa caché compartido
}
```

---

## 3️⃣ `'use cache: private'` - Caché Privado por Usuario

### ¿Qué hace?
- Se cachea **en el servidor** pero **NO se comparte**
- Cada usuario tiene su **propio caché privado**
- Se diferencia por cookies/sesión/usuario

### Cuándo usar:
- ✅ Datos **personalizados** por usuario
- ✅ Contenido que depende de sesión/cookies
- ✅ Datos **privados** que no deben compartirse
- ✅ Carrito, recomendaciones, historial

### Ejemplos prácticos:

```typescript
// ✅ PERFECTO: Carrito de compras (privado por usuario)
export const getCarritoUsuario = async () => {
  'use cache: private'
  cacheLife({ expire: 300 }) // 5 minutos
  
  const sessionId = (await cookies()).get('session-id')?.value
  
  // Cada usuario tiene su propio carrito cachead
  // Usuario A no ve el carrito de Usuario B
  return carritoDelUsuario
}

// ✅ PERFECTO: Recomendaciones personalizadas
export const getRecomendaciones = async () => {
  'use cache: private'
  cacheLife({ expire: 3600 }) // 1 hora
  
  const userId = (await cookies()).get('user-id')?.value
  
  // Recomendaciones basadas en historial del usuario
  // Cada usuario tiene su propio caché
  return recomendacionesPersonalizadas
}

// ✅ PERFECTO: Precio con descuento personalizado
export const getPrecioConDescuento = async (productoId: string) => {
  'use cache: private'
  cacheLife({ expire: 600 })
  
  const userId = (await cookies()).get('user-id')?.value
  const tieneDescuentoVIP = userId === 'vip-user'
  
  // Precio base: 'use cache: remote' (compartido)
  // Descuento: 'use cache: private' (por usuario)
  return {
    precioBase: 29.99,
    descuento: tieneDescuentoVIP ? 0.2 : 0,
    precioFinal: tieneDescuentoVIP ? 23.99 : 29.99,
  }
}
```

---

## 🔄 Invalidación de Caché

### Para `'use cache: remote'`:

```typescript
import { revalidateTag } from 'next/cache'

// Después de actualizar un producto
export const actualizarProducto = async (productoId: string, marcaId: string) => {
  // ... lógica de actualización
  
  // Invalidar caché específico
  revalidateTag(`articulos-marca-${marcaId}`)
  
  // O invalidar múltiples
  revalidateTag(`articulos-categoria-${categoria}`)
}
```

### Para `'use cache: private'`:
- ❌ **NO se puede invalidar manualmente**
- ✅ Solo expira según `cacheLife`
- ✅ Se invalida cuando cambia la sesión/usuario

---

## 📊 Comparación Visual

### Escenario: Lista de Productos

```typescript
// ❌ SIN CACHÉ - Cada request hace query
async function getProductos() {
  return db.productos.findMany() // Query cada vez
}

// ✅ CON 'use cache' - Se cachea en build
async function getProductos() {
  'use cache'
  return productos // Solo en build time
}

// ✅ CON 'use cache: remote' - Caché compartido en runtime
async function getProductos() {
  'use cache: remote'
  cacheTag('productos')
  return db.productos.findMany() // Query primera vez, luego caché
}

// ✅ CON 'use cache: private' - Caché por usuario
async function getProductosPersonalizados() {
  'use cache: private'
  const userId = getUserId()
  return db.productos.findMany({ where: { userId } })
  // Cada usuario tiene su propio caché
}
```

---

## ⚠️ Errores Comunes

### ❌ NO hagas esto:

```typescript
// ❌ 'use cache: private' dentro de 'use cache: remote'
async function outer() {
  'use cache: remote'
  const result = await inner() // Error!
}

async function inner() {
  'use cache: private'
  return data
}

// ❌ cacheTag en 'use cache: private'
async function getCarrito() {
  'use cache: private'
  cacheTag('carrito') // ❌ No tiene sentido (es privado)
}

// ❌ 'use cache' en rutas dinámicas sin contexto
// (solo funciona en rutas estáticas)
```

### ✅ Haz esto:

```typescript
// ✅ Separar responsabilidades
async function getProductos() {
  'use cache: remote' // Público
  cacheTag('productos')
  return productos
}

async function getCarrito() {
  'use cache: private' // Privado
  cacheLife({ expire: 300 })
  return carrito
}

// ✅ Combinar cuando sea necesario
async function getProductosConCarrito() {
  const productos = await getProductos()      // Shared
  const carrito = await getCarrito()          // Private
  return { productos, carrito }
}
```

---

## 🎯 Casos de Uso en tu Aplicación

### Ya implementado correctamente:

```typescript
// ✅ Marcas - Estáticas → 'use cache'
export const getAllMarcas = async () => {
  'use cache'
  return Marcas
}

// ✅ Productos por marca - Dinámicos compartidos → 'use cache: remote'
export const getArticulosByMarca = async (marcaId: string) => {
  'use cache: remote'
  cacheTag(`articulos-marca-${marcaId}`)
  return Articulos.filter(a => a.marca === marcaId)
}
```

### Podrías agregar (ejemplos futuros):

```typescript
// Ejemplo futuro: Carrito de compras
export const getCarrito = async () => {
  'use cache: private' // ⭐ Privado por usuario
  cacheLife({ expire: 300 })
  const sessionId = getSessionId()
  return carritoDelUsuario(sessionId)
}

// Ejemplo futuro: Recomendaciones
export const getRecomendaciones = async () => {
  'use cache: private' // ⭐ Privado por usuario
  cacheLife({ expire: 3600 })
  const userId = getUserId()
  return recomendacionesPorUsuario(userId)
}
```

---

## 📝 Resumen Final

1. **`'use cache'`** → Datos estáticos, build time
2. **`'use cache: remote'`** → Datos públicos, runtime compartido
3. **`'use cache: private'`** → Datos personalizados, runtime privado

**Regla de oro:**
- Si **todos ven lo mismo** → `'use cache: remote'`
- Si **cada usuario ve algo diferente** → `'use cache: private'`
- Si **nunca cambia** → `'use cache'`


'use server'

import { cacheTag, cacheLife } from 'next/cache'
import { cookies } from 'next/headers'

/**
 * ============================================
 * EJEMPLOS DE USO DE CACHÉ EN NEXT.JS
 * ============================================
 * 
 * Este archivo contiene ejemplos prácticos de las tres directivas de caché:
 * - 'use cache'           → Caché estático en tiempo de build
 * - 'use cache: remote'   → Caché compartido en runtime (todos los usuarios)
 * - 'use cache: private'  → Caché privado por usuario en runtime
 */

// ============================================
// 1. 'use cache' - CACHÉ ESTÁTICO
// ============================================
// ✅ Se cachea en tiempo de BUILD (cuando haces npm run build)
// ✅ Se comparte entre TODOS los usuarios
// ✅ Perfecto para datos que NUNCA cambian o cambian muy raramente
// ✅ Solo funciona en rutas estáticas

export const getAllMarcas = async () => {
  'use cache'
  
  // Este código se ejecuta SOLO durante el build
  // El resultado se cachea y se sirve a todos los usuarios
  // Si cambias los datos, necesitas hacer rebuild
  
  const marcas = [
    { id: '1', nombre: 'Lego' },
    { id: '2', nombre: 'Playmobil' },
    // ... datos estáticos
  ]
  
  return marcas
}

export const getAllCategorias = async () => {
  'use cache'
  
  // Otro ejemplo: categorías que no cambian frecuentemente
  // Se renderizan una vez en build time y se sirven a todos
  
  return [
    { id: '1', nombre: 'Construcción' },
    { id: '2', nombre: 'Educativos' },
  ]
}

// ❌ NO puedes usar 'use cache' en rutas dinámicas
// ❌ NO funciona si necesitas datos en tiempo real


// ============================================
// 2. 'use cache: remote' - CACHÉ COMPARTIDO EN RUNTIME
// ============================================
// ✅ Se cachea en el SERVIDOR en tiempo de EJECUCIÓN
// ✅ Se COMPARTE entre TODOS los usuarios
// ✅ Funciona en rutas dinámicas y contextos dinámicos
// ✅ Perfecto para datos públicos que cambian ocasionalmente
// ✅ Reduce carga en base de datos/APIs externas

export const getArticulosByMarca = async (marcaId: string) => {
  'use cache: remote'
  
  // Cachear con un tag único para poder invalidar después
  cacheTag(`articulos-marca-${marcaId}`)
  
  // Configurar tiempo de expiración (opcional)
  // expire: tiempo máximo que el caché es válido (en segundos)
  cacheLife({ expire: 3600 }) // 1 hora
  
  // Simulación de query a base de datos
  // Esta query se ejecuta la primera vez
  // Las siguientes peticiones (de cualquier usuario) usan el caché
  const articulos = [
    { id: '1', titulo: 'Set Lego City', marcaId },
    { id: '2', titulo: 'Casa Lego', marcaId },
  ]
  
  return articulos
}

export const getArticulosByCategoria = async (categoria: string) => {
  'use cache: remote'
  
  cacheTag(`articulos-categoria-${categoria}`)
  cacheLife({ 
    stale: 1800,      // Después de 30 min se considera "stale" pero aún válido
    revalidate: 300, // Intentar revalidar cada 5 min
    expire: 7200      // Expirar completamente después de 2 horas
  })
  
  // Query costosa a base de datos
  // Se cachea y todos los usuarios se benefician
  return [] // articulos filtrados
}

export const getPrecioProducto = async (productoId: string) => {
  'use cache: remote'
  
  cacheTag(`precio-${productoId}`)
  cacheLife({ expire: 600 }) // 10 minutos (precios pueden cambiar)
  
  // Llamada a API externa de precios
  // Se cachea para evitar múltiples requests
  const precio = 29.99
  
  return precio
}

// Ejemplo con fetch a API externa
export const getDatosDesdeAPI = async () => {
  'use cache: remote'
  
  cacheTag('api-externa')
  cacheLife({ expire: 1800 }) // 30 minutos
  
  // Esta llamada a API se cachea
  // Todos los usuarios comparten el mismo resultado
  const response = await fetch('https://api.externa.com/datos')
  return response.json()
}


// ============================================
// 3. 'use cache: private' - CACHÉ PRIVADO POR USUARIO
// ============================================
// ✅ Se cachea en el SERVIDOR pero NO se comparte
// ✅ Cada usuario tiene su PROPIO caché
// ✅ Perfecto para datos personalizados (carrito, recomendaciones, etc.)
// ✅ Funciona con cookies, headers, o cualquier identificador de usuario

export const getCarritoUsuario = async () => {
  'use cache: private'
  
  // NO uses cacheTag aquí - es privado por usuario
  cacheLife({ expire: 300 }) // 5 minutos
  
  const sessionId = (await cookies()).get('session-id')?.value
  
  if (!sessionId) return []
  
  // Cada usuario tiene su propio carrito cachead
  // El caché es diferente para cada sessionId
  const carrito = [
    { id: '1', producto: 'Lego Set', cantidad: 2 },
  ]
  
  return carrito
}

export const getRecomendacionesPersonalizadas = async () => {
  'use cache: private'
  
  cacheLife({ expire: 3600 }) // 1 hora
  
  const userId = (await cookies()).get('user-id')?.value
  const preferencias = (await cookies()).get('preferencias')?.value
  
  // Cada usuario ve recomendaciones basadas en su historial
  // El caché es privado - usuario A no ve el caché de usuario B
  const recomendaciones = [
    { id: '1', titulo: 'Basado en tu historial' },
  ]
  
  return recomendaciones
}

export const getDatosUsuario = async (userId: string) => {
  'use cache: private'
  
  cacheLife({ expire: 600 }) // 10 minutos
  
  // Datos específicos del usuario que no deben compartirse
  // Cada usuario tiene su propio caché
  
  return {
    nombre: 'Usuario',
    preferencias: [],
    historial: [],
  }
}

// Ejemplo: Precio personalizado (descuentos, promociones por usuario)
export const getPrecioConDescuento = async (productoId: string) => {
  'use cache: private'
  
  cacheLife({ expire: 300 })
  
  const userId = (await cookies()).get('user-id')?.value
  const tieneDescuento = userId ? true : false
  
  // Precio base puede ser compartido ('use cache: remote')
  // Pero el descuento es privado por usuario
  
  return {
    precioBase: 29.99,
    descuento: tieneDescuento ? 0.1 : 0,
    precioFinal: tieneDescuento ? 26.99 : 29.99,
  }
}


// ============================================
// CASOS DE USO PRÁCTICOS - CUÁNDO USAR CADA UNO
// ============================================

// ✅ 'use cache' - USA CUANDO:
// - Datos que nunca cambian (configuraciones, constantes)
// - Datos que solo cambian con cada deploy
// - Estás en una ruta estática
// Ejemplo: Lista de categorías, marcas, configuraciones del sitio

// ✅ 'use cache: remote' - USA CUANDO:
// - Datos públicos que TODOS ven igual
// - Necesitas reducir carga en BD/API
// - Los datos cambian ocasionalmente (productos, precios, etc.)
// - Estás en rutas dinámicas
// Ejemplo: Productos por marca, artículos por categoría, precios públicos

// ✅ 'use cache: private' - USA CUANDO:
// - Datos personalizados por usuario
// - Contenido que depende de cookies/sesión
// - Datos privados que NO deben compartirse
// Ejemplo: Carrito de compras, recomendaciones, historial de usuario


// ============================================
// COMBINACIONES ÚTILES
// ============================================

// Ejemplo: Combinar 'remote' y 'private'
export const getProductosConRecomendaciones = async (marcaId: string) => {
  // Productos públicos (compartidos)
  const productos = await getArticulosByMarca(marcaId)
  
  // Recomendaciones privadas (por usuario)
  const recomendaciones = await getRecomendacionesPersonalizadas()
  
  return {
    productos,        // Caché compartido
    recomendaciones, // Caché privado
  }
}


// ============================================
// INVALIDACIÓN DE CACHÉ
// ============================================

// Dos funciones para invalidar caché de 'use cache: remote':
import { revalidateTag, updateTag } from 'next/cache'

/**
 * ============================================
 * updateTag vs revalidateTag
 * ============================================
 * 
 * updateTag:
 * - ❌ Solo funciona en Server Actions (no en Route Handlers)
 * - ✅ Invalida INMEDIATAMENTE el caché
 * - ✅ La próxima petición ESPERA datos frescos (bloquea)
 * - ✅ Útil cuando necesitas garantizar datos actualizados
 * 
 * revalidateTag:
 * - ✅ Funciona en Server Actions Y Route Handlers
 * - ✅ Usa estrategia "stale-while-revalidate"
 * - ✅ Sirve datos obsoletos mientras obtiene frescos en background
 * - ✅ Mejor rendimiento, pero puede mostrar datos antiguos brevemente
 */

// ============================================
// Ejemplo: updateTag - Invalidación inmediata
// ============================================

// ✅ CORRECTO: Usar updateTag en Server Action
export const crearArticulo = async (formData: FormData) => {
  'use server'
  
  const titulo = formData.get('titulo') as string
  const marcaId = formData.get('marcaId') as string
  
  // Crear artículo en BD
  // const nuevoArticulo = await db.articulos.create({ ... })
  
  // Invalidar INMEDIATAMENTE el caché
  // ⚠️ IMPORTANTE: Esto afecta a TODOS los clientes
  // La próxima petición de cualquier usuario obtendrá datos frescos
  updateTag(`articulos-marca-${marcaId}`)
  updateTag('articulos-todos')
  
  // Todas las páginas que usen estos tags se actualizarán
  // para TODOS los usuarios en la próxima petición
}

export const actualizarProducto = async (productoId: string, marcaId: string) => {
  'use server'
  
  // Actualizar en BD
  // await db.articulos.update({ ... })
  
  // Invalidar caché inmediatamente
  // ⚠️ Todos los clientes verán el cambio en la próxima petición
  updateTag(`articulos-marca-${marcaId}`)
  updateTag(`articulo-${productoId}`)
}

// ============================================
// Ejemplo: revalidateTag - Revalidación en background
// ============================================

// ✅ CORRECTO: Usar revalidateTag en Route Handler o Server Action
export const actualizarProductoBackground = async (productoId: string, marcaId: string) => {
  // Actualizar en BD
  // await db.articulos.update({ ... })
  
  // Revalidar en background (stale-while-revalidate)
  // Sirve datos obsoletos mientras obtiene frescos
  revalidateTag(`articulos-marca-${marcaId}`, {})
  
  // ⚠️ Los clientes pueden ver datos antiguos brevemente
  // pero la experiencia es más fluida
}

// ============================================
// ⚠️ IMPORTANTE: Impacto en todos los clientes
// ============================================

/**
 * Cuando usas updateTag o revalidateTag con 'use cache: remote':
 * 
 * ✅ SÍ afecta a TODOS los usuarios
 * ✅ El caché es compartido en el servidor
 * ✅ Todos los clientes verán los cambios actualizados
 * 
 * Ejemplo de flujo:
 * 
 * 1. Usuario A, B, C ven página con productos (caché activo)
 * 2. Admin actualiza un producto y llama updateTag()
 * 3. Caché se invalida en el servidor
 * 4. Usuario A hace petición → obtiene datos frescos ✅
 * 5. Usuario B hace petición → obtiene datos frescos ✅
 * 6. Usuario C hace petición → obtiene datos frescos ✅
 * 
 * ⚠️ Todos los usuarios se benefician (o se afectan) por igual
 */

// ============================================
// Casos de uso recomendados
// ============================================

// ✅ Usa updateTag cuando:
// - El cambio es crítico (precio, disponibilidad)
// - Necesitas garantizar datos actualizados inmediatamente
// - Estás en un Server Action

export const actualizarPrecio = async (productoId: string, nuevoPrecio: number) => {
  'use server'
  
  // Actualizar precio (crítico - todos deben ver el precio correcto)
  // await db.articulos.update({ precio: nuevoPrecio })
  
  // Invalidar inmediatamente para que todos vean el precio correcto
  updateTag(`articulo-${productoId}`)
  updateTag('articulos-todos')
}

// ✅ Usa revalidateTag cuando:
// - El cambio no es crítico (descripción, imagen)
// - Prefieres mejor rendimiento sobre actualización inmediata
// - Estás en un Route Handler

export const actualizarDescripcion = async (productoId: string, descripcion: string) => {
  // Actualizar descripción (no crítico)
  // await db.articulos.update({ descripcion })
  
  // Revalidar en background - mejor UX
  revalidateTag(`articulo-${productoId}`, {})
}

// NOTA: 'use cache: private' NO se puede invalidar manualmente
// Solo expira según cacheLife o cuando el usuario cambia de sesión


// ============================================
// ERRORES COMUNES A EVITAR
// ============================================

// ❌ NO mezcles 'use cache: remote' dentro de 'use cache: private'
// ❌ NO uses cacheTag en 'use cache: private'
// ❌ NO uses 'use cache' en rutas dinámicas sin contexto dinámico
// ✅ SIEMPRE usa 'use cache: remote' para datos compartidos públicos
// ✅ SIEMPRE usa 'use cache: private' para datos por usuario


'use server'

import { cacheTag, cacheLife } from 'next/cache'

/**
 * Obtiene la URL de una imagen de Cloudinary con caché en el servidor
 * Esto cachea la URL para evitar múltiples requests a Cloudinary
 */
export async function getCachedImageUrl(imagePath: string): Promise<string> {
  'use cache: remote'
  
  // Cachear por ID de imagen único
  cacheTag(`image-${imagePath}`)
  
  // Cachear por 24 horas (86400 segundos)
  cacheLife({ expire: 86400 })
  
  // Retornar la URL completa de Cloudinary
  // Cloudinary también tiene su propia caché CDN, así que esto es doble caché
  return `https://res.cloudinary.com/didkqst3j/image/upload/${imagePath}`
}

/**
 * Obtiene múltiples URLs de imágenes cacheadas
 */
export async function getCachedImageUrls(imagePaths: string[]): Promise<string[]> {
  'use cache: remote'
  
  cacheTag(`images-batch-${imagePaths.join('-')}`)
  cacheLife({ expire: 86400 })
  
  return imagePaths.map(path => 
    `https://res.cloudinary.com/didkqst3j/image/upload/${path}`
  )
}


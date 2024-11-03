import { IArticulo } from "@/interfaces/articulos.interface";


export const Articulos: IArticulo[] = [
   { 
    id: "1",
    titulo: "Arcoiris de madera",
    descripciones: ["Arcoiris | Madera", "Arcoiris | Pastel", "Arcoiris | Monocromo", "Arcoiris | Natural", "Arcoiris | Bosque verde", "Arcoiris | Prado verde"],
    precio: "78,95 €",
    marca: 'grimm',
    categoria: [],
    referencias: ['10670', '10673', '93050', '10669', '10672', '10671'],
    // imagenes: ['https://res.cloudinary.com/didkqst3j/image/upload/c_limit,w_1500/f_auto/q_auto/v1/grimms/web-grimms/ntiem7ug8zrdjkuev5mb?_a=BBGABlAF0', 
    // 'https://res.cloudinary.com/didkqst3j/image/upload/c_limit,w_1500/f_auto/q_auto/v1/grimms/web-grimms/jwebwbw5pnvxz99t9hdh?_a=BBGABlAF0',
    // 'https://res.cloudinary.com/didkqst3j/image/upload/c_limit,w_1500/f_auto/q_auto/v1/grimms/web-grimms/pycrjiszsh1nq5ix0d5f?_a=BBGABlAF0',
    // 'https://res.cloudinary.com/didkqst3j/image/upload/c_limit,w_1500/f_auto/q_auto/v1/grimms/web-grimms/drkaskcvrouzqs3qhs6t?_a=BBGABlAF0', 
    // 'https://res.cloudinary.com/didkqst3j/image/upload/c_limit,w_1500/f_auto/q_auto/v1/grimms/web-grimms/dz9pz2y21jmi1g14tcrc?_a=BBGABlAF0',
    // 'https://res.cloudinary.com/didkqst3j/image/upload/c_limit,w_1500/f_auto/q_auto/v1/grimms/web-grimms/uokmhdjty3i5sg3tuyuv?_a=BBGABlAF0'
    // ]
    imagenes:  [
        'grimms/web-grimms/ntiem7ug8zrdjkuev5mb',
        'grimms/web-grimms/jwebwbw5pnvxz99t9hdh',
        'grimms/web-grimms/pycrjiszsh1nq5ix0d5f',
        'grimms/web-grimms/drkaskcvrouzqs3qhs6t',
        'grimms/web-grimms/dz9pz2y21jmi1g14tcrc',
        'grimms/web-grimms/uokmhdjty3i5sg3tuyuv'
    ]
},
]
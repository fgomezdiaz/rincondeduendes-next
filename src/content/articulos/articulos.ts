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
        imagenes:  [
            'grimms/web-grimms/ntiem7ug8zrdjkuev5mb',
            'grimms/web-grimms/jwebwbw5pnvxz99t9hdh',
            'grimms/web-grimms/pycrjiszsh1nq5ix0d5f',
            'grimms/web-grimms/drkaskcvrouzqs3qhs6t',
            'grimms/web-grimms/dz9pz2y21jmi1g14tcrc',
            'grimms/web-grimms/uokmhdjty3i5sg3tuyuv'
        ]
    },
    { 
        id: "2",
        titulo: "Tableros de construcción",
        descripciones: ["Tablero | Arcoiris", "Tablero | Pastel", "Tablero | Natural"],
        precio: "48,95 €",
        marca: 'grimm',
        categoria: [],
        referencias: ['10668', '10667', '10666'],
        imagenes:  [
            'grimms/web-grimms/kdbeais6dtd8soiqoeru',
            'grimms/web-grimms/enb1kiao6ds94csagnsb',
            'grimms/web-grimms/jsovozlb1bss8kecyfap',
        ]
    },
]
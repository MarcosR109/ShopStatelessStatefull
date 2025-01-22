import { Product } from "../interface/product";

export class ShopModel {
    items: Array<Product> = [];

    /*    precio?: number;
        nombre?: string;
        descripcion?: string;
        imagen?: string;
        alt?: string;*/
    constructor() {
        this.items = [
        { 
            nombre: "El círculo", 
            descripcion: "El Círculo es el segundo álbum de estudio en solitario del rapero español Kase.O, lanzado en 2016.", 
            alt: "Portada del álbum El círculo", 
            precio: 15.99 
        },
        { 
            nombre: "Back in Black", 
            descripcion: "Back in Black es el séptimo álbum de estudio de la banda australiana de hard rock AC/DC, lanzado en 1980.", 
            alt: "Portada del álbum Back in Black", 
            precio: 12.99 
        },
        { 
            nombre: "Thriller", 
            descripcion: "Thriller es el sexto álbum de estudio del artista estadounidense Michael Jackson, lanzado en 1982.", 
            alt: "Portada del álbum Thriller", 
            precio: 18.99 
        }
        ]
    }
}

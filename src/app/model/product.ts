import { Category } from '../model/category';
import * as firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;
export class Product {

    id!: number;
    nom!: String;
    qt!: number;
    Disponible!: boolean;
    date_cre !:Timestamp;
    date_mod!:any;
    photo!:string;
    categorie !:Category;
}


/*constructor(
        id:number,
        Nom:string,
        QT :number,
        Disponible:boolean,
        Date_creation :any,
        Date_mmodif:any,
        category :Category,

     ){}*/

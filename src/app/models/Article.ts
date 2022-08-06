import { Famille } from "./Famille";
import { FileHandle} from "./File-handler";

export class Article{
    id!: number;
    reference!: string;
    designation!: string;
    typeArticle!: string;
    codeBarre!:string;
    nomenclature!:string;
    uniteGestion!:string;
    stock!:number;
    imagesAr!: string;
    f!: Famille;
  
}
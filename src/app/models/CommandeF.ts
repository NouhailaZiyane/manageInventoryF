import { Article } from "./Article";
import { Conditionnement } from "./Conditionnement";
import { Fournisseur } from "./Fournisseur";

export class CommandeF{
    id!: number;
    datecmde!: string;
    daterec!: string;
    condPai!:string;
    reference!:string;
    modePai!:string;
    quantite!:number;
    montant!:number;
    f!: Fournisseur;
    a!:Article;
    c!:Conditionnement;
}
import { Article } from "./Article";
import { Client } from "./Client";
import { Conditionnement } from "./Conditionnement";

export class CommandeC{
    id!: number;
    datecmde!: string;
    daterec!: string;
    condPai!:string;
    reference!:string;
    modePai!:string;
    quantite!:number;
    montant!:number;
    f!: Client;
    a!:Article;
    c!:Conditionnement;
}
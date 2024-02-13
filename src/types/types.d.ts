export interface Categories{
    id: number,
    nomCategorie: string,
    description: string,
}
 export interface Tutos{
    id: number,
	titre: string,
	image: string,
	estPublie: boolean,
	datePublication:string,
    createAt: string,
	updatedAt: null|string
    categories: Categories[],
    etapes: Steps[],
    outils: Tools[],
    utilisateur: User,
    resume:string
 }
 export interface User{
    id: number,
	pseudonyme: string,
 }
 export interface Steps{
    id:number,
    contenu:string,
    imageEtape:string,
    ordre:number,
 }
 export interface Tools{
    id:number,
    nomDeLoutil:string,
 }
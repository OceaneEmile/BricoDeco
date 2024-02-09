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
    utilisateur: User,
 }
 export interface User{
    id: number,
	pseudonyme: string,
 }
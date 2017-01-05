export interface Product {
    _id:string;
    name:string;
    title:string;
    author?:string;
    category:string;
    description:string;
    price:number;
    thumbImageUrl:string;
    imageUrl:string;
}
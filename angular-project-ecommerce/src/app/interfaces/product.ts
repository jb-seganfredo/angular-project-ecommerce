export interface IProduct {
    _id: string;
    catalog_id?: string;
    title: string;
    description: string;
    price: number;
    totalInStock: number;
    totalAddedToCart: number;
    imageUrl: string;
}
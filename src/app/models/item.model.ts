export interface Item {
    imageUrl: string;
    name: string;
    description: string;
    quantity: number;
    price: number;
    attachments: Item[];
}
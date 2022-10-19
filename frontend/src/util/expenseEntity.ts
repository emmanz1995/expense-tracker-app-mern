export interface Expense {
    _id?: string;
    item: string;
    price: number;
    type: string;
    createdAt?: string;
    updatedAt?: string;
}
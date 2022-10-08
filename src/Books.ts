export interface Books {
    id: number | undefined;
    title: string;
    author: string;
    description: string | undefined;
    publisher: string | undefined;
    book_read: boolean;
}
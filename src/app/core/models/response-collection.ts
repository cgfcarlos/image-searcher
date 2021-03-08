export interface ResponseCollection<T> {
    total: number;
    total_pages: number;
    results: T[];
}
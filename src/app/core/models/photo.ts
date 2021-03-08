import { Collection } from "./collection";
import { User } from "./user";

export interface Photo {
    id: string,
    created_at: string,
    updated_at: string,
    promoted_at: string;
    width: number,
    height: number,
    color: string,
    blur_hash: string,
    description: string,
    alt_description: string,
    urls: { raw: string, full: string, regular: string, thumb: string},
    links: { self: string, html: string, download: string, download_location: string}
    categories: string[],
    likes: number,
    liked_by_user: boolean,
    current_user_collections: Collection[],
    user: User;
}
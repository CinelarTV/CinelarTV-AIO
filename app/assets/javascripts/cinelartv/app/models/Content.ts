import { ajax } from "../../lib/Ajax";
import Season, { SeasonData } from "./Season";

export enum ContentType {
    Movie = "MOVIE",
    TVShow = "TVSHOW",
}

interface ContentData {
    id: string;
    title: string;
    description: string;
    banner: string;
    cover: string;
    content_type: string;
    url: string;
    year: number;
    created_at: string;
    updated_at: string;
    trailer_url: string | null;
    available: boolean;
    seasons?: SeasonData[];
    liked?: boolean;
    related_content?: ContentData[];
}

class Content {
    private data: ContentData;

    constructor(data: ContentData) {
        this.data = data;

        if ('seasons' in data) {
            this.data.seasons = data.seasons;
        }

        if ('liked' in data) {
            this.data.liked = data.liked;
        }

        if ('related_content' in data) {
            this.data.related_content = data.related_content;
        }
    }

    get id(): string {
        return this.data.id;
    }

    get title(): string {
        return this.data.title;
    }

    get description(): string {
        return this.data.description;
    }

    get banner(): string {
        return this.data.banner;
    }

    get cover(): string {
        return this.data.cover;
    }

    get contentType(): string {
        return this.data.content_type;
    }

    get url(): string {
        return this.data.url;
    }

    get year(): number {
        return this.data.year;
    }

    get createdAt(): string {
        return this.data.created_at;
    }

    get updatedAt(): string {
        return this.data.updated_at;
    }

    get trailerUrl(): string | null {
        return this.data.trailer_url;
    }

    get available(): boolean {
        return this.data.available;
    }

    get seasons(): Season[] | undefined {
        return this.data.seasons?.map((seasonData) => new Season(seasonData));
    }

    get liked(): boolean | undefined {
        return this.data.liked;
    }

    get relatedContent(): Content[] | undefined {
        return this.data.related_content?.map((relatedContentData) => new Content(relatedContentData));
    }

    get isMovie(): boolean {
        return this.contentType === ContentType.Movie;
    }

    get isTVShow(): boolean {
        return this.contentType === ContentType.TVShow;
    }

    static async getById(id: string): Promise<Content | null> {
        try {
            const response = await ajax.get(`/contents/${id}.json`);
            return new Content(response.data.content);
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

export default Content;
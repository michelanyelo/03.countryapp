export interface Country {
    name: string;
    capital: string;
    population: number;
    flags: {
        png: string;
        svg: string;
        alt: string;
    };
    cca2: string;
    region: string;
    subregion: string;
}

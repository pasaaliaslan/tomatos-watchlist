export const TITLE = "Tomato's Watchlist";

export type Movie = {
    tomatometer: number;
    audienceScore: number;
    title: string;
    credit: string;
    boxOffice: number;
    year: number;
    url: string;
};

export type ExtendedMovie = {
    tomatometer: number;
    audienceScore: number;
    title: string;
    credit: string;
    boxOffice: number;
    year: number;
    url: string;
    glossary: string;
    rating: string;
    genre: string[];
    director: string[];
    producer: string[];
    writer: string[];
    runtime: number;
    img: string;
};

export type Celebrity = {
    name: string;
    img: string;
    birthday: string;
    birthplace: string;
    movies: Movie[];
};

export const TOAST_SUCCESS = 'SUCCESS';
export const TOAST_IMPROPER_INPUT = 'Make sure you correctly typed the name.';
export const TOAST_NO_SUCH_CELEBRITY = 'No such celebrity.';

export type ToastMessage = 'SUCCESS' | 'Make sure you correctly typed the name.' | 'No such celebrity.';

export type SelectOption = {
    value: string;
    label: string;
};

export const optionGenres = [
    { value: 'Action', label: 'Action' },
    { value: 'Adventure', label: 'Adventure' },
    { value: 'Animation', label: 'Animation' },
    { value: 'Crime', label: 'Crime' },
    { value: 'Comedy', label: 'Comedy' },
    { value: 'Drama', label: 'Drama' },
    { value: 'Documentary', label: 'Documentary' },
    { value: 'Fantasy', label: 'Fantasy' },
    { value: 'Horror', label: 'Horror' },
    { value: 'Kids & Family', label: 'Kids & Family' },
    { value: 'Music', label: 'Music' },
    { value: 'Musical', label: 'Musical' },
    { value: 'Mystery & Thriller', label: 'Mystery & Thriller' },
    { value: 'Romance', label: 'Romance' },
    { value: 'Sci-Fi', label: 'Sci-Fi' },
    { value: 'War', label: 'War' },
    { value: 'Western', label: 'Western' },
];

export type WatchlistFilter = {
    title: string;
    genres: string[];
};

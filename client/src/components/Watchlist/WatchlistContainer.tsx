import { useEffect, useState } from 'react';
import { ExtendedMovie, WatchlistFilter } from '../../types';
import { useAppSelector } from '../../hooks/reduxHooks';
import '../../style/Watchlist/WatchlistContainer.css';
import WatchlistItem from './WatchlistItem';

export default function WatchlistContainer({
    titleFilter,
    genresFilter,
}: {
    titleFilter: string;
    genresFilter: string[];
}) {
    const WATCHLIST = useAppSelector((state) => state.watchlist.movies);
    const [filters, setFilters] = useState<WatchlistFilter>({
        title: '',
        genres: [],
    });

    useEffect(() => {
        setFilters({ title: titleFilter.toLowerCase(), genres: genresFilter });
    }, [titleFilter, genresFilter]);

    const titleLogic = (movie: ExtendedMovie) => {
        return filters.title === '' || movie.title.toLowerCase().includes(filters.title);
    };

    const genreLogic = (movie: ExtendedMovie) => {
        let logic = true;

        for (const genre of filters.genres) {
            let cur = false;

            for (const g of movie.genre) {
                if (genre.toLowerCase() == g.toLowerCase()) {
                    cur = true;
                }
            }

            logic = logic && cur;
        }

        return logic;
    };

    const getFilterLogic = (movie: ExtendedMovie) => {
        return titleLogic(movie) && genreLogic(movie);
    };

    return (
        <div className="WatchlistContainer">
            {WATCHLIST.filter((movie) => getFilterLogic(movie)).map((movie) => {
                return <WatchlistItem movie={movie} key={movie.url} />;
            })}
        </div>
    );
}

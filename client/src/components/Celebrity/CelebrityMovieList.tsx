import { useEffect } from 'react';
import { Movie } from '../../types';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { ADD, REMOVE } from '../../redux/Watchlist';
import getMovie from '../../services/getMovie';
import '../../style/Celebrity/CelebrityMovieList.css';

export default function CelebrityMovieList({ movies }: { movies: Movie[] }) {
    const dispatch = useAppDispatch();
    const WATCHLIST = useAppSelector((state) => state.watchlist.movies);

    useEffect(() => {
        return;
    }, [WATCHLIST]);

    const inWatchlist = (movie: Movie) => {
        for (const m of WATCHLIST) {
            if (movie.url == m.url) {
                return true;
            }
        }
        return false;
    };

    const handleButtonPress = (movie: Movie) => {
        if (inWatchlist(movie)) {
            removeMovieFromWatchlist(movie);
        } else {
            addMovieToWatchlist(movie);
        }
    };

    const addMovieToWatchlist = async (movie: Movie) => {
        await getMovie(movie.url).then((response) => {
            dispatch(ADD({ ...response, ...movie }));
        });
    };

    const removeMovieFromWatchlist = (movie: Movie) => {
        dispatch(REMOVE(movie.url));
    };

    const numberToMoney = (money: number) => {
        if (!(money > 0)) {
            return '-';
        }
        return money < 1000000 ? `${money / 1000}K` : `${money / 1000000}M`;
    };

    return (
        <div className="CelebrityMovieList">
            <table className="table table-responsive">
                <thead>
                    <tr>
                        <td>Title</td>
                        <td width="120">Tomatometer</td>
                        <td width="132">Audience Score</td>
                        <td width="96">Box Office</td>
                        <td>Year</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie) => (
                        <tr key={movie.title + movie.year}>
                            <td>
                                <a
                                    href={`https://www.rottentomatoes.com/m/${movie.url}`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {movie.title}
                                </a>
                            </td>
                            <td>{movie.tomatometer}</td>
                            <td>{movie.audienceScore}</td>
                            <td>{numberToMoney(movie.boxOffice)}</td>
                            <td>{movie.year}</td>
                            <td>
                                <button
                                    type="button"
                                    className={`btn btn${inWatchlist(movie) ? '-outline' : ''}-danger`}
                                    onClick={() => {
                                        handleButtonPress(movie);
                                    }}
                                >
                                    +
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

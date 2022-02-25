import { useEffect } from 'react';
import { ExtendedMovie } from '../../types';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { REMOVE } from '../../redux/Watchlist';
import '../../style/Watchlist/WatchlistItem.css';

export default function WatchlistItem({ movie }: { movie: ExtendedMovie }) {
    const dispatch = useAppDispatch();

    useEffect(() => {
        return;
    }, [movie]);

    const removeMovieFromWatchlist = () => {
        dispatch(REMOVE(movie.url));
    };

    return (
        <div className="WatchlistItem">
            <div className="movieContent">
                <a href={movie.url} target="_blank" rel="noreferrer">
                    <img src={movie.img} alt={movie.title} />
                </a>
                <div className="TextInfo">
                    <h4>{`${movie.title} (${movie.year})`}</h4>
                    <h6>Audience Score: {movie.audienceScore}</h6>
                    <h6>Tomatometer: {movie.tomatometer}</h6>
                    <div className="Badges">
                        {movie.genre.map((g) => (
                            <span className="badge bg-warning" key={g}>
                                {g}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <button className="btn btn-outline-danger" onClick={removeMovieFromWatchlist}>
                    Remove from Watchlist
                </button>
            </div>
        </div>
    );
}

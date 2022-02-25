import React, { useEffect, useState } from 'react';
import Select, { MultiValue } from 'react-select';
import { optionGenres, SelectOption } from '../types';
import NavBar from './components/NavBar/NavBar';
import OffcanvasNavBar from './components/NavBar/OffcanvasNavBar';
import WatchlistContainer from './components/Watchlist/WatchlistContainer';
import './style/Watchlist.css';

export default function WatchlistScreen() {
    const [width, setWidth] = useState(window.innerWidth);
    const handleResize = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [width]);

    const [titleFilter, setTitleFilter] = useState<string>('');

    const [genres, setGenres] = useState<string[]>([]);

    useEffect(() => {
        return;
    }, [titleFilter, genres]);

    const handleGenreSelection = (values: MultiValue<SelectOption>) => {
        const temp = [];
        for (const value of values) {
            temp.push(value.value);
        }
        setGenres(temp);
    };

    return (
        <div className="Watchlist">
            <NavBar width={width} />
            <div className="content">
                <div className="SearchLine">
                    <form className="SearchBar">
                        <input
                            className="form-control form-control-lg"
                            type="search"
                            placeholder="Filter by title"
                            onKeyPress={(event) => {
                                if (event.key == 'Enter') {
                                    event.preventDefault();
                                }
                            }}
                            value={titleFilter}
                            onChange={(event) => setTitleFilter(event.target.value)}
                            required
                        />
                    </form>
                    <Select
                        className="GenreFilter"
                        onChange={(value) => handleGenreSelection(value)}
                        options={optionGenres}
                        placeholder="Filter by Genre"
                        isSearchable
                        isMulti
                    />
                    {width < 1000 ? <OffcanvasNavBar /> : ''}
                </div>
                <WatchlistContainer titleFilter={titleFilter} genresFilter={genres} />
            </div>
        </div>
    );
}

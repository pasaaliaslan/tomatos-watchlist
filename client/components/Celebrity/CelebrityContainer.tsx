import React from 'react';
import { Celebrity } from '../../types';
import '../../style/Celebrity/CelebrityContainer.css';
import WelcomeMessage from '../WelcomeMessage';
import CelebrityCard from './CelebrityCard';
import CelebrityLoading from './CelebrityLoading';
import CelebrityMovieList from './CelebrityMovieList';

export default function CelebrityContainer({
    celebrity,
    isLoading,
    isOpening,
}: {
    celebrity: Celebrity;
    isLoading: boolean;
    isOpening: boolean;
}) {
    return (
        <div className="CelebrityContainer">
            {isLoading ? (
                <CelebrityLoading />
            ) : isOpening ? (
                <WelcomeMessage />
            ) : (
                <div className="Content">
                    <CelebrityCard celebrity={celebrity} />
                    <CelebrityMovieList movies={celebrity.movies} />
                </div>
            )}
        </div>
    );
}

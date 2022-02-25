import { TITLE } from '../../types';
import '../style/WelcomeMessage.css';

export default function WelcomeMessage() {
    return (
        <div className="WelcomeMessage">
            <h1>Welcome to {TITLE}.</h1>
            <br />
            <h4>
                Here you can search your favorite movie celebrities, see the movies they contributed, and add the ones
                you are interested in into your watchlist.
            </h4>
            <br />
            <h4>
                The data presented in this website is extracted from{' '}
                <a href="https://www.rottentomatoes.com" target="_blank" rel="noreferrer">
                    www.rottentomatoes.com
                </a>
                .
            </h4>
        </div>
    );
}

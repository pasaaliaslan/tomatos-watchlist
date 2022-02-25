import React, { useEffect, useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import './style/App.css';
import NavBar from './components/NavBar/NavBar';
import getCelebrity from './services/getCelebrity';
import CelebrityContainer from './components/Celebrity/CelebrityContainer';
import { Celebrity, ToastMessage, TOAST_IMPROPER_INPUT, TOAST_NO_SUCH_CELEBRITY, TOAST_SUCCESS } from './types';
import OffcanvasNavBar from './components/NavBar/OffcanvasNavBar';

export default function App() {
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

    const [isOpening, setIsOpening] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [toastMessage, setToastMessage] = useState<ToastMessage>(TOAST_SUCCESS);

    const [searchInput, setSearchInput] = useState<string>('');
    const [celebrity, setCelebrity] = useState<Celebrity>({
        name: '',
        img: '',
        birthday: '',
        birthplace: '',
        movies: [],
    });

    useEffect(() => {
        setIsOpening(true);
        setIsLoading(false);
        setToastMessage(TOAST_SUCCESS);
    }, []);

    const handleInput = (value: string) => {
        setSearchInput(value);
        setToastMessage(TOAST_SUCCESS);
    };

    const handleSubmit = () => {
        setIsLoading(true);

        setSearchInput;
        setToastMessage(TOAST_SUCCESS);

        if (!searchInput.includes(' ')) {
            setToastMessage(TOAST_IMPROPER_INPUT);
            setIsLoading(false);
            return;
        }

        getCelebrity(searchInput.split(' ').join('_')).then((response) => {
            if (response == 'NOT FOUND') {
                setToastMessage(TOAST_NO_SUCH_CELEBRITY);
                setIsLoading(false);
                return;
            }
            setCelebrity(response);
            setIsOpening(false);
            setIsLoading(false);
        });
    };

    return (
        <div className="App">
            <ToastContainer position="top-center">
                <Toast
                    className="toast toast-warning"
                    show={toastMessage != TOAST_SUCCESS}
                    onClose={() => setToastMessage(TOAST_SUCCESS)}
                    delay={3000}
                    autohide
                >
                    <Toast.Header>
                        <strong className="me-auto">Invalid Input</strong>
                    </Toast.Header>
                    <Toast.Body>{toastMessage}</Toast.Body>
                </Toast>
            </ToastContainer>

            <NavBar width={width} />
            <div className="content">
                <div className="SearchLine">
                    <form className="SearchBar">
                        <input
                            className="form-control form-control-lg"
                            type="search"
                            placeholder="Enter celebrity name..."
                            onKeyPress={(event) => {
                                if (event.key == 'Enter') {
                                    event.preventDefault();
                                    handleSubmit();
                                }
                            }}
                            value={searchInput}
                            onChange={(event) => handleInput(event.target.value)}
                            required
                        />
                        <button
                            className="btn btn-danger"
                            onClick={(event) => {
                                event.preventDefault();
                                handleSubmit();
                            }}
                        >
                            Search
                        </button>
                    </form>
                    {width < 1000 ? <OffcanvasNavBar /> : ''}
                </div>
                <CelebrityContainer celebrity={celebrity} isLoading={isLoading} isOpening={isOpening} />
            </div>
        </div>
    );
}

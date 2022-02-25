import { Link } from 'react-router-dom';
import { TITLE } from '../../types';
import '../../style/NavBar/TitleOnlyNavBar.css';

export default function TitleOnlyNavBar() {
    return (
        <Link className="OffcanvasTitle" to="/">
            {TITLE}
        </Link>
    );
}

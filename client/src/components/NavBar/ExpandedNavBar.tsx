import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { TITLE } from '../../types';
import '../../style/NavBar/ExpandedNavBar.css';

export default function ExpandedNavBar() {
    return (
        <Navbar className="ExpandedNavBar">
            <Navbar.Brand>
                <Link className="TitleCard" to="/">
                    {TITLE}
                </Link>
            </Navbar.Brand>
            <Nav className="Links">
                <Link className="NavBarItem" to="/">
                    Explore
                </Link>
                <Link className="NavBarItem" to="/watchlist">
                    Watchlist
                </Link>
            </Nav>
        </Navbar>
    );
}

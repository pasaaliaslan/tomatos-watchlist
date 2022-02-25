import { Navbar, Offcanvas, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { TITLE } from '../../types';
import '../../style/NavBar/OffcanvasNavBar.css';

export default function OffcanvasNavBar() {
    return (
        <Navbar expand={false}>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas placement="end">
                <Offcanvas.Header closeButton>
                    <Link className="offcanvas-title" to="/">
                        {TITLE}
                    </Link>
                </Offcanvas.Header>
                <Offcanvas.Body className="offcanvas-body">
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Link className="NavBarItem" to="/">
                            Explore
                        </Link>
                        <Link className="NavBarItem" to="/watchlist">
                            Watchlist
                        </Link>
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Navbar>
    );
}

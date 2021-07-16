import { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import infoCovidLogo from "../../assets/img/info-covid-logo-purp.svg";
import infoCovidIcon from "../../assets/img/info-covid-icon.svg";
import "./topNavbar.scss";


const TopNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className='top-navbar sticky-top'>
            <Navbar className="top-navbar-content container" light expand="lg">
                <NavbarBrand href="/">
                    <img src={infoCovidIcon} alt="Icon" />
                    <img className='top-navbar-content-logo' src={infoCovidLogo} alt="Logo" />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar className="justify-content-between">
                    <Nav navbar />
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="#">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Penularan</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Gejala</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Pencegahan</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className="btn-navbar">Cek Provinsimu !</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default TopNavbar
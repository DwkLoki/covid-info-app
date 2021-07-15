import { RiInstagramFill } from "react-icons/ri";
import { RiGitlabFill } from "react-icons/ri";
import { VscGithubInverted } from "react-icons/vsc";
import { GrLinkedinOption } from "react-icons/gr";
import { IoLogoTwitter } from "react-icons/io";
import { Nav, NavItem, NavLink } from 'reactstrap';
import "./footer.scss";

const Footer = () => {
    return (
        <div className='footer text-center py-5' style={{ backgroundColor: '#ffe8e7' }}>
            <div className="container">
                <p className='footer-text' style={{ color: '#52006A', margin: '0px' }}>Hubungi saya :</p>
                <Nav className="footer-icon d-flex justify-content-center py-3">
                    <NavItem>
                        <NavLink className='footer-icon-item' href="https://github.com/DwkLoki"><VscGithubInverted size='20px' /></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='footer-icon-item' href="https://gitlab.com/DwkLoki"><RiGitlabFill size='20px' /></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='footer-icon-item' href="https://www.linkedin.com/in/dwiky-darmawansyah-1221a0200"><GrLinkedinOption size='20px' /></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='footer-icon-item' href="https://www.instagram.com/dwk_loki"><RiInstagramFill size='20px' /></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='footer-icon-item' href="https://twitter.com/Dwk_loki"><IoLogoTwitter size='20px' /></NavLink>
                    </NavItem>
                </Nav>
                <p className='footer-text' style={{ color: '#52006A' }}>2021 &copy; All rights reserved by Dwiky Darmawansyah</p>
            </div>
        </div>
    )
}

export default Footer

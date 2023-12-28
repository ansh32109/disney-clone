import styled from "styled-components";
import logo from './../assets/images/logo.svg'

const Header = (props) => {
    return (
        <Nav>
            <Logo>
                <img src={logo} alt='Disney+'/>
            </Logo> 
            <NavMenu>Menu items</NavMenu>
        </Nav>
    )
}

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 15px;
    z-index: 3;
`

const Logo = styled.a`
    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0px;
    display: inline-block;
    img{
        display: block;
        width: 100%;
    }
    cursor: pointer;
`

const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    
`

export default Header;
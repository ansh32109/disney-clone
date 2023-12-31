import styled from "styled-components";
import { useDispatch , useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom';
import logo from './../assets/images/logo.svg'
import home from './../assets/images/home-icon.svg'
import search from './../assets/images/search-icon.svg'
import watchlist from './../assets/images/watchlist-icon.svg'
import originals from './../assets/images/original-icon.svg'
import movies from './../assets/images/movie-icon.svg'
import series from './../assets/images/series-icon.svg'
import { auth, provider } from "../firebase";
import { selectUserEmail , selectUserName , selectUserPhoto, setSignOutState, setUserLoginDetails } from "../features/users/userSlice";
import { useEffect } from "react";

const Header = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = useSelector(selectUserName);
    const email = useSelector(selectUserEmail);
    const photo = useSelector(selectUserPhoto);

    useEffect(() =>{
        auth.onAuthStateChanged(async(user) => {
            if(user){
                setUser(user);
                navigate('/home');
            }
        })
    } , [userName])

    const handleAuth = () => {
        if (!userName){
            auth.signInWithPopup(provider).then((result) => {
                setUser(result.user);
            }).catch((error) => {
                alert(error.message);
            });
        }
        else if(userName){
            auth.signOut().then(() => {
                dispatch(setSignOutState());
                navigate('/');
            }).catch((error) => {
                alert(error.message);
            })
        }
        
    }

    const setUser = (user) => {
        dispatch(setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
        }));
    }

    return (
        <Nav>
            <Logo>
                <img src={logo} alt='Disney+'/>
            </Logo> 

            {!userName?
            <Login onClick={handleAuth}>Login</Login>
            :
            <>  
                <NavMenu>
                    <a href="/home">
                        <img src={home} alt="Home"/> 
                        <span>HOME</span>
                    </a>
                    <a href="/search">
                        <img src={search} alt="Search"/>
                        <span>SEARCH</span>
                    </a>
                    <a href="/watchlist">
                        <img src={watchlist} alt="Watchlist"/>
                        <span>WATCHLIST</span>
                    </a>
                    <a href="/originals">
                        <img src={originals} alt="Originals"/>
                        <span>ORIGINALS</span>
                    </a>
                    <a href="/movies">
                        <img src={movies} alt="Movies"/>
                        <span>MOVIES</span>
                    </a>
                    <a href="/series">
                        <img src={series} alt="Series"/>
                        <span>SERIES</span>
                    </a>
                </NavMenu>
                <SignOut>
                    <UserImg src={photo} alt={userName}/>
                    <Dropdown>
                        <span onClick={handleAuth}>Sign Out</span>
                    </Dropdown>
                </SignOut>
            </>}    

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
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

    a{
        display: flex;
        align-items: center;
        padding: 0 12px;

        img{
            height: 20px;
            min-width: 20px;
            width: 20px;
            z-index: auto;
        }

        span{
            color: rgb(249,249,249);
            font-size: 13px;
            letter-spacing: 1.5px;
            line-height: 1.08;
            padding: 2px 0px;
            white-space: nowrap;
            position: relative;
        

            &:before{
                background-color: rgb(249,249,249);
                border-radius: 0px 0px 4px 4px;
                bottom: -6px;
                content: '';
                height: 2px;
                opacity: 0;
                position: absolute;
                right: 0px;
                left: 0px;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94)0s;
                visibility: hidden;
                width: auto;

            }
        }

        &:hover{
            span:before{
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
            }
        }

    }

    @media (max-width: 768px){
        display: none;
    }
`

const Login = styled.a`
    background-color: rgba(0,0,0,0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 6px;
    transition: all 200ms ease 0s;

    &:hover{
        background-color: #f9f9f9;
        color: #000000;
        border-color: transparent;
        cursor: pointer;
    }
`

const UserImg = styled.img`
    height: 100%;
    border: 1px transparent #f9f9f9;
`

const Dropdown = styled.div`
    position: absolute;
    top: 48px;
    right: 0px;
    background-color: #131313;
    border: 1px solid rgba(151,151,151,0.34);
    border-radius: 4px;
    box-shadow: rgb(0 0 0/50%) 0px 0px 18px 0px;
    padding: 10px;
    font-size: 14px;
    letter-spacing: 2.5px;
    width: 100px;
    opacity: 0;
`

const SignOut = styled.div`
    position: relative;
    height: 48px;
    width: 48px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    ${UserImg}{
        border-radius: 50%;
        width: 100%;
        height: 100%;
    }

    &:hover{
        ${Dropdown}{
            opacity: 1;
            transition-duration: 1s;
        }
    }
`

export default Header;
import './Header.scss';
import { Link } from 'react-router-dom';

// variables
const { REACT_APP_SERVER_URL: SERVER_URL } = process.env;

const Header = ({ isLoggedIn, setShowLoginModal }) => {
    const PrivateMenuItems = () => {
        return (
            <>
                <li className='header__list-item'><button className='header__button'>Upload an Image</button></li>
                <li className='header__list-item'><a className='header__link' href={`${SERVER_URL}/auth/logout`}>Sign Out</a></li>
            </>
        );
    };
    
    const PublicMenuItems = () => {
        return (
            <li className='header__list-item'><button className='header__button' onClick={() => setShowLoginModal(true)}>Login</button></li>
        )
    }
    
    return (
        <header className='header'>
            <h1><Link className='header__title' to='/'>IMGrepo</Link></h1>
            <nav>
                <ul className='header__list'>
                    {isLoggedIn ? PrivateMenuItems() : PublicMenuItems()}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
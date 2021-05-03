import './Header.scss';
import { Link } from 'react-router-dom';

// variables
const { REACT_APP_SERVER_URL: SERVER_URL } = process.env;

const Header = ({ isLoggedIn, setShowLoginModal }) => {
    return (
        <header className='header'>
            <h1><Link className='header__title' to='/'>IMGrepo</Link></h1>
            <nav>
                <ul className='header__list'>
                    <li className='header__list-item'>
                        {isLoggedIn ?
                        <a className='header__button' href={`${SERVER_URL}/api/auth/logout`}>Sign Out</a> :
                        <button className='header__button' onClick={() => setShowLoginModal(true)}>Login</button>}
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
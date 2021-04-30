import './Header.scss';
import { Link } from 'react-router-dom';

const Header = ({ setShowLoginModal }) => {
    return (
        <header className='header'>
            <h1><Link className='header__title' to='/'>IMGrepo</Link></h1>
            <nav>
                <ul className='header__list'>
                    <li className='header__list-item'>
                        <button className='header__button' onClick={() => setShowLoginModal(true)}>Login</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
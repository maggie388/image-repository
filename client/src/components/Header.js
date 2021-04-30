import './Header.scss';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <h1><Link className='header__title' to='/'>IMGrepo</Link></h1>
            <nav>
                <ul className='header__list'>
                    <li className='header__list-item'><NavLink className='header__list-item' to='/login'>Login</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
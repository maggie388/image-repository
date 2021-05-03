import './LoginModal.scss';

// assets
import googleLogo from '../assets/icons/google-logo.png';

const LoginModal = () => {
    return (
        <div className='login-modal'>
            <h3 className='login-modal__title'>Login</h3>
            <p className='login-modal__phrase'>Welcome Back</p>
            <a href={`${process.env.REACT_APP_SERVER_URL}/api/auth/login/google`} className='login-modal__button'>
                <img className='login-modal__google-logo' src={googleLogo} alt='Google logo' />
                Login with Google
            </a>
        </div>
    );
};

export default LoginModal;
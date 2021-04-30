import './LoginModal.scss';

// assets
import googleLogo from '../assets/images/google-logo.png';

const LoginModal = () => {
    return (
        <div className='login-modal'>
            <h3 className='login-modal__title'>Login</h3>
            <p className='login-modal__phrase'>Welcome Back</p>
            <button className='login-modal__button'>
                <img className='login-modal__google-logo' src={googleLogo} alt='Google logo' />
                Login with Google
            </button>
        </div>
    );
};

export default LoginModal;
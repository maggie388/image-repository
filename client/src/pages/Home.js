import './Home.scss';


// components
import LoginModal from '../components/LoginModal';

const Home = ({ showLoginModal, setShowLoginModal }) => {
    return (
        <>
            <main className='home' onClick={() => setShowLoginModal(false)}>
                <h1> home page</h1>
            </main>
            {showLoginModal && <LoginModal />}
        </>
    );
};

export default Home;
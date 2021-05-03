import './Home.scss';

const Home = ({ setShowLoginModal }) => {
    return (
        <>
            <main className='home' onClick={() => setShowLoginModal(false)}>
                <h1> home page</h1>
            </main>
        </>
    );
};

export default Home;
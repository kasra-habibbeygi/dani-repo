import { HomeContainer } from './home.style';

const Home = () => {
    return (
        <HomeContainer>
            <header>
                <div className='left-side'>
                    <p>CONTACT ME</p>
                    <p>SHARIFIDANNY@GMAIL.COM</p>
                </div>
                <div className='right-side'>
                    <p>
                        I’m Danial Sharifi, born in 1999 , Designer and Product Manager live in <span>Tehran</span>
                        <b>Barcelona</b>
                    </p>
                    <a href=''>Watch CV</a>
                </div>
            </header>
            <div className='header-img'>
                <img src='/portfo5-min.webp' alt='' />
            </div>
        </HomeContainer>
    );
};

export default Home;

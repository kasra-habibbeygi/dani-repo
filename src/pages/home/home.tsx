import { Arrow } from '@/assets/icons';
import { HomeContainer } from './home.style';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';

const Home = () => {
    const matches = useMediaQuery('(max-width:600px)');

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
                    <Link to=''>Watch CV</Link>
                </div>
            </header>
            <div className='header-img'>
                <img src={matches ? '/Res Landing Image.png' : '/portfo5-min.webp'} alt='' />
                <div className='label'>
                    <span>Projects</span>
                    <button>
                        <Arrow />
                    </button>
                    <span>پروژه‌ها</span>
                </div>
            </div>
            <div className='cv-project'>
                <div className='project-list'>
                    <Link to='/project/BRAINFROG' className='item '>
                        <div className='row-line'>
                            <div className='row-line2'>
                                <p className='title'>
                                    <span>BRAINFROG</span>
                                    <small>Application</small>
                                </p>
                                <img src='/portfo1-min.webp' alt='project logo' />
                            </div>
                        </div>
                    </Link>
                    <Link to='/project/RAKIZ-STUDIO' className='item '>
                        <div className='row-line'>
                            <div className='row-line2'>
                                <p className='title'>
                                    <span>RAKIZ STUDIO</span>
                                    <small>Branding, Website</small>
                                </p>
                                <img src='/portfo2-min.webp' alt='project logo' />
                            </div>
                        </div>
                    </Link>
                    <Link to='/project/JRI' className='item '>
                        <div className='row-line'>
                            <div className='row-line2'>
                                <p className='title '>
                                    <span>JRI</span>
                                    <small>Website</small>
                                </p>
                                <img src='/portfo1-min.webp' alt='project logo' />
                            </div>
                        </div>
                    </Link>
                    <Link to='/project/TDEX' className='item '>
                        <div className='row-line'>
                            <div className='row-line2'>
                                <p className='title'>
                                    <span>TDEX</span>
                                    <small>Application, Website</small>
                                </p>
                                <img src='/portfo4-min.webp' alt='project logo' />
                            </div>
                        </div>
                    </Link>
                    <Link to='/project/A-EYES' className='item'>
                        <div className='row-line'>
                            <div className='row-line2'>
                                <p className='title'>
                                    <span>A-EYES</span>
                                    <small>Application</small>
                                </p>
                                <img src='/portfo6-min.webp' alt='project logo' />
                            </div>
                        </div>
                    </Link>
                    <Link to='/project/QUBY' className='item'>
                        <div className='row-line'>
                            <div className='row-line2'>
                                <p className='title'>
                                    <span>QUBY</span>
                                    <small>Application, Branding</small>
                                </p>
                                <img src='/portfo3-min.webp' alt='project logo' />
                            </div>
                        </div>
                    </Link>
                    <Link to='/project/FIRE-DRILL' className='item '>
                        <div className='row-line'>
                            <div className='row-line2'>
                                <p className='title'>
                                    <span>FIRE DRILL</span>
                                    <small>Application</small>
                                </p>
                                <img src='/portfo4-min.webp' alt='project logo' />
                            </div>
                        </div>
                    </Link>
                    <Link to='/project/DATIS-INTERNATIONAL' className='item '>
                        <div className='row-line'>
                            <div className='row-line2'>
                                <p className='title'>
                                    <span>DATIS INTERNATIONAL</span>
                                    <small>Website</small>
                                </p>
                                <img src='/portfo7-min.webp' alt='project logo' />
                            </div>
                        </div>
                    </Link>
                </div>
                <p className='footer'>Danial Sharifi’s Portfolio 2025</p>
            </div>
        </HomeContainer>
    );
};

export default Home;

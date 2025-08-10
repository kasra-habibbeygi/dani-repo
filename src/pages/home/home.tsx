import { FC } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';
import { ProjectItem } from '../data';

// Assets
import { Arrow } from '@/assets/icons';
import { HomeContainer } from './home.style';

//Types
interface HomeProps {
    data: ProjectItem[];
}
const Home: FC<HomeProps> = ({ data }) => {
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
                <img src={matches ? '/img/Res Landing Image.png' : '/img/portfo5-min.webp'} alt='' />
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
                    {data.map(item => (
                        <Link to={`/project/${item.name}`} className='item ' key={item.id}>
                            <div className='row-line'>
                                <div className='row-line2'>
                                    <p className='title'>
                                        <span>{item.name}</span>
                                        <small>{item.type}</small>
                                    </p>
                                    <img src={item.cover} alt='project logo' />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <p className='footer'>Danial Sharifi’s Portfolio 2025</p>
            </div>
        </HomeContainer>
    );
};

export default Home;

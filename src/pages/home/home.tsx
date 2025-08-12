import { FC } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';
import { ProjectItem } from '../data';
import { motion } from 'framer-motion';

// Assets
import { Arrow, BlackShadow, WhiteShadow } from '@/assets/icons';
import { HomeContainer } from './home.style';

//Types
interface HomeProps {
    data: ProjectItem[];
}
const Home: FC<HomeProps> = ({ data }) => {
    const matches = useMediaQuery('(max-width:600px)');

    return (
        <HomeContainer>
            <div className='header-layer'></div>
            {/* <img src='/img/noise.webp' className='noise' alt='' /> */}
            <WhiteShadow className='shadow-2' />
            <BlackShadow className='shadow-1' />
            <header>
                <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        delay: 0.6
                    }}
                    className='left-side'
                    href='mailto:sharifidanny@gmail.com'
                >
                    <p>CONTACT ME</p>
                    <p>SHARIFIDANNY@GMAIL.COM</p>
                </motion.a>
                <div className='right-side'>
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            delay: 0.5
                        }}
                    >
                        I’m Danial Sharifi, born in 1999 , Designer and Product Manager live in{' '}
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                delay: 0.8
                            }}
                        >
                            Tehran
                        </motion.span>
                        <motion.b
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                delay: 1
                            }}
                        >
                            Barcelona
                        </motion.b>
                    </motion.p>
                    <motion.a
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            delay: 1.2
                        }}
                        href='https://drive.google.com/file/d/1acGoNIlYFWxjMjrINcKpKUZJ-4COw3rB/view?usp=sharing'
                        target='_blank'
                    >
                        Watch CV
                        <Arrow />
                    </motion.a>
                </div>
            </header>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 1
                }}
                className='header-img'
            >
                <img src={matches ? '/img/Res Landing Image.png' : '/img/portfo5-min.webp'} alt='' />
                <div className='label'>
                    <span>Projects</span>
                    <button>
                        <Arrow />
                    </button>
                    <span className='persian'>پروژه‌ها</span>
                </div>
            </motion.div>
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
                                    <div className='thumb'>
                                        <img src={item.cover} alt='project logo' />
                                        <span className='overlay'>See project</span>
                                    </div>
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

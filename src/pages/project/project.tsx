/* eslint-disable @typescript-eslint/no-explicit-any */
import { createElement, FC, useState } from 'react';
import { ProjectContainer } from './project.style';
import { useNavigate, useParams } from 'react-router-dom';
import { ProjectItem } from '../data';
import { Arrow } from '@/assets/icons';
import { useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';

interface ProjectProps {
    data: ProjectItem[];
}

const Project: FC<ProjectProps> = ({ data }) => {
    const matches = useMediaQuery('(max-width:1200px)');
    const { name } = useParams<{ name: ProjectItem['name'] }>();
    const navigate = useNavigate();

    const project = data.find(item => item.name === name);
    const [selectedImage, setSelectedImage] = useState<string | null>(project?.pictures?.[0] || null);

    const handleBack = () => {
        navigate('/');
    };

    if (!project) {
        return (
            <ProjectContainer>
                <p>Project not found: {name}</p>
            </ProjectContainer>
        );
    }
    return (
        <ProjectContainer>
            <motion.header
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    delay: 0.5
                }}
            >
                Danial Sharifi
            </motion.header>
            <div className='border-line'>
                <div className='project-info'>
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            delay: 0.5
                        }}
                        className='back'
                        type='button'
                        onClick={handleBack}
                        aria-label='Go back'
                    >
                        <Arrow />
                    </motion.button>
                    <div className='item'>
                        <div className='left-box'>
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    delay: 0.6
                                }}
                                className='header'
                            >
                                INFO
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    delay: 0.7
                                }}
                                className='describe'
                            >
                                {project?.description}
                            </motion.p>
                            {project?.url && (
                                <motion.a
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        delay: 0.8
                                    }}
                                    href={project?.url}
                                    target='_blank'
                                >
                                    <span>
                                        {project.name === 'QUBY'
                                            ? 'See Application'
                                            : project.name === 'BRAINFROG'
                                                ? 'See MVP version'
                                                : 'Visit Website'}
                                    </span>{' '}
                                    <Arrow />
                                </motion.a>
                            )}

                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    delay: 0.8
                                }}
                                className='label'
                            >
                                Project
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    delay: 0.8
                                }}
                                className='info'
                            >
                                {project?.details.info}
                            </motion.p>
                            <ul className='info-img-list'>
                                {project?.details.img.map((url, index) => (
                                    <motion.li
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            delay: 0.8 + index / 10
                                        }}
                                        key={url}
                                    >
                                        {createElement(url)}
                                    </motion.li>
                                ))}
                            </ul>
                            {!matches && (
                                <>
                                    <p className='label'>Pictures</p>
                                    <ul className='img-list pic'>
                                        {project?.pictures.map((url, index) => (
                                            <motion.li
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{
                                                    delay: 0.8 + index / 10
                                                }}
                                                key={url}
                                                onClick={() => setSelectedImage(url)}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                <img src={url} alt='Picture' />
                                            </motion.li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>
                        <div className='right-box'>
                            <p className='header'>
                                <motion.span
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        delay: 0.8
                                    }}
                                >
                                    {project?.name}
                                </motion.span>
                                <motion.small
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        delay: 0.8
                                    }}
                                >
                                    {project?.type}
                                </motion.small>
                            </p>
                            <div className='main-content'>
                                <div className='img-container'>
                                    {selectedImage ? (
                                        <motion.img
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{
                                                delay: 0.8
                                            }}
                                            className='show-img'
                                            src={selectedImage}
                                            alt='Selected'
                                        />
                                    ) : (
                                        <div className='show-img-placeholder'>Select an image</div>
                                    )}
                                </div>
                                {matches && (
                                    <div className='choose-img'>
                                        <p className='label'>Pictures</p>
                                        <ul className='img-list'>
                                            {project?.pictures.map((url, index) => (
                                                <motion.li
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{
                                                        delay: 0.8 + index / 10
                                                    }}
                                                    key={url}
                                                    onClick={() => setSelectedImage(url)}
                                                >
                                                    <img src={url} alt='Picture' />
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <p className='footer'>Danial Sharifi’s Portfolio 2025</p>
        </ProjectContainer>
    );
};

export default Project;

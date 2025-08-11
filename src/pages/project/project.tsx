/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState } from 'react';
import { ProjectContainer } from './project.style';
import { useNavigate, useParams } from 'react-router-dom';
import { ProjectItem } from '../data';
import { Arrow } from '@/assets/icons';
import { useMediaQuery } from '@mui/material';

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
        if ((window.history.state as any)?.idx > 0) {
            navigate(-1);
        } else {
            navigate('/');
        }
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
            <header>Danial Sharifi</header>
            <div className='border-line'>
                <div className='project-info'>
                    <button className='back' type='button' onClick={handleBack} aria-label='Go back'>
                        <Arrow />
                    </button>
                    <div className='item'>
                        <div className='left-box'>
                            <p className='header'>INFO</p>
                            <p className='describe'>{project?.description}</p>
                            {project?.url && (
                                <a href={project?.url} target='_blank'>
                                    <span>Visit Website</span> <Arrow />
                                </a>
                            )}

                            <p className='label'>Project</p>
                            <p className='info'>{project?.details.info}</p>
                            <ul className='info-img-list'>
                                {project?.details.img.map(url => (
                                    <li key={url}>
                                        <img src={url} />
                                    </li>
                                ))}
                            </ul>
                            {!matches && (
                                <>
                                    <p className='label'>Pictures</p>
                                    <ul className='img-list pic'>
                                        {project?.pictures.map(url => (
                                            <li key={url} onClick={() => setSelectedImage(url)} style={{ cursor: 'pointer' }}>
                                                <img src={url} alt='Picture' />
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>
                        <div className='right-box'>
                            <p className='header'>
                                <span>{project?.name}</span>
                                <small>{project?.type}</small>
                            </p>
                            <div className='main-content'>
                                <div className='img-container'>
                                    {selectedImage ? (
                                        <img className='show-img' src={selectedImage} alt='Selected' />
                                    ) : (
                                        <div className='show-img-placeholder'>Select an image</div>
                                    )}
                                </div>
                                {matches && (
                                    <div className='choose-img'>
                                        <p className='label'>Pictures</p>
                                        <ul className='img-list'>
                                            {project?.pictures.map(url => (
                                                <li key={url} onClick={() => setSelectedImage(url)}>
                                                    <img src={url} alt='Picture' />
                                                </li>
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

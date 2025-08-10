import { FC, useState } from 'react';
import { ProjectContainer } from './project.style';
import { Link, useParams } from 'react-router-dom';
import { ProjectItem } from '../data';
import { Arrow } from '@/assets/icons';

interface ProjectProps {
    data: ProjectItem[];
}

const Project: FC<ProjectProps> = ({ data }) => {
    const { name } = useParams<{ name: ProjectItem['name'] }>();
    const project = data.find(item => item.name === name);
    const [selectedImage, setSelectedImage] = useState<string | null>(project?.pictures?.[0] || null);

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
                    <button>
                        <Arrow />
                    </button>
                    <div className='item'>
                        <div className='left-box'>
                            <p className='header'>INFO</p>
                            <p className='describe'>{project?.description}</p>
                            <Link to={project?.url}>
                                <span>Visit Website</span> <Arrow />
                            </Link>
                            <p className='label'>Project</p>
                            <p className='info'>{project?.details.info}</p>
                            <ul className='info-img-list'>
                                {project?.details.img.map(url => (
                                    <li key={url}>
                                        <img src={url} />
                                    </li>
                                ))}
                            </ul>
                            <p className='label'>Pictures</p>
                            <ul className='img-list'>
                                {project?.pictures.map(url => (
                                    <li key={url} onClick={() => setSelectedImage(url)} style={{ cursor: 'pointer' }}>
                                        <img src={url} alt='Picture' />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='right-box'>
                            <p className='header'>
                                <span>{project?.name}</span>
                                <small>{project?.type}</small>
                            </p>
                            <div className='img-container'>
                                {selectedImage ? (
                                    <img className='show-img' src={selectedImage} alt='Selected' />
                                ) : (
                                    <div className='show-img-placeholder'>Select an image</div>
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

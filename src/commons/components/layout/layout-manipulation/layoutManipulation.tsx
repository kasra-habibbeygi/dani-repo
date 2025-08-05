import { FC, ReactNode } from 'react';

// Components
import Navbar from '../navbar';

// Types
interface IMainLayout {
    children: ReactNode;
}

const MainLayout: FC<IMainLayout> = ({ children }) => {
    return (
        <main>
            <Navbar />
            {children}
        </main>
    );
};

export default MainLayout;

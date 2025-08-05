import { useState } from 'react';

// Assets
import { MobileLayer, MobileMenuContainer, NavbarContainer } from './navbar.style';
import { Menu } from '@/assets/icons';

const Navbar = () => {
    const [mobileMenuStatus, setMobileMenuStatus] = useState(false);

    return (
        <>
            <NavbarContainer>
                <ul>
                    <li>
                        <a href='#welcome'>about us</a>
                    </li>
                    <li>
                        <a href='#why-us'>why join us</a>
                    </li>
                    <li>
                        <a href='#join-us'>who can join us</a>
                    </li>
                    <li>
                        <a href='#what-next'>whats's next</a>
                    </li>
                </ul>
                <Menu className='menu-icon' onClick={() => setMobileMenuStatus(!mobileMenuStatus)} />
            </NavbarContainer>
            <MobileLayer status={mobileMenuStatus} onClick={() => setMobileMenuStatus(!mobileMenuStatus)} />
            <MobileMenuContainer status={mobileMenuStatus}>
                <li>
                    <a href='#welcome'>about us</a>
                </li>
                <li>
                    <a href='#why-us'>why join us</a>
                </li>
                <li>
                    <a href='#join-us'>who can join us</a>
                </li>
                <li>
                    <a href='#what-next'>whats's next</a>
                </li>
            </MobileMenuContainer>
        </>
    );
};

export default Navbar;

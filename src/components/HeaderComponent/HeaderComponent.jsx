import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderContainer, Logo, NavMenu, MenuItem, MenuButton, Drawer, DrawerMenu, CloseButton, Backdrop, Container, } from './style';
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";


const HeaderComponent = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [activePath, setActivePath] = useState('/');

    const navigate = useNavigate();

    const handleClick = (path) => {
        setDrawerOpen(false);
        setActivePath(path);
        navigate(path);
    };

    return (
        <Container>
            <HeaderContainer>
                <Logo onClick={() => handleClick('/')}>Logo</Logo>
                <NavMenu>
                    <MenuItem active={activePath === '/'} onClick={() => handleClick('/')}>Trang chủ</MenuItem>
                    <MenuItem active={activePath === '/favourites'} onClick={() => handleClick('/favourites')}>Yêu thích</MenuItem>
                    <MenuItem active={activePath === '/viewed'} onClick={() => handleClick('/viewed')}>Đã xem</MenuItem>
                </NavMenu>
                <MenuButton onClick={() => setDrawerOpen(true)}><GiHamburgerMenu /></MenuButton>
            </HeaderContainer>

            <Drawer className={drawerOpen ? 'open' : ''}>
                <CloseButton onClick={() => setDrawerOpen(false)}><GrFormClose /></CloseButton>
                <DrawerMenu>
                    <MenuItem onClick={() => handleClick('/')}>Trang chủ</MenuItem>
                    <MenuItem onClick={() => handleClick('/favourites')}>Yêu thích</MenuItem>
                    <MenuItem onClick={() => handleClick('/viewed')}>Đã xem</MenuItem>
                </DrawerMenu>
            </Drawer>

            {drawerOpen && <Backdrop onClick={() => setDrawerOpen(false)} />}
        </Container>
    );
};

export default HeaderComponent;

import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #fff;
  overflow-x: hidden;
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 0 16px;
  height: 64px;
  width: 100%;
  max-width: 1270px;
  margin: 0 auto;
  
  
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Logo = styled.div`
  color: #bd1220ff;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
`

export const NavMenu = styled.nav`
  display: flex;
  gap: 24px;
  font-weight: bold;

  @media (max-width: 768px) {
    display: none;
  }
`

export const MenuItem = styled.span`
  cursor: pointer;
  transition: color 0.3s;
  color: ${({ active }) => (active ? '#BD1220FF' : '#000')};

  &:hover {
    color: #bd1220ff;
  }
`

export const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`

export const Drawer = styled.div`
  position: fixed;
  top: 0;
  right: -100%;
  width: 250px;
  height: 100vh;
  background-color: white;
  box-shadow: -2px 0 6px rgba(0, 0, 0, 0.2);
  transition: right 0.3s ease-in-out;
  z-index: 100;
  padding: 20px;

  &.open {
    right: 0;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: #bd1220ff;
  }
`


export const DrawerMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-weight: bold;
  margin-top: 40px;
`

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 50;
`

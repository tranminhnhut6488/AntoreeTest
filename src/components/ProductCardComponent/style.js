import styled from 'styled-components'

export const ProductCardWrapper = styled.div`
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
  z-index: 0;

  &:hover {
    transform: scale(1.2);
    transform-origin: center;
    z-index: 10;
  }

  &:hover .overlay {
    opacity: 1;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
  gap: 10px;

  button {
      height: 30px;
      width: 120px;
      border: 1px solid #BD1220FF;
      border-radius: 10px;
      border-left: none;
      background: #BD1220FF;
      display: flex; 
      align-items: center;
      justify-content: center;
      gap: 8px;
      color: #fff;
      font-weight: bold;
      font-size: 12px;
      overflow: hidden;
      background: linear-gradient(to left, #BD1220FF 50%, #fff 50%);
      background-size: 200% 100%;
      background-position: right;
      transition: background-position 0.5s ease;

      &:hover {
        background-position: left;
        color: #BD1220FF;
    }
  }
`

export const StyledCard = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: box-shadow 0.3s ease;
`
export const StyledImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
`
export const StyledTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-top: 8px;
  color: #333;
`
export const StyledPrice = styled.div`
  color: #bd1220;
  font-size: 14px;
  font-weight: 600;
`


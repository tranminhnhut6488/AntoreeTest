import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 24px;
`

export const FlexRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-width: 400px;
    max-height: 400px;
    border-radius: 12px;
    object-fit: contain;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  }
`

export const InfoWrapper = styled.div`
  flex: 1;
  padding: 16px 24px;

  .actions {
    margin-top: 24px;
  }
`

export const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 12px;
`

export const Paragraph = styled.p`
  margin-top: 16px;
  font-size: 16px;
  color: #555;
  line-height: 1.5;
`

export const Price = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #fa541c;
  margin: 12px 0;
`

export const Button = styled.button`
  height: 50px;
  width: 150px;
  border: 1px solid #bd1220;
  border-radius: 10px;
  background: white;
  color: #bd1220;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;

  background: linear-gradient(to left, white 50%, #bd1220 50%);
  background-size: 200% 100%;
  background-position: right;
  transition: background-position 0.5s ease;

  &:hover {
    background-position: left;
    color: white;
  }
`

export const StarWrapper = styled.div`
  color: #fadb14;
  font-size: 18px;
  margin-bottom: 12px;
`

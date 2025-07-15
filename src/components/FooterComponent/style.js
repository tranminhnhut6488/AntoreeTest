import styled from 'styled-components';

export const Footer = styled.footer`
  background-color: #360206FF;
  color: white;
  width: 100%;
  padding: 40px 20px;
  margin-top: 100px;
  box-sizing: border-box;
`

export const Container = styled.div`
  max-width: 1270px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Column = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;

  @media (min-width: 600px) {
    width: 50%;
  }

  @media (min-width: 900px) {
    width: 33.3333%;
  }
`

export const FooterBottom = styled.div`
  text-align: center;
  margin-top: 24px;
  color: rgba(255, 255, 255, 0.5);
  width: 100%;
`
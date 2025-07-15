import styled from "styled-components";

export const PriceFilterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;  
  gap: 12px;
  margin-bottom: 24px;
`

export const PriceCheckbox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  input {
    margin-right: 8px;
  }
`
export const WrapperProductGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 16px;
    margin-top: 20px;
`
export const WrapperProductItem = styled.div`
    display: flex;
    justify-content: center;
`
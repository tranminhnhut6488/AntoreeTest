import styled from "styled-components";

export const WrapperButton = styled.div`
    display: flex;
    gap: 10px;
    
    button {
        height: 50px;
        width: 150px;
        border: 1px solid #BD1220FF;
        border-radius: 10px;
        background: #fff;
        color: #BD1220FF;
        font-weight: bold;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-top: 50px;
        overflow: hidden;
        background: linear-gradient(to left, white 50%, #BD1220FF 50%);
        background-size: 200% 100%;
        background-position: right;
        transition: background-position 0.5s ease;
        
        &:hover {
            background-position: left;
            color: #fff;
        }
    }        

    @media (max-width: 768px) {
      margin: 26px 0px 50px 20px;      
    }
`
export const WrapperProductGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 16px;
    margin-top: 20px;
`
export const WrapperProductItem = styled.div`
    display: flex;
    justify-content: center;
`





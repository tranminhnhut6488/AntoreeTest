import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`

export const SearchBox = styled.div`
  flex: 1;
  max-width: 400px;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 5px 8px;
  border: 1px solid #BD1220FF;
  border-radius: 0;
  background: #fff;
  position: relative;
  box-sizing: border-box;

  input {
    height: 50px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 10px 16px;
    font-size: 16px;
    border: none;   
    outline: none;
    transition: border 0.3s;       
  }
`

export const SearchPrice = styled.div`
    width: 100px;
    height: 50px;
    position: relative;
    box-sizing: border-box;
    
    button {
      height: 100%;
      width: 100%;
      border: 1px solid #BD1220FF;
      border-radius: 0;
      background: #fff;
      display: flex; 
      align-items: center;
      justify-content: center;
      gap: 20px;
      color: #BD1220FF;
      font-weight: bold;
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
      width: 100%;
    }
`

export const SearchButton = styled.div`
    width: 150px;
    height: 50px;
    margin-left: 200px;

    button {
      height: 100%;
      width: 100%;
      border: 1px solid #BD1220FF;
      border-radius: 30px;
      background: #fff;
      color: #BD1220FF;
      font-weight: bold;
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
      width: 100%;
      margin: 50px 0 0 0;
    }
`

export const SearchDropdown = styled.ul`
  position: absolute;
  background: white;
  border: 1px solid #ccc;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  margin-top: 8px;
  list-style: none;
  padding: 0;
  z-index: 10;
  top: 100%;
  width: 100%;
  left: 0;
  margin: 0; 

  li {
    padding: 10px;
    display: flex;
    gap: 10px;
    cursor: pointer;

    img {
      height: 50px;
      width: 50px;
      object-fit: cover;
      border-radius: 6px;
    }

    &:hover {
      background: #f5f5f5;
    }
  }

  a {
    text-decoration: none;
    color: #000;
    display: flex;
    align-items: center;
    gap: 10px;
  }
`

export const PricePopover = styled.div`
  position: absolute;
  top: 60px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  width: 250px;
  z-index: 10;
  top: 100%;
`

export const PriceCheckbox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  input {
    margin-right: 8px;
  }
`

export const ApplyButton = styled.button`
  margin-top: 10px;
  float: right;
  padding: 4px 12px;
  background-color: #BD1220FF;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #a1101b;
  }
`
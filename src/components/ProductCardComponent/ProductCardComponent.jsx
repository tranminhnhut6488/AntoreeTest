import React from 'react';
import { Overlay, ProductCardWrapper, StyledCard, StyledImage, StyledPrice, StyledTitle } from './style';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavouriteProduct } from '../../redux/slides/favouriteProductSlice';
import { convertPrice } from '../../utils';
import { RiHeartFill } from 'react-icons/ri';

const ProductCard = ({ product, setToast }) => {
  const favouriteProducts = useSelector((state) => state.favouriteProduct)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClickProductDetail = () => {
    navigate(`/products/${product.id}`)
  }
  const handleClickFavourite = () => {
    setToast({ type: 'success', message: 'Đã thích' });
    dispatch(toggleFavouriteProduct({ idProduct: product.id }))
  }
  const handleClickUnfavourite = () => {
    setToast({ type: 'success', message: 'Đã bỏ thích' });
    dispatch(toggleFavouriteProduct({ idProduct: product.id }))
  }
  return (
    <ProductCardWrapper>
      <StyledCard>
        <StyledImage
          src={`${process.env.REACT_APP_API_URL}/${product.image}`}
          alt={product.name}
        />
        <StyledTitle>{product.name}</StyledTitle>
        <StyledPrice>{convertPrice(product.price)}</StyledPrice>
        <Overlay className="overlay">
          <button onClick={handleClickProductDetail}>Xem chi tiết</button>
          {favouriteProducts.idProduct.includes(product.id) ?
            <button onClick={handleClickUnfavourite}><RiHeartFill />Bỏ yêu thích</button> :
            <button onClick={handleClickFavourite}><RiHeartFill />Yêu thích</button>
          }
        </Overlay>
      </StyledCard>
    </ProductCardWrapper>
  );
};

export default ProductCard;

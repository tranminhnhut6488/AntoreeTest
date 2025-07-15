import React, { useEffect } from 'react';
import ProductCard from '../../components/ProductCardComponent/ProductCardComponent';
import { useDispatch, useSelector } from 'react-redux';
import { resetFavouriteProduct } from '../../redux/slides/favouriteProductSlice';
import { getAllProduct } from '../../services/ProductService';
import { useQuery } from '@tanstack/react-query';
import { Wrapper, WrapperProductGrid, WrapperProductItem } from './style';
import Loading from '../../components/LoadingComponent/LoadingComponent';
import EmptyComponent from '../../components/EmptyComponent/EmptyComponent';

const FavoritePage = () => {
  const favouriteProducts = useSelector((state) => state.favouriteProduct)
  const dispatch = useDispatch()

  const fetchProductAll = async () => {
    const res = await getAllProduct()
    return res
  }

  const { isLoading, data: products } = useQuery({ queryKey: ['product'], queryFn: fetchProductAll, retry: 3 })

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const favourites = products?.filter((product) => favouriteProducts.idProduct.includes(product.id));

  const handleClickReset = () => {
    dispatch(resetFavouriteProduct())
  }

  return (
    <Loading isLoading={isLoading}>
      <div style={{ padding: '0px 24px', maxWidth: '1270px', margin: '0 auto' }}>
        <h2>Danh sách yêu thích</h2>
        {favourites && favourites.length === 0 ? (
          <EmptyComponent description="Chưa có khóa học yêu thích" />
        ) : (
          <>
            <Wrapper onClick={handleClickReset}>Xóa hết</Wrapper>
            <WrapperProductGrid>
              {favourites && favourites.map(product => (
                <WrapperProductItem key={favourites.id}>
                  <ProductCard product={product} />
                </WrapperProductItem>
              ))}
            </WrapperProductGrid>
          </>
        )}
      </div>
    </Loading>
  );
};

export default FavoritePage;
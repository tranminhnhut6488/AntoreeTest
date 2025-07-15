import React, { useEffect } from 'react';
import ProductCard from '../../components/ProductCardComponent/ProductCardComponent';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../../services/ProductService';
import { useQuery } from '@tanstack/react-query';
import { clearViewed } from '../../redux/slides/viewedRecentSlice';
import { Wrapper, WrapperProductGrid, WrapperProductItem } from './style';
import Loading from '../../components/LoadingComponent/LoadingComponent';
import EmptyComponent from '../../components/EmptyComponent/EmptyComponent';

const ViewdedRecentPage = () => {
  const viewedRecent = useSelector(state => state.viewedRecent);
  const dispatch = useDispatch();

  const fetchProductAll = async () => {
    const res = await getAllProduct()
    return res
  }

  const { isLoading, data: products } = useQuery({ queryKey: ['product'], queryFn: fetchProductAll, retry: 3 })

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const viewed = products?.filter((product) => viewedRecent.idProduct.includes(product.id));

  const handleClickClear = () => {
    dispatch(clearViewed())
  }

  return (
    <Loading isLoading={isLoading}>
      <div style={{ padding: '0px 24px', maxWidth: '1270px', margin: '0 auto' }}>
        <h2>Khóa học đã xem</h2>
        {viewed && viewed.length === 0 ? (
          <EmptyComponent description="Chưa có khóa học nào được xem" />
        ) : (
          <>
            <Wrapper onClick={handleClickClear}>Xóa hết</Wrapper>
            <WrapperProductGrid>
              {viewed && viewed.map(product => (
                <WrapperProductItem key={product.id}>
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

export default ViewdedRecentPage;

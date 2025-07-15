import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getProduct } from '../../services/ProductService';
import { useDispatch } from 'react-redux';
import { addViewed } from '../../redux/slides/viewedRecentSlice';
import { convertPrice } from '../../utils';
import Loading from '../../components/LoadingComponent/LoadingComponent';
import { Container, ImageWrapper, InfoWrapper, Title, Paragraph, FlexRow, Price, Button, StarWrapper } from './style';

const ProductDetailPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const fetchGetProductDetail = async (context) => {
        const id = context?.queryKey?.[1];
        const res = await getProduct(id);
        return res;
    };

    const { isLoading, data: product } = useQuery({
        queryKey: ['product-detail', id],
        queryFn: fetchGetProductDetail,
        retry: 3,
        enabled: !!id,
    });

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    useEffect(() => {
        if (product) {
            dispatch(addViewed({ idProduct: product.id }));
        }
    }, [product, dispatch]);

    return (
        <Loading isLoading={isLoading}>
            {product && (
                <Container>
                    <FlexRow>
                        <ImageWrapper>
                            <img
                                src={`${process.env.REACT_APP_API_URL}/${product.image}`}
                                alt={product.name}
                            />
                        </ImageWrapper>

                        <InfoWrapper>
                            <Title>{product.name}</Title>

                            <StarWrapper>
                                {[...Array(5)].map((_, i) => (
                                    <span key={i}>★</span>
                                ))}
                            </StarWrapper>

                            <Price>{convertPrice(product.price)}</Price>

                            <Paragraph>
                                {product.description || 'Không có mô tả cho khóa học này.'}
                            </Paragraph>

                            <div className="actions">
                                <Button>Gọi tư vấn</Button>
                            </div>
                        </InfoWrapper>
                    </FlexRow>
                </Container>
            )}
        </Loading>
    );
};

export default ProductDetailPage;

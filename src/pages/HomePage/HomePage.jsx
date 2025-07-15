import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCardComponent/ProductCardComponent';
import { useMutation, useQuery } from '@tanstack/react-query'
import { getAllProduct, getSuggestedProducts } from '../../services/ProductService';
import Loading from '../../components/LoadingComponent/LoadingComponent';
import SearchComponent from '../../components/SearchComponent/SearchComponent';
import { WrapperButton, WrapperProductGrid, WrapperProductItem } from './style';
import { BsLightbulbFill } from 'react-icons/bs';
import { FaUndo } from 'react-icons/fa';
import SliderComponent from '../../components/SlideComponent/SlideComponent';
import ToastComponent from '../../components/ToastComponent/ToastComponent';
import VissionAndMissionComponent from '../../components/VissionAndMissionComponent/VissionAndMissionComponent';
import LearningMethod from '../../components/LearningMethod/LearningMethod';
import FadeInSection from '../../components/FadeInSection/FadeInSection';


const HomePage = () => {
    const [filterPrice, setFilterPrice] = useState([]);
    const [price, setPrice] = useState([]);
    const [isLoadingSuggested, setIsLoadingSuggested] = useState(false);
    const [suggestedProducts, setSuggestedProducts] = useState(null);
    const [toast, setToast] = useState(null);
    const arrImages = ['theme1.webp', 'theme2.jpg', 'theme3.png'];

    const mutationSuggestProduct = useMutation({
        mutationFn: async ({ userId }) => {
            const res = await getSuggestedProducts(userId);
            return res;
        },
        onSuccess: (data) => {
            if (data?.length > 0) {
                setIsLoadingSuggested(true);
                setTimeout(() => {
                    setSuggestedProducts(data);
                    setIsLoadingSuggested(false);
                    setToast({ type: 'success', message: 'Lấy thành công' });
                }, 2000);
            } else {
                setToast({ type: 'error', message: 'Không lấy được' });
            }
        },
        onError: () => {
            setToast({ type: 'error', message: 'Thất bại' });
        },
    });

    const fetchProductAll = async () => {
        const res = await getAllProduct()
        return res
    }

    const { isLoading, data: products } = useQuery({ queryKey: ['product'], queryFn: fetchProductAll, retry: 3, retryDelay: 1000, keepPreviousData: true })

    useEffect(() => {
        setPrice(filterPrice);
    }, [filterPrice]);

    const handleFilterPrice = (value) => {
        setFilterPrice(value)
    }

    const handleSuggestProduct = async () => {
        const userId = 1;
        mutationSuggestProduct.mutate({ userId: userId })
    }

    const suggestedProductIds = suggestedProducts && suggestedProducts.map(item => item.idProduct);
    const suggest = suggestedProductIds && products && products.filter(product => suggestedProductIds.includes(product.id));

    const productList = suggest || (products && products.filter((product) => {
        if (!price || price.length === 0) return true;

        return price.some((range) => {
            if (range === '10000000+') return product.price > 10000000;
            const [min, max] = range.split('-').map(Number);
            return product.price >= min && product.price <= max;
        });
    }));

    const handleSetToast = (value) => {
        setToast(value);
    }
    return (
        <>
            {toast && <ToastComponent type={toast.type} message={toast.message} onClose={() => setToast(null)} />}
            <Loading isLoading={isLoading || isLoadingSuggested}>
                <SliderComponent arrImages={arrImages} />
                <div style={{ padding: '0px 24px', maxWidth: '1270px', margin: '0 auto' }}>
                    <FadeInSection>
                        <SearchComponent products={products} priceProduct={handleFilterPrice} />
                    </FadeInSection>
                    <FadeInSection>
                        <VissionAndMissionComponent />
                    </FadeInSection>
                    <FadeInSection>
                        <LearningMethod />
                    </FadeInSection>
                    <FadeInSection>
                        <WrapperButton>
                            <button onClick={handleSuggestProduct}><BsLightbulbFill />Gợi ý khóa học</button>
                            {suggestedProducts && <button onClick={() => { setSuggestedProducts(null) }}><FaUndo />Quay về</button>}
                        </WrapperButton>
                    </FadeInSection>
                    <FadeInSection>
                        <h2 style={{ textAlign: 'center' }}>
                            {suggestedProducts ? 'Gợi ý dành cho bạn' : 'Khóa học nổi bật'}
                        </h2>
                    </FadeInSection>
                    <FadeInSection>
                        <WrapperProductGrid>
                            {productList && productList.map((product) => (
                                <WrapperProductItem key={product.id}>
                                    <ProductCard product={product} setToast={handleSetToast} />
                                </WrapperProductItem>
                            ))}
                        </WrapperProductGrid>
                    </FadeInSection>
                </div>
            </Loading>
        </>

    );
};

export default HomePage;

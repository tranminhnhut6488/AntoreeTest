import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getAllProduct } from '../../services/ProductService';
import ProductCard from '../../components/ProductCardComponent/ProductCardComponent';
import { PriceCheckbox, PriceFilterWrapper, WrapperProductGrid, WrapperProductItem } from './style';
import Loading from '../../components/LoadingComponent/LoadingComponent';
import EmptyComponent from '../../components/EmptyComponent/EmptyComponent';

const SearchProductPage = () => {
    const location = useLocation()
    const [queryParams, setQueryParams] = useState({ name: '' });
    const [selectedPrices, setSelectedPrices] = useState([]);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const queryObject = {};

        params.forEach((value, key) => {
            queryObject[key] = decodeURIComponent(value);
        });

        setQueryParams(queryObject);
    }, [location]);

    const name = queryParams?.name || '';

    const fetchProductAll = async () => {
        const res = await getAllProduct()
        return res
    }

    const { isLoading, data: products } = useQuery({ queryKey: ['product'], queryFn: fetchProductAll, retry: 3, retryDelay: 1000, keepPreviousData: true })
    const searchProduct = products && products.filter(product => product.name?.toLowerCase().includes(name.toLowerCase()))

    const handlePriceChange = (value) => {
        setSelectedPrices(prev =>
            prev.includes(value)
                ? prev.filter(item => item !== value)
                : [...prev, value]
        );
    };

    const priceOptions = [
        { label: 'Dưới 1.000.000₫', value: '0-1000000' },
        { label: '1.000.000₫ - 10.000.000₫', value: '1000000-10000000' },
        { label: 'Trên 10.000.000₫', value: '10000000+' }
    ];

    return (
        <Loading isLoading={isLoading}>
            <div style={{ padding: '24px', maxWidth: '1270px', margin: '0 auto' }}>
                <div style={{ width: '100%', padding: '35px 0 17.5px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '20px', fontWeight: '700', display: 'flex', alignItems: 'center' }}>Khóa học đã tìm kiếm</div>
                    <span style={{ fontSize: '14px', opacity: 0.5 }}>
                        Kết quả tìm kiếm cho "<span style={{ fontWeight: '700' }}>{name}</span>"
                    </span>
                </div>
                <PriceFilterWrapper>
                    Giá:
                    {priceOptions.map(opt => (
                        <PriceCheckbox key={opt.value}>
                            <input
                                type="checkbox"
                                id={opt.value}
                                checked={selectedPrices.includes(opt.value)}
                                onChange={() => handlePriceChange(opt.value)}
                            />
                            <label htmlFor={opt.value}>{opt.label}</label>
                        </PriceCheckbox>
                    ))}
                </PriceFilterWrapper>
                <WrapperProductGrid>
                    {searchProduct && searchProduct.filter((product) => {
                        if (!selectedPrices || selectedPrices.length === 0) return true;

                        return selectedPrices.some((range) => {
                            if (range === '10000000+') return product.price > 10000000;

                            const [min, max] = range.split('-').map(Number);
                            return product.price >= min && product.price <= max;
                        });
                    }).map((product) => (
                        <WrapperProductItem key={product.id}>
                            <ProductCard product={product} />
                        </WrapperProductItem>
                    ))}
                </WrapperProductGrid>
                {products && products.filter(product => product.name?.toLowerCase().includes(name.toLowerCase())).length === 0 && (
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
                        <EmptyComponent description="Không tìm khóa học" />
                    </div>
                )}
            </div>
        </Loading>
    );
};

export default SearchProductPage;
import React, { useState, useRef } from 'react';
import { SearchBox, SearchButton, SearchPrice, SearchWrapper, SearchDropdown, PricePopover, PriceCheckbox, ApplyButton } from './style';
import { useDebounce } from '../../hooks/useDebounce';
import { convertPrice } from '../../utils';
import { Link, useNavigate } from 'react-router-dom';
import { FiChevronDown, FiSearch } from 'react-icons/fi';

const SearchComponent = (props) => {
    const { products, priceProduct } = props
    const [selectedPrices, setSelectedPrices] = useState([]);
    const [showPopover, setShowPopover] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [search, setSearch] = useState('');
    const searchDebounce = useDebounce(search, 500);
    const navigate = useNavigate();
    const inputRef = useRef(null);

    const filtered = products?.filter(product =>
        product.name?.toLowerCase().includes(searchDebounce.toLowerCase())
    );
    const searchProduct = filtered?.length > 0 ? filtered : [];

    const handleChangeSearch = (e) => {
        setSearch(e.target.value);
        setDropdownOpen(true);
    };

    const handleClickSearchButton = () => {
        const path = `search?name=${encodeURIComponent(searchDebounce)
            .split('\\')[0]
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/ /g, '-')
            .replace(/\//g, '-')
            .toLowerCase()}`;
        navigate(`/${path}`);
    };

    const handlePriceChange = (value) => {
        setSelectedPrices(prev =>
            prev.includes(value)
                ? prev.filter(item => item !== value)
                : [...prev, value]
        );
    };

    const handleApplyPrice = () => {
        priceProduct(selectedPrices);
        setShowPopover(false);
    };

    const priceOptions = [
        { label: 'Dưới 1.000.000₫', value: '0-1000000' },
        { label: '1.000.000₫ - 10.000.000₫', value: '1000000-10000000' },
        { label: 'Trên 10.000.000₫', value: '10000000+' }
    ];

    return (
        <div style={{ maxWidth: '1270px' }}>
            <SearchWrapper>
                <SearchBox>
                    <FiSearch style={{ marginRight: 8, color: '#999' }} />
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Tìm kiếm khóa học..."
                        onChange={handleChangeSearch}
                        onFocus={() => setDropdownOpen(true)}
                        onBlur={() => setTimeout(() => setDropdownOpen(false), 200)}
                        value={search}
                    />
                    {dropdownOpen && searchProduct?.length > 0 && (
                        <SearchDropdown>
                            {searchProduct.map((item) => (
                                <li key={item.id}>
                                    <Link to={`/products/${item.id}`}>
                                        <img
                                            src={`${process.env.REACT_APP_API_URL}/${item.image}`}
                                            alt={item.name}
                                        />
                                        <div>
                                            <strong>{item.name}</strong>
                                            <div style={{ fontSize: '12px', color: '#888' }}>
                                                Giá: <span style={{ color: '#ff424e' }}>{convertPrice(item.price)}</span>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </SearchDropdown>
                    )}
                </SearchBox>

                <SearchPrice>
                    <button onClick={() => setShowPopover(!showPopover)}>
                        Giá <FiChevronDown />
                    </button>
                    {showPopover && (
                        <PricePopover>
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
                            <ApplyButton onClick={handleApplyPrice}>Áp dụng</ApplyButton>
                        </PricePopover>
                    )}
                </SearchPrice>

                <SearchButton>
                    <button onClick={handleClickSearchButton}>Tìm kiếm</button>
                </SearchButton>
            </SearchWrapper>
        </div>
    );
};

export default SearchComponent;

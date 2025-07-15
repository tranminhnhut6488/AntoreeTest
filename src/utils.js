export const convertPrice = (price) => {
    try {
        if (typeof price !== 'string') return null;
        if (price.includes('-')) {
            const [min, max] = price.split('-').map(p => Number(p.trim()));
            if (isNaN(min) || isNaN(max)) return null;
            const minFormatted = min.toLocaleString('vi-VN').replaceAll(',', '.');
            const maxFormatted = max.toLocaleString('vi-VN').replaceAll(',', '.');
            return `${minFormatted} - ${maxFormatted} VNĐ`;
        }
        const number = Number(price);
        if (isNaN(number)) return null;
        const result = number.toLocaleString('vi-VN').replaceAll(',', '.');
        return `${result} VNĐ`;
    } catch (error) {
        return null;
    }
};

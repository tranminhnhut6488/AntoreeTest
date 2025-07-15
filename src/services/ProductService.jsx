import axios from "axios"

export const getAllProduct = async () => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/products`)
        return res.data
    } catch (error) {
        console.log(error);
    }

}

export const getProduct = async (id) => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/products/${id}`)
        return res.data
    } catch (error) {
        console.log(error);
    }
}

export const getSuggestedProducts = async (userId) => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/suggestions/${userId}`)
        return res.data
    } catch (error) {
        console.log(error);
    }
};

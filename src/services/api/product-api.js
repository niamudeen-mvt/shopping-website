import { api } from '../../utils/axios';

export const newArrivalProductsList = async (limit) => {
    try {
        const response = await api.get(`?limit=${limit}`);
        return response?.data;
    } catch (error) {
        console.log(error, 'error');
    }
};

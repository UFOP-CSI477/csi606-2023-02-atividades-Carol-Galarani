import axios from 'axios'
import BASE_URL from '../constants/urls'

export const getAllCity = async () => {
    try{ 
        const results = await axios.get(`${BASE_URL}/city`)

        return results.data
    } catch(err){
        console.log(err);
    }
}
export const createCity = async (data) => {
    try{ 
        const results = await axios.post(`${BASE_URL}/city`, data)
        return results.data
    } catch(err){
        console.log(err);
    }
}

export const deleteCity = async (_id) => {
    try { 
        const results = await axios.delete(`${BASE_URL}/city/${_id}`);
        console.log(results.data); // Log the response
        return results.data;
    } catch (err) {
        console.error(err);
    }
}
import axios from 'axios'
import BASE_URL from '../constants/urls'

export const getAllLocation = async () => {
    try{ 
        const results = await axios.get(`${BASE_URL}/location`)

        return results.data
    } catch(err){
        console.log(err);
    }
}
export const createLocation = async (data) => {
    try{ 
        const results = await axios.post(`${BASE_URL}/location`, data)
        return results.data
    } catch(err){
        console.log(err);
    }
}

export const deleteLocation = async (_id) => {
    try { 
        const results = await axios.delete(`${BASE_URL}/location/${_id}`);
        console.log(results.data); // Log the response
        return results.data;
    } catch (err) {
        console.error(err);
    }
}

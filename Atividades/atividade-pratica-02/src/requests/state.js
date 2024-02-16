import axios from 'axios'
import BASE_URL from '../constants/urls'

export const getAllState = async () => {
    try{ 
        const results = await axios.get(`${BASE_URL}/state`)
        console.log(results.data);
        return results.data
        
    } catch(err){
        console.log(err);
    }
}
export const createState = async (data) => {
    try{ 
        const results = await axios.post(`${BASE_URL}/state`, data)
        return results.data
    } catch(err){
        console.log(err);
    }
}

export const deleteState = async (_id) => {
    try { 
        const results = await axios.delete(`${BASE_URL}/state/${_id}`);
        console.log(results.data); // Log the response
        return results.data;
    } catch (err) {
        console.error(err);
    }
}

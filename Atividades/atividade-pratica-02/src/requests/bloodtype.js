import axios from 'axios'
import BASE_URL from '../constants/urls'

export const getAllBloodtype = async () => {
    try{ 
        const results = await axios.get(`${BASE_URL}/bloodtype`)

        return results.data
    } catch(err){
        console.log(err);
    }
}

export const createBloodtype = async (data) => {
    try{ 
        const results = await axios.post(`${BASE_URL}/bloodtype`, data)
        return results.data
    } catch(err){
        console.log(err);
    }
}

export const deleteBloodtype = async (_id) => {
    try { 
        const results = await axios.delete(`${BASE_URL}/bloodtype/${_id}`);
        console.log(results.data); // Log the response
        return results.data;
    } catch (err) {
        console.error(err);
    }
}



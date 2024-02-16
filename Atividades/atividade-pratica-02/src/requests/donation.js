import axios from 'axios'
import BASE_URL from '../constants/urls'

export const getAllDonation = async () => {
    try{ 
        const results = await axios.get(`${BASE_URL}/donation`)
        console.log(results.data);
        return results.data
        
    } catch(err){
        console.log(err);
    }
}

export const createDonation = async (data) => {
    try{ 
        const results = await axios.post(`${BASE_URL}/donation`, data)
        return results.data
    } catch(err){
        console.log(err);
    }
}

export const deleteDonation = async (_id) => {
    try { 
        const results = await axios.delete(`${BASE_URL}/donation/${_id}`);
        console.log(results.data); // Log the response
        return results.data;
    } catch (err) {
        console.error(err);
    }
}
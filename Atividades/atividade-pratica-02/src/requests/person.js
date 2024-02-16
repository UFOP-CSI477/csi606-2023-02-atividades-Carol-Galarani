import axios from 'axios'
import BASE_URL from '../constants/urls'

export const getAllPerson = async () => {
    try{ 
        const results = await axios.get(`${BASE_URL}/person`)

        return results.data
    } catch(err){
        console.log(err);
    }
}
export const createPerson = async (data) => {
    try{ 
        const results = await axios.post(`${BASE_URL}/person`, data)
        return results.data
    } catch(err){
        console.log(err);
    }
}

export const deletePerson = async (_id) => {
    try { 
        const results = await axios.delete(`${BASE_URL}/person/${_id}`);
        console.log(results.data); // Log the response
        return results.data;
    } catch (err) {
        console.error(err);
    }
}
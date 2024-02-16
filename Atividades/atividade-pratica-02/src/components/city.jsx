import React, { useState, useEffect } from 'react';
import styles from '../Style/list.module.css'
import { getAllCity, deleteCity} from '../requests/city';

export function City() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllCity();
      setData(result);
      console.log(result);
    };

    fetchData();
  }, []);
  const handleDeleteCity = async (id) => {
    await deleteCity(id);
    const updatedData = data.filter((data) => data._id !== id);
    setData(updatedData);
};

  return (
    <div className={styles.container}>
      <h1>CITY</h1>

        <ul className={styles.item}>
          {data.map(data => (
            <div className={styles.list}>
              <li key={data.id}>ID: {data.id}</li>
              <li key={data.id}>Name: {data.name}</li>
              <li key={data.id}>City ID: {data.state_id}</li>
              <button onClick={()=> {handleDeleteCity(data._id)}}>Deletar</button>

            </div>
          ))}
        </ul>
    </div>
  );
}
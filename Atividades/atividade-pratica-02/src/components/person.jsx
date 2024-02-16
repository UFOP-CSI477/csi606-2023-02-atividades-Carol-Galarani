import { getAllPerson } from '../requests/person';
import React, { useState, useEffect } from 'react';
import styles from '../Style/list.module.css'

export function Person() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllPerson();
      setData(result);
      console.log(result);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Person</h1>
        <ul className={styles.item}>
          {data.map(data => (
            <div className={styles.list}>
              <li key={data.id}>ID: {data.id}</li>
              <li key={data.id}>Name: {data.name}</li>
              <li key={data.id}>Number: {data.number}</li>
              <li key={data.id}>RG: {data.rg}</li>
              <li key={data.id}>City ID: {data.city_id}</li>
              <li key={data.id}>Type ID: {data.type_id}</li>
            </div>
          ))}
        </ul>
    </div>
  );
}

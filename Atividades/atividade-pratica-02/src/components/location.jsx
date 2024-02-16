import { getAllLocation } from '../requests/location';
import React, { useState, useEffect } from 'react';
import styles from '../Style/list.module.css'

export function Location() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllLocation();
      setData(result);
      console.log(result);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h1>LOCATION</h1>
        <ul className={styles.item}>
          {data.map(data => (
            <div className={styles.list}>
              <li key={data.id}>ID: {data.id}</li>
              <li key={data.id}>Type: {data.name}</li>
              <li key={data.id}>Street: {data.street}</li>
              <li key={data.id}>Complement: {data.complement}</li>
              <li key={data.id}>City ID: {data.city_id}</li>
            </div>
          ))}
        </ul>
    </div>
  );
}

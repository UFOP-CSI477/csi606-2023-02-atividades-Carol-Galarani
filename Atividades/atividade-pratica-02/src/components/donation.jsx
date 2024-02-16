import { getAllDonation } from '../requests/donation';
import React, { useState, useEffect } from 'react';
import styles from '../Style/list.module.css'

export function Donation() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllDonation();
      setData(result);
      console.log(result);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h1>DONATIONS</h1>
        <ul className={styles.item}>
          {data.map(data => (
            <div className={styles.list}>
              <li key={data.id}>ID: {data.id}</li>
              <li key={data.id}>Person ID: {data.person_id}</li>
              <li key={data.id}>Local ID: {data.local_id}</li>
            </div>
          ))}
        </ul>
    </div>
  );
}

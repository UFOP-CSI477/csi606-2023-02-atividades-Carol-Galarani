import { getAllState } from '../requests/state';
import React, { useState, useEffect } from 'react';
import styles from '../Style/list.module.css'

export function State() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllState();
      setData(result);
      console.log(result);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h1>State</h1>
        <ul className={styles.item}>
          {data.map(data => (
            <div className={styles.list}>
              <li key={data.id}>ID: {data.id}</li>
              <li key={data.id}>Name: {data.name}</li>
              <li key={data.id}>Abbreviation: {data.abbreviation}</li>
            </div>
          ))}
        </ul>
    </div>
  );
}

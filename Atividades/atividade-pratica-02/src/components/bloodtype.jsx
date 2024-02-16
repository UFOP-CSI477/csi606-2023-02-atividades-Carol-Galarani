import { deleteBloodtype,getAllBloodtype } from '../requests/bloodtype';
import React, { useState, useEffect } from 'react';
import styles from '../Style/list.module.css';
import hstyles from '../Style/home.module.css'
import {Link} from 'react-router-dom'

export function Blood() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllBloodtype();
      setData(result);
      console.log(result);
    };

    fetchData();
  }, []);

  const handleDeleteBloodtype = async (id) => {
    await deleteBloodtype(id);
    const updatedData = data.filter((data) => data._id !== id);
    setData(updatedData);
};
  

  return (
    <>
      
        <div className={styles.container}>
          <h1>BLOODTYPE</h1>
        
          <Link className= {styles.Link} to={'/createblood'}><button className={hstyles.divButton}>Registrar Sangue</button></Link>
          <Link className={styles.Link} to={'/'}><button className={hstyles.divButton}>Voltar</button></Link>

          <ul className={styles.item}>
            {data.map(data => (
              <div className={styles.list}>
                <li key={data.id}>ID: {data.id}</li>
                <li key={data.id}>Type: {data.type}</li>
                <li key={data.id}>Factor: {data.factor}</li>
                <button className={styles.buttonDelet} onClick={()=> {handleDeleteBloodtype(data._id)}}>Deletar</button>
              </div>
            ))}
          </ul>
          
      </div>
    </>
  );
}

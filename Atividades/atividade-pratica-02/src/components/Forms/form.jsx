import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import useForm from "../../hooks/useForm";
import { createBloodtype } from '../../requests/bloodtype';
import styles from '../../Style/forms.module.css'
import { Link } from 'react-router-dom'

export function RegisterBlood() {
  const [form, onChange] = useForm({ type: "", factor: "", id: "" });
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmitBlood = async (event) => {
    event.preventDefault();

    // Gerar um novo UUID
    const newUuid = uuidv4();

    // Remover os não-numéricos do UUID e converter para um número
    const numericId = parseInt(newUuid.replace(/[^0-9]/g, ""), 16) % 1e5;
    // Atribuir o número como ID
    const formDataWithId = { ...form, id: numericId };

    try {
      await createBloodtype(formDataWithId);
      setIsSuccess(true); // Defina o estado de sucesso como verdadeiro
    } catch (error) {
      console.error(error);
    } finally {
      console.log("Após setIsLoading(false)");
    }
  };

  return (
    <div className={styles.formsContainer}>
      <form className={styles.forms} onSubmit={onSubmitBlood}>
        <h4>Cadastro de Tipo Sanguíneo</h4>
        <label className={styles.formLabel}>
          BloodType:
          <input type="text" name="type" value={form.type} onChange={onChange} />
        </label>
        <label className={styles.formLabel}>
          Factor:
          <input type="text" name="factor" value={form.factor} onChange={onChange} />
        </label>
        <button className={styles.formsButton} type="submit">Register Blood</button>
        <Link className={styles.Link} to={'/tiposanguineo/*'}><button className={styles.formsButton}>Voltar</button></Link>

        {isSuccess && <p className={styles.successMessage}>Registro bem-sucedido!</p>}
      </form>
    </div>
  );
}


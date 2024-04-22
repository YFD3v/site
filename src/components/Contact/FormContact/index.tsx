import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import styles from "./style.module.scss";
import { FormEvent, useContext } from "react";
import { FormContext } from "../../../context/FormContext";
import { toast } from "react-toastify";

const FormContact = () => {
  const {
    createContent,
    formData,
    handleChange,
    handleChangeSelect,
    limparInputs,
    sendForm,
  } = useContext(FormContext);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const content = createContent();
      toast.info("Enviando...");
      sendForm(content);
      limparInputs();
      setTimeout(() => {
        toast.success("Enviado com sucesso!");
      }, 2000);
    } catch (error) {
      toast.error("Houve um error");
      console.log(error);
    }
  };

  return (
    <div className={styles.Container}>
      <h2>Vamos trabalhar juntos!</h2>
      <p>
        Entre em contato conosco para começar sua jornada digital no formulário
        abaixo e vamos transformar suas ideias em realidade!
      </p>
      <form onSubmit={handleSubmit} className={styles.Form}>
        <input
          value={formData.name}
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Nome"
          required
        />
        <input
          value={formData.lastName}
          onChange={handleChange}
          type="text"
          name="lastName"
          placeholder="Sobrenome"
          required
        />
        <input
          value={formData.email}
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="E-mail"
          required
        />
        <input
          value={formData.number}
          onChange={handleChange}
          type="tel"
          name="number"
          placeholder="(xx) 9xxxx-xxxx"
          data-mask="[-]+55 (00) 00000-0000"
          required
        />
        <div className={styles.Select}>
          <FormControl fullWidth>
            <InputLabel
              sx={{
                color: "white",
              }}
              id="service"
            >
              Escolha o serviço
            </InputLabel>
            <Select
              labelId="service"
              id="service"
              label="Serviço"
              color="primary"
              name="subject"
              value={formData.subject}
              required
              onChange={handleChangeSelect}
              sx={{
                color: "white",
              }}
            >
              <MenuItem value={"webapp"}>Webapp</MenuItem>
              <MenuItem value={"website"}>Website</MenuItem>
              <MenuItem value={"app"}>App Simples</MenuItem>
            </Select>
          </FormControl>
        </div>
        <textarea
          value={formData.message}
          onChange={handleChange}
          placeholder="Mensagem..."
          name="message"
          id="message"
          required
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormContact;

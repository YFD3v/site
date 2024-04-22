import { SelectChangeEvent } from "@mui/material";
import { ReactNode, createContext, useState } from "react";

export const FormContext = createContext<Context>({
  formData: {
    name: "",
    lastName: "",
    email: "",
    number: "",
    message: "",
    subject: "",
  },
  handleChange: () => {},
  handleChangeSelect: () => {},
  createContent: () => ({
    Nome: "",
    Sobrenome: "",
    Email: "",
    Telefone: "",
    Mensagem: "",
    Assunto: "",
    _autoresponse: "",
    _subject: "",
  }),
  sendForm: () => {},
  limparInputs: () => {},
});

interface FormContextProviderProps {
  children: ReactNode;
}

interface Form {
  [key: string]: string;
  name: string;
  lastName: string;
  email: string;
  number: string;
  message: string;
  subject: string;
}

interface Context {
  formData: Form;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleChangeSelect: (e: SelectChangeEvent<string>) => void;
  createContent: () => Content;
  sendForm: (content: Content) => void;
  limparInputs: () => void;
}

interface Content {
  Nome: string;
  Sobrenome: string;
  Email: string;
  Telefone: string;
  Mensagem: string;
  Assunto: string;
  _autoresponse: string;
  _subject: string;
}

export function FormContextProvider({ children }: FormContextProviderProps) {
  const [formData, setFormData] = useState<Form>({
    name: "",
    lastName: "",
    email: "",
    number: "",
    message: "",
    subject: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = {
        ...prevData,
        [name]: value,
      };
      return updatedData;
    });
  };

  const handleChangeSelect = (e: SelectChangeEvent<string>) => {
    setFormData((prevData) => ({ ...prevData, subject: e.target.value }));
  };

  const limparInputs = () => {
    setFormData({
      name: "",
      lastName: "",
      email: "",
      number: "",
      message: "",
      subject: "",
    });
  };
  const createContent = (): Content => {
    let contentObject = {
      Nome: formData.name,
      Sobrenome: formData.lastName,
      Assunto: formData.subject,
      Telefone: formData.number,
      Email: formData.email,
      Mensagem: formData.message,
      _autoresponse: "Mensagem enviada à YF Developer, aguarde a resposta!",
      _subject: "Nova mensagem do seu site",
    };
    return contentObject;
  };

  const sendForm = async (content: Content) => {
    try {
      await fetch(
        "https://formsubmit.co/ajax/4aac1bfbbbed6fddef07805ca7310983",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(content),
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  const inputs = {
    formData,
    handleChange,
    handleChangeSelect,
    createContent,
    sendForm,
    limparInputs,
  };

  return <FormContext.Provider value={inputs}>{children}</FormContext.Provider>;
}

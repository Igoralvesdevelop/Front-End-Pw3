import React, { useState } from "react";
import style from './CreateShoes.module.css';
import Input from "../form/input";
import Button from "../form/Button";

const CreateShoes = () => {
  const [shoes, setShoes] = useState({});
  const [showPriceInput, setShowPriceInput] = useState(false); // Estado para controlar a exibição do campo preço

  // Função para atualizar o estado com os dados do formulário
  function handlerChangeBook(event) {
    const { name, value } = event.target;
    setShoes({ ...shoes, [name]: value });
    console.log(shoes);
  }

  // Função para controlar a mudança no radio button (se o preço será inserido ou não)
  function handleRadioChange(event) {
    setShowPriceInput(event.target.value === "sim"); // Exibe o campo preço se a resposta for "sim"
  }

  // Função para tratar o envio do formulário
  function submit(event) {
    event.preventDefault();
    // Aqui, podemos validar ou processar o valor de entrada se necessário
    console.log(shoes);
  }

  return (
    <section className={style.create_shoes_container}>
      <h1>CADASTRO DE TENIS</h1>
      <form onSubmit={submit}>
        <Input
          type="text"
          name="txt_cliente"
          id="txt_cliente"
          placeholder="Digite o nome do cliente"
          handlerChange={handlerChangeBook}
        />

        <Input
          type="tel"
          name="number_telefone"
          id="number_telefone"
          placeholder="Digite o telefone do cliente"
          handlerChange={handlerChangeBook}
        />

        <Input
          type="text"
          name="txt_descricao"
          id="txt_descricao"
          placeholder="Digite a descrição do produto"
          handlerChange={handlerChangeBook}
        />

       
        <div>
          <label>
            <input
              type="radio"
              name="preco_input"
              value="sim"
              checked={showPriceInput}
              onChange={handleRadioChange}
            />
            Sim, quero inserir o valor de entrada
          </label>
          <label>
            <input
              type="radio"
              name="preco_input"
              value="nao"
              checked={!showPriceInput}
              onChange={handleRadioChange}
            />
            Não, não preciso inserir o valor de entrada
          </label>
        </div>

     
        {showPriceInput && (
          <Input
            type="number"
            name="number_preco"
            id="number_preco"
            placeholder="Digite o valor da entrada"
            handlerChange={handlerChangeBook}
            value={shoes.number_preco || ""} 
          />
        )}

        <Button label="CADASTRAR SAPATO" />
      </form>
    </section>
  );
};

export default CreateShoes;

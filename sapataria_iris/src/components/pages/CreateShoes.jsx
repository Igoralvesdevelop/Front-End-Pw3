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
    insertShoes(shoes); // Chama a função para inserir o livro
  }
  /* INSERÇÃO DE LIVRO */
  function insertShoes(shoes) {
      
      fetch('http://127.0.0.1:5000/inserirclientes', {
          method:'POST',
          mode:'cors',
          headers:{
              'Content-Type':'application/json',
              'Access-Control-Allow-Origin':'*',
              'Access-Control-Allow-Headers':'*'
          },
          body:JSON.stringify(shoes)
      }).then((resp)=>
          resp.json()
      ).then((respJSON)=>{
          console.log('RESPOSTA: ' + respJSON);
      }).catch((error)=>{
          console.log('ERRO: ' + error);
      })

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
          name="telefone"
          id="telefone"
          placeholder="Digite o telefone do cliente"
          handlerChange={handlerChangeBook}
        />

        <Input
          type="text"
          name="descricao"
          id="descricao"
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
            name="number_entrada"
            id="valor_entrada"
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

import React, { useState } from "react";
import style from './CreateShoes.module.css';
import Input from "../form/input";
import Button from "../form/Button";
import { data } from "react-router-dom";

const CreateShoes = () => {
  const [shoes, setShoes] = useState({});
  const [showPriceInput, setShowPriceInput] = useState(false); // Estado para controlar a exibição do campo preço

  // Função para atualizar o estado com os dados do formulário
  function handlerChangeShoes(event) {
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
          name="nome"
          id="nome"
          placeholder="Digite o nome do cliente"
          handlerChange={handlerChangeShoes}
        />

        <Input
          type="tel"
          name="telefone"
          id="telefone"
          placeholder="Digite o telefone do cliente"
          handlerChange={handlerChangeShoes}
        />
   
        <Input
          type="text"
          name="descricao"
          id="descricao"
          placeholder="Digite a descrição do produto"
          handlerChange={handlerChangeShoes}
        />
   
        <Input
          type="text"
          name="endereco"
          id="endereco"
          placeholder="Digite o endereço do cliente"
          handlerChange={handlerChangeShoes}
        />
           <Input
            type="number"
            name="valor"
            id="valor"
            placeholder="Digite o valor total do conserto"
            handlerChange={handlerChangeShoes}
          />
          <Input
            type="number"
            name="entrada"
            id="entrada"
            placeholder="Digite o valor da entrada"
   handlerChange={handlerChangeShoes}
            
          />
           <Input
            type="text "
            name="imagem"
            id="imagem"
            placeholder="Digite a url da imagem do sapato"
   handlerChange={handlerChangeShoes}
            
          />


        <Button label="CADASTRAR SAPATO" />
      </form>
    </section>
  );
};

export default CreateShoes;

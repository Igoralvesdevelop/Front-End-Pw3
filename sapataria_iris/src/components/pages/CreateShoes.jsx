import React from "react";
import style from './CreateShoes.module.css'

import Input from "../form/input";
import Select from "../form/Select";
import Button from "../form/Button";
const CreateShoes = ()=>{
    return(
        <section className={style.create_book_container}>
            <h1>CADASTRO DE TENIS</h1>

            <Input 
                type='Nome do cliente'
                name='txt_cliente'
                id='txt_cliente'
                placeholder='Digite o nome do cliente'
            />
            
            <Input 
                type='Telefone'
                name='number_telefone'
                id='number_telefone'
                placeholder='Digite o telefone do cliente'
            />
            
            <Input 
                type='descriçao'
                name='txt_cliente'
                id='txt_descricao'
                placeholder='Digite a descrição do produto'
            />
           
            <Button
                label='CADASTRAR SAPATO'/>
        </section>
    )
}

export default CreateShoes
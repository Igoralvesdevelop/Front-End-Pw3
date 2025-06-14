import React, { use } from "react";
import style from './ListShoes.module.css'
import { useState, useEffect } from "react";

import ShoesCard from "../ShoesCard";
import Container from "../layout/Container";
const ListShoes = ()=>{

    const [shoes, setShoes] = useState([])

    useEffect(()=>{

        fetch('http://127.0.0.1:5000/listagemShoes', {
            method: 'GET',
            mode: 'cors',
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            }
        })
        .then((resp) => resp.json())
        .then((shoesdata) => {
            console.log(shoesdata.data)
            setShoes(shoesdata.data)
        })
        .catch((err) => {
            console.log(err)
        });
    

    },[])

    return(
        <section>
            <h1>List Shoes</h1> 
            <Container>
            {
                shoes.map((shoes)=>(
                    <ShoesCard 
                        id={shoes.id}
                        key={shoes.id}
                        autor={shoes.nome}
                        titulo={shoes.descricao}
                        imagem={shoes.imagem}
                     
                    />
                 
                ))
            }
            </Container>
           
        </section>
    )
}

export default ListShoes
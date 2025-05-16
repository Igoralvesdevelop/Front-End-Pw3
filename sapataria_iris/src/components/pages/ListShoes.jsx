import React, { use } from "react";
import style from './ListShoes.module.css';
import { useState, useEffect } from "react";
import ShoesCard from "../ShoesCard";
import ContainerShoes from "../layout/Container.jsx";
const ListShoes = ()=>{

    const [shoes, setshoes] = useState([])

    useEffect(()=>{

        fetch('http://127.0.0.1:5000/listagemLivros', {
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
            setshoes(shoesdata.data)
        })
        .catch((err) => {
            console.log(err)
        });
    

    },[])

    return(
        <section>
            <h1>LIST BOOK</h1> 
           <ContainerShoes>
            {
               shoes.map((shoes)=>(

                    <ShoesCard 
                        nome_livro= {shoes.nome_livro}
                        autor_livro={shoes.autor_livro}
                        imagem={cavernas}
                        key={shoes.cod_livro}
                    />
                ))
            }
            </ContainerShoes>
           
        </section>
    )
}

export default ListShoes
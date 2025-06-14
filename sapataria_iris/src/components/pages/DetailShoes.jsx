import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import style from './DetailShoes.module.css';
import Button from '../Button';


const DetailShoes = () => {
    // RECUPERA O ID DA URL
    const { id } = useParams();
    console.log('ID:', id);

    // STATE PARA OS DADOS DO SAPATO
    const [shoes, setShoes] = useState({});

    // BUSCA OS DADOS DO SAPATO
    useEffect(() => {
        fetch(`http://localhost:5000/listagemShoes/${id}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setShoes(data.data);
                console.log(data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    return (
        <div className={style.grid}>
            <div className={style.container_img}>
                <img
                    className={style.img_book_detail}
                    src={shoes.imagem }
                    alt={`Foto do sapato: ${shoes.nome}`}
                />
            </div>

            <div className={style.info}>
                <span className={style.titulo}>{shoes.nome}</span>
                <span className={style.autor}>{shoes.descricao}</span>
                <span className={style.descricao}>Endereço: {shoes.endereco}</span>
                <span className={style.descricao}>Valor: R$ {shoes.valor}</span>
                <span className={style.descricao}>Entrada: R$ {shoes.entrada}</span>
                <span className={style.descricao}>Telefone: {shoes.telefone}</span>

                <div className={style.container_buttons}>
                    <Button
                        label="EDITAR"
                        router={`/updateShoes/`}
                        id={shoes.id}
                    />
                    <Button
                        label="EXCLUIR"
                        router={`/deleteShoes/`}
                        id={shoes.id}
                    />
                </div>
            </div>
        </div>
    );
};

export default DetailShoes;
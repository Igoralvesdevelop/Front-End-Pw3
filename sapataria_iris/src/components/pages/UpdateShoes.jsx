import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateShoes = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/listagemShoes/${id}`)
            .then(resp => resp.json())
            .then(data => setForm(data.data));
    }, [id]);

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:5000/alterarShoes', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
        })
            .then(resp => resp.json())
            .then(() => {
                navigate('/listShoes'); // Redireciona para a listagem após salvar
            });
    }

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '40px auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <input name="id" type="hidden" value={form.id || ''} />
            <label>Nome: <input name="nome" value={form.nome || ''} onChange={handleChange} /></label>
            <label>Descrição: <input name="descricao" value={form.descricao || ''} onChange={handleChange} /></label>
            <label>Endereço: <input name="endereco" value={form.endereco || ''} onChange={handleChange} /></label>
            <label>Valor: <input name="valor" value={form.valor || ''} onChange={handleChange} /></label>
            <label>Entrada: <input name="entrada" value={form.entrada || ''} onChange={handleChange} /></label>
            <label>Telefone: <input name="telefone" value={form.telefone || ''} onChange={handleChange} /></label>
            <label>Imagem (URL): <input name="imagem" value={form.imagem || ''} onChange={handleChange} /></label>
            <button type="submit">Salvar Alterações</button>
        </form>
    );
};

export default UpdateShoes;
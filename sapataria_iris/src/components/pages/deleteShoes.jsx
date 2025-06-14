import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DeleteShoes = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (window.confirm('Tem certeza que deseja excluir este sapato?')) {
            fetch(`http://localhost:5000/excluirShoes/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            })
                .then(resp => resp.json())
                .then(() => {
                    navigate('/listShoes'); // Redireciona para a listagem após excluir
                });
        } else {
            navigate('/listShoes'); // Cancela e volta para a listagem
        }
    }, [id, navigate]);

    return (
        <div style={{ textAlign: 'center', marginTop: 40 }}>
            <p>Excluindo sapato...</p>
        </div>
    );
};

export default DeleteShoes;
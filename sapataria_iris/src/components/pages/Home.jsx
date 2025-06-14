import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';

const images = [
    // Coloque aqui as URLs das imagens do carrossel
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA1-ALio4ka5wYhPaWubDUnfj-ZINOqyll6Q&s',
    'https://img.freepik.com/fotos-premium/sapateiro-afia-a-sola-do-sapato-servico-de-conserto-de-calcados_266732-24625.jpg',
    'https://cigo.com.br/wp-content/uploads/2021/03/atendimento-ao-cliente-768x320.png'
];

const Home = () => {
    const [current, setCurrent] = useState(0);

    // Avança automaticamente a cada 3 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000); // 3000ms = 3 segundos

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className={styles.home_container + ' ' + styles.classic_bg}>
            <h1 className={styles.classic_title}>
                <span>SAPATARIA IRIS</span>
            </h1>
            <p className={styles.classic_subtitle}>
                Tradição, elegância e qualidade em cada passo.
            </p>
            <div className={styles.carousel}>
                <img
                    className={styles.carousel_img}
                    src={images[current]}
                    alt={`Sapato clássico ${current + 1}`}
                />
            </div>
            <div style={{
                marginTop: '2.5em',
                background: '#f8fafc',
                border: '2px solid #60a5fa',
                borderRadius: '14px',
                boxShadow: '0 2px 12px rgba(37,99,235,0.08)',
                padding: '2em 2em',
                maxWidth: 600,
                textAlign: 'center'
            }}>
                <h2 style={{
                    color: '#2563eb',
                    fontFamily: "'Montserrat', 'Segoe UI', Arial, sans-serif",
                    marginBottom: '0.5em'
                }}>Sobre a Sapataria Íris</h2>
                <p style={{
                    color: '#1e293b',
                    fontSize: '1.1em',
                    marginBottom: '1.2em'
                }}>
                    Fundada em 1985, a Sapataria Íris é referência em conserto, restauração e cuidados com calçados de todos os estilos.
                    Com tradição familiar, oferecemos atendimento personalizado, materiais de alta qualidade e técnicas modernas para garantir a satisfação de nossos clientes.
                    Venha nos visitar e dê vida nova aos seus sapatos!
                </p>
                <h3 style={{
                    color: '#2563eb',
                    fontFamily: "'Montserrat', 'Segoe UI', Arial, sans-serif",
                    marginBottom: '0.3em'
                }}>Contatos</h3>
                <p style={{ margin: 0 }}>
                    <strong>Telefone:</strong> (11) 99999-9999<br />
                    <strong>Email:</strong> contato@sapatariairis.com.br<br />
                    <strong>Endereço:</strong> Rua das Flores, 123 - Centro, São Paulo/SP
                </p>
            </div>
        </section>
    );
};

export default Home;
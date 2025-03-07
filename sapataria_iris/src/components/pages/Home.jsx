import React from 'react'
import styles from './Home.module.css';

const Home = ()=>{
    return(

        <section className={styles.home_container}>

            <h1> SAPATARIA IRIS</h1>
            <p></p>
            <img className='book_home' src="./book_home.jpg" alt="" />

        </section>

    );
}

export default Home;
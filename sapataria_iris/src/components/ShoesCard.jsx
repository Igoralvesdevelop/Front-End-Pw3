import Button from './Button'

import style from './ShoesCard.module.css'

const ShoesCard = ({id, titulo, autor, imagem})=>{
    return(
        
        <div className={style.bookCard}>
            <h3 className={style.titulo}>{titulo}</h3>
            <p className={style.autor}>{autor}</p>
            <img src={imagem} alt="Capa: iiii" />
            <Button 
                label='DETALHE'
                router='/detailShoes/'
                id={id}/>
        </div>
        
    )
}

export default ShoesCard
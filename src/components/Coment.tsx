import { Trash, ThumbsUp } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Coment.module.css';

interface ComentProps{
    content: string;
    onDeleteComent: (coment: string)=> void;
}

export function Coment({content, onDeleteComent}: ComentProps){
    const [like, setLike] = useState(0);

    function handleDeleteComent(){
        onDeleteComent(content);
    }

    function handleLikeComent (){
        setLike((state)=>{
            return state + 1;
        });
    }

    return(
        <div className={styles.coment}>
            <Avatar hasBorder={false} src="https://github.com/KiF1.png" alt="" />
            <div className={styles.comentBox}>
                <div className={styles.comentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Kif1</strong>
                            <time dateTime='2022-09-21 14:23'>Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComent} title="Deletar Comentários">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComent}><ThumbsUp />Aplaudir <span>{like}</span></button>
                </footer>
            </div>
        </div>
    )
}
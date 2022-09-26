import { Avatar } from './Avatar';
import { Coment } from './Coment';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/esm/locale/pt-BR';
import styles from './Post.module.css';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface Author{
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content{
    type: 'paragraph' | 'link';
    content: string;
}

 export interface PostProps{
    author: Author;
    publishedAt: Date;
    content: Content[];
}

export function Post({author, publishedAt, content}: PostProps){
  const formatedAta = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR,})
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {locale: ptBR, addSuffix: true,})
  const [coments, setComents] = useState(["Post Legal"]);
  const [newComentText, setNewComentText] = useState("");
  const isNewComentEmpty = newComentText.length == 0;

  function handleCreateNewComent(event: FormEvent){
    event.preventDefault();
    setComents([...coments, newComentText]);
    setNewComentText("");
  }
  function handleNewComentChange(event: ChangeEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("");
    setNewComentText(event.target.value);
  }
  function deleteComent(comentToDelete: string){
    const comentsWithoutDeletedOne = coments.filter(coment => {return coment !== comentToDelete})
    setComents(comentsWithoutDeletedOne);
  }
  function handleNewComentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={formatedAta} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>
            <div className={styles.content}>
               {content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else if(line.type == 'link'){
                    return <p key={line.content}><a href="#">{line.content}</a></p>
                }
               })}
            </div>
            <form onSubmit={handleCreateNewComent} className={styles.comentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea name='coment' placeholder="Deixe seu Comentario" value={newComentText} onChange={handleNewComentChange} onInvalid={handleNewComentInvalid} required />
                <footer>
                <button type="submit" disabled={isNewComentEmpty}>Publicar</button>
                </footer>
            </form>
            <div className={styles.comentList}>
                {coments.map(coment =>{
                    return (<Coment onDeleteComent={deleteComent} key={coment} content={coment} />)
                })}
            </div>
        </article>
    )
}
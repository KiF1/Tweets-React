import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import {Post, PostProps} from './components/Post';
import './global.css';
import styles from './app.module.css';

interface Posts extends PostProps {
  id: number
}


const posts: Posts[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/KiF1.png',
      name: 'Kif1',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-09-22 09:30')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO Rockeseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-09-25 14:00')
  },
];

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post =>{
            return (<Post key={post.id} author={post.author} content={post.content} publishedAt={post.publishedAt} />)
          })}
        </main>
      </div>
    </div>
  )
}

export default App

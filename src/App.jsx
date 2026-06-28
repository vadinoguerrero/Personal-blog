
const posts = [
  {
    date: '22/5/26',
    description: "I don't have to pretend I'm someone I'm not to fit in, make friends or advance with girls, I have to be myself enough to attract the right people who will appreciate it. En resumen, hay gente que es para vos y gente que no, y no es porque haya nada mal en vos, sino que es así porque sí y listo",
  },
  {
    date: '1/2/26',
    description: '"Everything you gain in life will rot and fall apart and all that will be left of you is what was in your heart."',
  },
  {
    date: '21/3/23',
    description: "Debería abrirme más, expresar más mis sentimientos, mis problemas, las cosas que me molestan, y no embotellar y guardar todo como hago siempre. Desde los 8 o 9 que soy mi propio mejor amigo, compañero, y mi propio escuchador, estoy acostumbrado a guardarme todos mis lios emocionales, a que cuando algo me aproblema soy solo yo el que tiene que tratar con eso y solucionarlo, a absorber todo el impacto del golpe sin que los demás vean, y es algo muy dañino, porque en el caso de que mi estado emocional se ponga muy salado como en 2013 o 2018, me llenan sensaciones de desesperación, solitud y ahogamiento. En cambio en tiempos en los que me abrí, en tiempos en los que me expresé totalmente me sentí más liviano y más pleno. Creo que siento mucha más libertad, conexión y empatía con la gente cuando les puedo contar mis problemas y ellos comprenden (o al menos se hacen una idea) porque al fin y al cabo tengo que asimilar que todos tienen problemas parecidos o peores, y que yo no soy el único, tengo que desligarme de esa idea subconsciente de que todos los demás están perfectos emocionalmente y yo soy el único que no, porque no es así."
  },
  {
    date: '31/7/22',
    description: "Reírse es liberar tensión al presenciar cosas que burlan la seriedad de la vida"
  },
  {
    date: '12/12/21',
    description: "Es casi como si la felicidad fuera proporcional a la esperanza"
  }
]

export default function App() {
  return (
    <div className="app-shell">
      <header>
        <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h1 style={{ margin: 0, fontSize: '1.5rem', cursor: 'pointer' }}>Vadiño Guerrero</h1>
          <nav>
            <a href="/about" style={{ color: '#4a9dfd', textDecoration: 'none' }}>Que #%*! es esto?</a>
          </nav>
        </div>
      </header>


      <div className="banner">
        <h1>El jardín digital del Vadiño</h1>
        <p>Pensamientos y cosas a medida que se me vayan ocurriendo</p>
      </div>

      

        <div className="postsgrid">    
          {posts.map((post) => (
            <div className="post" key={post.date}>
              <h3>{post.date}</h3>
              <p>{post.description}</p>
            </div>
          ))}
        </div>

    </div>
  )
}

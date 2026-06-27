import Header from "./components/Header";


const posts = [
  {
    title: '22/5/26',
    description: "I don't have to pretend I'm someone I'm not to fit in, make friends or advance with girls, I have to be myself enough to attract the right people who will appreciate it. En resumen, hay gente que es para vos y gente que no, y no es porque haya nada mal en vos, sino que es así porque sí y listo",
  },
  {
    title: '1/2/26',
    description: '"Everything you gain in life will rot and fall apart and all that will be left of you is what was in your heart."',
  },
]

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <header>
        <h1>El jardín digital del Vadiño</h1>
        <p>Pensamientos y cosas a medida que se me vayan ocurriendo</p>
      </header>

      <main>

        <section className="posts">
          <h2>Recent Posts</h2>
          {posts.map((post) => (
            <article key={post.title}>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </article>
          ))}
        </section>
      </main>

    </div>
  )
}

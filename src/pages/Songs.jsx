import Header from '../components/Header';
import songs from '../data/songs.js';

export default function Lyrics() {
  return (
    <div className="projects">
      <Header />
      <div className="banner">
        <h1>Canciones y letras</h1>
        <p>
          Canciones que siento en el pecho y cuyas letras me hacen sentir
          identificado.
        </p>
      </div>
      <div className="song-container">
        {songs.map((song) => (
          <div className="song-card" key={song.id}>
            <div className="song-header">
              <img className="album-cover" src={song.cover} alt={song.title} />

              <div className="song-details">
                <h2>{song.title}</h2>
                <h3>{song.artist}</h3>
              </div>
            </div>

            {song.lyrics.map((lyric, index) => (
              <blockquote key={index}>{lyric}</blockquote>
            ))}

            <iframe
              src={song.spotify}
              width="100%"
              height="82"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              style={{
                border: 0,
                borderRadius: '12px',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

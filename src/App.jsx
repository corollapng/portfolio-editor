import { PlayCircle, Mail, Instagram, Youtube } from "lucide-react";

export default function App() {
  return (
    <main style={{ minHeight: "100vh", background: "linear-gradient(to bottom, black, #4c1d95)", color: "white", padding: "2rem", fontFamily: "sans-serif" }}>
      <section style={{ textAlign: "center", padding: "4rem 0" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem" }}>Christian Leandro</h1>
        <p style={{ fontSize: "1.25rem", color: "#c084fc" }}>Editor de Vídeo | Reels, Stories & Conteúdo Dinâmico</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "2rem", flexWrap: "wrap" }}>
          <a href="mailto:seuemail@example.com" style={buttonStyle("#7c3aed")}>
            <Mail size={18} /> Contato
          </a>
          <a href="https://instagram.com/seuusuario" target="_blank" style={buttonStyle("linear-gradient(to right, #ec4899, #f59e0b)")}>
            <Instagram size={18} /> Instagram
          </a>
          <a href="https://youtube.com/seucanal" target="_blank" style={buttonStyle("#dc2626")}>
            <Youtube size={18} /> YouTube
          </a>
        </div>
      </section>

      <section style={gridStyle}>
        {[
          { id: "VIDEO_ID_1", desc: "Edição de Reels com transições e cortes rápidos." },
          { id: "VIDEO_ID_2", desc: "Vídeo promocional com legenda dinâmica." },
          { id: "VIDEO_ID_3", desc: "Story animado com efeitos visuais." },
        ].map((video, i) => (
          <div key={i} style={cardStyle}>
            <div style={{ position: "relative", paddingTop: "56.25%" }}>
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={`Vídeo ${i + 1}`}
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: "0.75rem" }}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p style={{ marginTop: "1rem", color: "#ddd", fontSize: "0.9rem" }}>{video.desc}</p>
          </div>
        ))}
      </section>

      <section style={{ textAlign: "center", marginTop: "4rem", maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "600", color: "#d8b4fe" }}>Sobre Mim</h2>
        <p style={{ color: "#e9d5ff", fontSize: "1.125rem", marginTop: "1rem" }}>
          Com paixão por contar histórias através da edição, trago ritmo, emoção e criatividade a cada projeto. Seja para conteúdo digital, marketing ou vídeos pessoais, entrego sempre com qualidade e impacto visual.
        </p>
      </section>

      <footer style={{ textAlign: "center", marginTop: "4rem", color: "#a78bfa", fontSize: "0.875rem" }}>
        © {new Date().getFullYear()} Christian Leandro. Todos os direitos reservados.
      </footer>
    </main>
  );
}

const buttonStyle = (bg) => ({
  background: bg,
  color: "white",
  padding: "0.5rem 1rem",
  borderRadius: "0.5rem",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  textDecoration: "none",
  fontWeight: "500",
});

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "1.5rem",
  marginTop: "2rem",
};

const cardStyle = {
  backgroundColor: "#6b21a8",
  borderRadius: "1rem",
  padding: "1rem",
};

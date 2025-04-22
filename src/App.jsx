import { PlayCircle, Mail, Instagram, Youtube } from "lucide-react";

// Componente principal
export default function Portfolio() {
  return (
    <MainContainer>
      <HeroSection />
      <PortfolioGrid />
      <AboutSection />
      <Footer />
    </MainContainer>
  );
}

// Componentes separados para melhor organização
function MainContainer({ children }) {
  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(to bottom, black, #4c1d95)",
      color: "white",
      padding: "2rem",
      fontFamily: "'Inter', sans-serif"
    }}>
      {children}
    </main>
  );
}

function HeroSection() {
  return (
    <section style={{
      textAlign: "center",
      padding: "4rem 0",
      maxWidth: "800px",
      margin: "0 auto"
    }}>
      <h1 style={{
        fontSize: "clamp(2rem, 5vw, 3rem)",
        fontWeight: "bold",
        marginBottom: "1rem",
        lineHeight: "1.2"
      }}>
        Christian Leandro
      </h1>
      <p style={{
        fontSize: "clamp(1rem, 2vw, 1.25rem)",
        color: "#c084fc",
        marginBottom: "2rem"
      }}>
        Editor de Vídeo | Reels, Stories & Conteúdo Dinâmico
      </p>
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
        marginTop: "2rem",
        flexWrap: "wrap"
      }}>
        <SocialButton 
          href="mailto:contato@christianleandro.com" 
          color="#7c3aed"
          icon={<Mail size={18} />}
          label="Contato"
        />
        <SocialButton 
          href="https://instagram.com/christianleandro" 
          color="linear-gradient(to right, #ec4899, #f59e0b)"
          icon={<Instagram size={18} />}
          label="Instagram"
        />
        <SocialButton 
          href="https://youtube.com/christianleandro" 
          color="#dc2626"
          icon={<Youtube size={18} />}
          label="YouTube"
        />
      </div>
    </section>
  );
}

function PortfolioGrid() {
  const portfolioItems = [
    { 
      id: "VIDEO_ID_1", 
      title: "Edição de Reels",
      desc: "Edição de Reels com transições e cortes rápidos." 
    },
    { 
      id: "VIDEO_ID_2", 
      title: "Vídeo Promocional",
      desc: "Vídeo promocional com legenda dinâmica." 
    },
    { 
      id: "VIDEO_ID_3", 
      title: "Story Animado",
      desc: "Story animado com efeitos visuais." 
    },
  ];

  return (
    <section style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "1.5rem",
      marginTop: "2rem",
      maxWidth: "1200px",
      margin: "2rem auto",
      padding: "0 1rem"
    }}>
      {portfolioItems.map((item, index) => (
        <PortfolioCard 
          key={index}
          videoId={item.id}
          title={item.title}
          description={item.desc}
        />
      ))}
    </section>
  );
}

function PortfolioCard({ videoId, title, description }) {
  return (
    <div style={{
      backgroundColor: "rgba(107, 33, 168, 0.7)",
      borderRadius: "1rem",
      padding: "1rem",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      ':hover': {
        transform: "translateY(-5px)",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)"
      }
    }}>
      <h3 style={{
        color: "#f3e8ff",
        marginBottom: "0.5rem",
        fontSize: "1.1rem"
      }}>
        {title}
      </h3>
      <div style={{ position: "relative", paddingTop: "56.25%" }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
          title={title}
          style={{ 
            position: "absolute", 
            top: 0, 
            left: 0, 
            width: "100%", 
            height: "100%", 
            borderRadius: "0.5rem",
            border: "none"
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
      <p style={{ 
        marginTop: "1rem", 
        color: "#e9d5ff", 
        fontSize: "0.9rem",
        lineHeight: "1.5"
      }}>
        {description}
      </p>
    </div>
  );
}

function AboutSection() {
  return (
    <section style={{ 
      textAlign: "center", 
      marginTop: "4rem", 
      maxWidth: "700px", 
      marginLeft: "auto", 
      marginRight: "auto",
      padding: "0 1rem"
    }}>
      <h2 style={{ 
        fontSize: "clamp(1.5rem, 3vw, 2rem)", 
        fontWeight: "600", 
        color: "#d8b4fe",
        marginBottom: "1.5rem"
      }}>
        Sobre Mim
      </h2>
      <p style={{ 
        color: "#e9d5ff", 
        fontSize: "1.125rem", 
        lineHeight: "1.6",
        textAlign: "left"
      }}>
        Com paixão por contar histórias através da edição, trago ritmo, emoção e criatividade a cada projeto. 
        Especializado em conteúdo digital e marketing visual, meu trabalho combina técnica apurada com sensibilidade 
        artística para entregar vídeos que impactam e engajam.
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ 
      textAlign: "center", 
      marginTop: "4rem", 
      color: "#a78bfa", 
      fontSize: "0.875rem",
      padding: "2rem 0"
    }}>
      © {new Date().getFullYear()} Christian Leandro. Todos os direitos reservados.
    </footer>
  );
}

// Componente reutilizável para botões
function SocialButton({ href, color, icon, label }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      style={{
        background: color,
        color: "white",
        padding: "0.75rem 1.25rem",
        borderRadius: "0.5rem",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        textDecoration: "none",
        fontWeight: "500",
        transition: "transform 0.2s ease, opacity 0.2s ease",
        ':hover': {
          transform: "scale(1.05)",
          opacity: "0.9"
        }
      }}
    >
      {icon}
      {label}
    </a>
  );
}
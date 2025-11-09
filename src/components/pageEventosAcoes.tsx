import { useEffect, useState } from "react";
import Navbar from "./navbar";
import { Button } from "./ui/button";
import { useNavigate, useParams } from "react-router-dom";
import FooterPage from "./footerPage";
import { eventosEAcoes } from "@/data/dataEventosAcoes";

interface EventoType {
  id: number;
  titulo: string;
  tipo: string;
  descricaoCurta: string;
  descricaoLonga: string;
  fotoCapa: string;
  fotos: string[];
}

function PageEventosAcoes() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [evento, setEvento] = useState<EventoType | null>();

  function buscarEventoPorId(id: number) {
    return eventosEAcoes.find((evento) => evento.id === id) || null;
  }

  // 🔄 Carregar o evento quando a página for montada
  useEffect(() => {
    if (id) {
      const eventoEncontrado: EventoType | null = buscarEventoPorId(Number(id));
      setEvento(eventoEncontrado);
    }
  }, [id]);

  if (!evento) {
    return (
      <main className="min-h-screen bg-bg text-text flex items-center justify-center">
        <p className="text-text-muted text-lg">Evento não encontrado 😢</p>
      </main>
    );
  }

  function handleClick() {
    navigate("/");
  }

  return (
    <>
      <Navbar />
      <section className="max-w-5xl mx-auto px-4 py-12">
        {/* Capa */}
        <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-lg shadow-[var(--color-shadow)] border border-border">
          {evento.fotoCapa ? (
            <img
              src={evento.fotoCapa}
              alt={evento.titulo}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-bg-alt flex items-center justify-center text-text-muted italic">
              Sem imagem de capa
            </div>
          )}
        </div>

        {/* Conteúdo */}
        <div className="mt-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-2">
            {evento.titulo}
          </h1>
          <p className="text-lg text-secondary">{evento.descricaoCurta}</p>
        </div>

        <div className="mt-6 border-t border-border pt-6">
          <p className="text-text leading-relaxed text-justify text-secondary">
            {evento.descricaoLonga}
          </p>
        </div>

        {/* Galeria */}
        {evento.fotos && evento.fotos.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-4">
              Galeria de Fotos
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {evento.fotos.map((foto, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-lg border border-border hover:shadow-md hover:shadow-[var(--color-shadow)] transition-all duration-300"
                >
                  <img
                    src={foto}
                    alt={`Foto ${index + 1}`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <span className="text-sm text-text-muted">
                      Foto {index + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <Button
          className="bg-[var(--color-primary)] mt-6 w-full"
          onClick={handleClick}
        >
          Voltar
        </Button>
      </section>
      <FooterPage />
    </>
  );
}

export default PageEventosAcoes;

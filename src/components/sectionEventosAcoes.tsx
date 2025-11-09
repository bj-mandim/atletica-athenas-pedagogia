import { eventosEAcoes } from "@/data/dataEventosAcoes";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

function EventosEAcoes() {
  const navigate = useNavigate();
  function handleClick(id: number) {
    navigate(`/eventos/${id}`);
  }
  return (
    <>
      <div className="relative w-full max-w-[1200px] mx-auto px-4">
        <div
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory
          pb-4 scrollbar-transparent"
        >
          {eventosEAcoes.map((evento, index) => (
            <Card
              className="bg-[var(--color-bg-alt)] p-8 rounded-xl transition-transform hover:scale-105 border-none flex-shrink-0 snap-start flex justify-center w-[320px]"
              key={index}
            >
              <img
                src={evento.fotoCapa}
                alt={`foto do evento: ${evento.titulo}`}
                className="w-full h-50 rounded-2xl object-cover border-2 border-[var(--color-primary)]"
              />
              <h3 className="text-xl text-[var(--color-primary)] mb-2">
                {evento.titulo}
              </h3>
              <p className="text-[var(--color-secondary)]">
                {evento.descricaoCurta}
              </p>
              <Button onClick={() => handleClick(evento.id)}>
                Ver Detalhes
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default EventosEAcoes;

"use client";
import { equipeDiretoria } from "../data/dataEquipe";
import { Card, CardContent } from "@/components/ui/card";

function CardsEquipe() {
  return (
    <div className="relative w-full max-w-[1200px] mx-auto px-4">
      {/* Sombras nas laterais */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[var(--color-bg)] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[var(--color-bg)] to-transparent z-10" />

      {/* Scroll container */}
      <div
        className="
          flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory
          pb-4 scrollbar-transparent
        "
      >
        {equipeDiretoria.map((membro, index) => (
          <div
            key={index}
            className="flex-shrink-0 snap-start flex justify-center w-[220px]"
          >
            <Card className="bg-[var(--color-bg-alt)] rounded-2xl shadow-lg hover:shadow-2xl border border-[var(--color-border)] transform hover:scale-105 transition-all duration-300 w-[220px] h-[300px]">
              <CardContent className="flex flex-col items-center text-center h-full justify-between py-4">
                <img
                  src={membro.imagem || "/placeholder.png"}
                  alt={`${membro.cargo} - ${membro.nome}`}
                  className="w-40 h-44 rounded-2xl object-cover border-2 border-[var(--color-primary)]"
                />
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-primary)]">
                    {membro.nome}
                  </h3>
                  <h4 className="text-[var(--color-secondary)] text-base">
                    {membro.cargo}
                  </h4>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardsEquipe;

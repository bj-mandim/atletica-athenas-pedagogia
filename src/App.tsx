// import { useState } from 'react'

import CardsEquipe from "./components/cards";

function App() {
  // const [count, setCount] = useState(0)
  ///public/logo-atletica-athenas-sem-fundo.png

  return (
    <div className="w-full bg-[var(--color-bg)]">
      <nav className="bg-[var(--color-bg-alt)] shadow-md p-4 w-full">
        <div className="container mx-auto flex items-center justify-center gap-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] transition-transform duration-300 hover:scale-110 hover:text-[var(--color-secondary)]">
            Atlética
          </h2>

          <img
            src="/logo-atletica-athenas-sem-fundo.png"
            alt="Logo Athenas"
            className="w-20 h-20 object-contain mx-4"
          />

          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] transition-transform duration-300 hover:scale-110 hover:text-[var(--color-secondary)]">
            Athenas
          </h2>
        </div>
      </nav>
      <section className="bg-[var(--color-primary)] text-white text-center py-10 p-4 w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Bem-vindos(as) a Atlética Athenas!
        </h2>
        <p className="text-lg mb-2">
          É com muita alegria que recebemos vocês, futuros pedagogos e novas
          mentes brilhantes da Multivix Cariacica! A Atlética Athenas é mais do
          que um símbolo — é união, força e conhecimento. Aqui celebramos cada
          conquista, apoiamos uns aos outros e vivemos intensamente a
          experiência universitária.
        </p>
        <p className="text-lg">
          Prepare-se para viver momentos incríveis, fazer novas amizades,
          participar de eventos, jogos, festas e ações solidárias. Juntos, somos
          mais fortes. Juntos, somos Athenas!
        </p>
      </section>
      <div className="flex flex-col text-center px-6 w-full bg-[var(--color-bg)] w-90">
        <section className="py-16 lg:px-0 bg-[var(--color-bg)] w-full">
          <h2 className="text-3xl text-[var(--color-primary)] mb-8">
            Nossa Diretoria
          </h2>
          <CardsEquipe />
        </section>
        <section className="categorias text-center py-10 px-4">
          <h2 className="text-3xl text-[var(--color-primary)] mb-8">
            Eventos da Atlética (em manutenção!)
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="geral.html"
              className="categoria bg-[var(--color-bg-alt)] p-8 rounded-xl transition-transform hover:scale-105 text-white"
            >
              <h3 className="text-xl text-[var(--color-primary)] mb-2">
                EM MANUTENÇÃO!!!
              </h3>
              <p className="text-[var(--color-secondary)]">
                Aguarde, estou fazendo, ainda não está pronto!! Se clicar, não
                vai levar a lugar nenhum!!!
              </p>
            </a>
          </div>
        </section>

        <section className="categorias text-center py-10 px-4">
          <h2 className="text-3xl text-[var(--color-primary)] mb-8">
            Parcerias (em manutenção!)
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="categoria-parceiro bg-[var(--color-bg-alt)] p-8 rounded-xl transition-transform hover:scale-105 flex flex-col items-center justify-center">
              <h3 className="text-xl text-[var(--color-primary)] mb-2">
                100% Eventos
              </h3>
            </div>
          </div>
        </section>
      </div>
      <footer className="footer bg-[var(--color-bg-alt)] text-[var(--color-secondary)] text-center py-6 text-sm">
        <p>
          Feito por{" "}
          <a href="https://portfolio-bj-mandim.vercel.app/" target="_black">
            Beatriz Mandim
          </a>{" "}
          © 2025 Atlética Athenas
        </p>
      </footer>
    </div>
  );
}

export default App;

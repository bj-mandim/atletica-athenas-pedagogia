import CardsEquipe from "./cards";
import FooterPage from "./footerPage";
import Navbar from "./navbar";
import EventosEAcoes from "./sectionEventosAcoes";
import { Instagram, UsersRound, Link } from "lucide-react";
import { Button } from "./ui/button";
import QuemSomos from "./quemSomos";

function MenuPage() {
  return (
    <div className="w-full bg-[var(--color-bg)]">
      <Navbar />
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
          participar de eventos, jogos, festas e ações solidárias.
        </p>
        <br />
        <p>
          <strong className="text-3xl">
            Juntos, somos mais fortes. Juntos, somos Athenas!
          </strong>
        </p>
      </section>
      <QuemSomos />
      <div className="flex flex-col text-center px-6 w-full bg-[var(--color-bg)] w-90">
        <section className="py-16 lg:px-0 bg-[var(--color-bg)] w-full">
          <h2 className="text-3xl text-[var(--color-primary)] mb-8">
            Nossa Diretoria
          </h2>
          <CardsEquipe />
        </section>
        <section className="text-center py-10 px-4">
          <h2 className="text-3xl text-[var(--color-primary)] mb-8">
            Eventos e Ações da Atlética
          </h2>
        </section>
        <EventosEAcoes />

        <section className="flex flex-col md:flex-row text-center py-10 px-4">
          <div>
            <h2 className="text-3xl text-[var(--color-primary)] mb-8">
              Parcerias
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="categoria-parceiro bg-[var(--color-bg-alt)] p-8 rounded-xl transition-transform hover:scale-105 flex flex-col items-center justify-center">
                <img
                  src="/logo-100-eventos.png"
                  alt="logo-100%-eventos"
                  className="w-30 h-30 rounded-2xl object-cover"
                />
                <h3 className="text-xl text-[var(--color-primary)] mb-2">
                  100% Eventos
                </h3>
                <a
                  href={
                    "https://www.instagram.com/100eventos?igsh=MWZlbzh2OHgycHM2NQ=="
                  }
                  target="_black"
                >
                  <Button>
                    <Instagram />
                    Instagram
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="md:pt-0 sm:pt-10">
            <h2 className="text-3xl text-[var(--color-primary)] mb-8">
              Redes Sociais
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[var(--color-bg-alt)] p-8 rounded-xl transition-transform hover:scale-105 flex flex-col items-center justify-center">
                <UsersRound className="w-30 h-30 rounded-2xl object-cover bg-[var(--color-bg-alt)]" />
                <h3 className="text-xl text-[var(--color-primary)] mb-2">
                  Grupo no WhatsApp
                </h3>
                <a
                  href={
                    "https://chat.whatsapp.com/Cm6O5T14YLu6cdW7dWYuVR?mode=wwt"
                  }
                  target="_black"
                >
                  <Button>
                    <Link />
                    Link do Grupo
                  </Button>
                </a>
              </div>
              <div className="bg-[var(--color-bg-alt)] p-8 rounded-xl transition-transform hover:scale-105 flex flex-col items-center justify-center">
                <Instagram className="w-30 h-30 rounded-2xl object-cover bg-[var(--color-bg-alt)]" />
                <h3 className="text-xl text-[var(--color-primary)] mb-2">
                  Instagram
                </h3>
                <a
                  href={
                    "https://www.instagram.com/athenas_atletica?igsh=eWF0YjQ0ejNhbjEx&utm_source=qr"
                  }
                  target="_black"
                >
                  <Button>
                    <Link />
                    Instagram
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <FooterPage />
    </div>
  );
}

export default MenuPage;

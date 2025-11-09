function QuemSomos() {
  return (
    <>
      <section className="bg-[var(--color-bg)] text-white text-center py-10 p-4 w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--color-primary)]">
          Quem Somos?
        </h2>
        <p className="text-lg mb-2">
          A Atlética de Pedagogia foi fundada em 2025 com o objetivo de
          fortalecer a união entre os estudantes, promover o espírito esportivo
          e representar com orgulho o nosso curso dentro e fora da faculdade.
          <br />
          <br />
          Formada e liderada por mulheres dedicadas e apaixonadas pela educação,
          nossa diretoria busca construir uma atlética baseada na colaboração,
          no respeito e na representatividade. Mais do que incentivar o esporte
          e a integração acadêmica, acreditamos no poder das experiências
          compartilhadas e no impacto positivo que a união estudantil pode
          gerar.
          <br />
          <br />
          Estamos apenas no começo da nossa trajetória, mas temos grandes sonhos
          e a vontade de fazer história, levando o nome da Pedagogia com
          entusiasmo, garra e amor em tudo o que fazemos.
        </p>
      </section>
      <section className="flex flex-row items-center justify-center bg-[var(--color-primary)] text-white py-10 px-4 w-full">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Texto */}
          <div className="flex flex-col items-center md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que escolhemos a Athena como nossa mascote?
            </h2>
            <p className="text-lg md:text-xl leading-relaxed">
              Escolhemos Athena como símbolo da nossa equipe de Pedagogia
              Atlética porque ela representa tudo o que acreditamos: sabedoria,
              estratégia, justiça e educação em movimento!
              <br />
              <br /> Inspirada na deusa grega Atena e na cidade berço da
              democracia, nossa mascote une esporte e conhecimento com propósito
              e atitude!
              <br />
              <br /> Atenas é mais que um símbolo — é nossa identidade!
            </p>
          </div>

          {/* Imagem */}
          <div className="md:w-1/2 flex md:justify-end mt-6 md:mt-0 w-full h-full">
            <img
              src="logo-atletica-athenas-sem-fundo.png"
              alt="logo-athenas"
              className="w-full h-98 md:w-80 lg:w-96 object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default QuemSomos;

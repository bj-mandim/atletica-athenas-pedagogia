function Navbar() {
  return (
    <nav className="bg-[var(--color-bg-alt)] shadow-md p-4 w-full">
      <div className="container mx-auto flex items-center justify-center gap-6">
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] transition-transform duration-300 hover:scale-110 hover:text-[var(--color-secondary)]">
          Atlética
        </h1>

        <img
          src="/logo-atletica-athenas-sem-fundo.png"
          alt="Logo Athenas"
          className="w-20 h-20 object-contain mx-4"
        />

        <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] transition-transform duration-300 hover:scale-110 hover:text-[var(--color-secondary)]">
          Athenas
        </h1>
      </div>
    </nav>
  );
}

export default Navbar;

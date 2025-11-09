function FooterPage() {
  return (
    <footer className="flex bg-[var(--color-bg-alt)] text-[var(--color-secondary)] items-center justify-center py-6 text-sm">
      <div className="flex flex-wrap items-center justify-center gap-2 text-white">
        <p className="m-2">Feito por</p>

        <strong className="m-2">
          <a
            href="https://portfolio-bj-mandim.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="italic text-[var(--color-primary)] hover:text-[var(--color-secondary-hover)] underline transition-colors duration-200"
          >
            Beatriz Mandim
          </a>
        </strong>

        <p className="m-2">© 2025 Atlética Athenas</p>
      </div>
    </footer>
  );
}

export default FooterPage;

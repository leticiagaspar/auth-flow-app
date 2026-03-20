export function Footer() {
  return (
    <footer className="bg-white py-16 px-8 border-t border-stone-100">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <p className="text-xs tracking-[0.3em] uppercase text-stone-400">
            © {new Date().getFullYear()} Allora Store
          </p>
        </div>

        <nav className="flex gap-8 text-xs tracking-[0.2em] uppercase text-stone-500">
          <a href="/" className="hover:text-[#D6453D] transition-colors">
            Privacidade
          </a>
          <a href="/" className="hover:text-[#D6453D] transition-colors">
            Termos
          </a>
          <a href="/" className="hover:text-[#D6453D] transition-colors">
            Instagram
          </a>
        </nav>
      </div>
    </footer>
  );
}

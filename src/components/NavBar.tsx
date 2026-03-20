import { Link } from "@tanstack/react-router";
import { ShoppingBag, User } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-10 w-full bg-[#FAF9F6]/80 backdrop-blur-md border-b">
      <div className="container mx-auto flex h-20 items-center justify-between px-8">
        <Link
          to="/"
          aria-label="Ir para a página inicial da Allora Store"
          className="group flex items-center gap-3"
        >
          <ShoppingBag className="h-5 w-5 text-[#D6453D] stroke-[1.5px]" />
          <span className="text-xl font-light tracking-[0.2em] uppercase text-stone-800">
            Allora <span className="font-semibold text-[#D6453D]">Store</span>
          </span>
        </Link>

        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-10"
        >
          <Link
            to="/login"
            className="flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-[#D6453D] transition-colors tracking-wide group"
          >
            <User className="h-4 w-4 stroke-[1.5px] group-hover:scale-110 transition-transform" />
            <span>Entrar</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

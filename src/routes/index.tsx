import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Headset, ShieldCheck, Truck } from "lucide-react";
import { Navbar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

const CATEGORIES = [
  "Eletrônicos",
  "Acessórios",
  "Decoração",
  "Beleza",
  "Perfumaria",
  "Esportes",
  "Moda",
];

const BENEFITS = [
  {
    id: "01",
    title: "Qualidade",
    description:
      "Marcas certificadas e curadoria humana rigorosa em cada detalhe.",
    icon: ShieldCheck,
  },
  {
    id: "02",
    title: "Logística",
    description:
      "Entrega tratada como prioridade, com rastreamento em tempo real.",
    icon: Truck,
  },
  {
    id: "03",
    title: "Suporte",
    description:
      "Atendimento humanizado para garantir uma experiência impecável.",
    icon: Headset,
  },
];

function RouteComponent() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-800 font-sans selection:bg-[#D6453D]/20">
      <Navbar />

      <main>
        <section className="relative overflow-hidden pt-16 pb-24 px-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#D6453D]/5 via-transparent to-transparent -z-10" />

          <div className="container max-w-6xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight leading-[1.1] text-stone-900 tracking-tighter">
              Um mundo de produtos, <br />
              <span className="italic font-serif font-normal text-[#D6453D]">
                em um só clique.
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-stone-500 text-base md:text-lg font-light leading-relaxed">
              De tecnologia de ponta a acessórios exclusivos. Explore uma
              curadoria feita para quem não abre mão da excelência.
            </p>

            <Link to="/dashboard/products">
              <Button
                size="lg"
                className="bg-[#D6453D] hover:bg-[#b53a33] text-white rounded-xl px-10 py-7 mt-4 text-sm tracking-[0.15em] uppercase font-medium shadow-xl shadow-[#D6453D]/20 transition-all hover:scale-105 active:scale-95"
              >
                Explorar Catálogo
              </Button>
            </Link>
          </div>
        </section>

        <nav
          aria-label="Categorias principais"
          className="py-6 border-y border-stone-200/60 bg-white/30 backdrop-blur-sm"
        >
          <div className="container mx-auto px-6">
            <ul className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
              {CATEGORIES.map((category, index) => (
                <li key={category} className="flex items-center gap-8">
                  <span className="text-[11px] md:text-xs font-medium tracking-[0.25em] uppercase text-stone-400 hover:text-[#D6453D] transition-colors cursor-pointer">
                    {category}
                  </span>
                  {index !== CATEGORIES.length - 1 && (
                    <div
                      className="w-1 h-1 rounded-full bg-stone-200"
                      aria-hidden="true"
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {BENEFITS.map((benefit) => (
                <Card
                  key={benefit.id}
                  className="group border-stone-100 bg-white shadow-sm hover:border-[#D6453D]/20 hover:shadow-md transition-all duration-300 rounded-[1.5rem]"
                >
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 bg-[#D6453D]/5 rounded-xl flex items-center justify-center text-[#D6453D] mb-4 group-hover:bg-[#D6453D] group-hover:text-white transition-all duration-300">
                      <benefit.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-stone-900 tracking-tight">
                      {benefit.id}. {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-stone-500 text-sm font-light leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

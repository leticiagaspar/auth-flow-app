import { useAuth } from "@/hooks/use-auth";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { loggedUser } = useAuth();

  return (
    <main className="flex-1 flex flex-col items-center justify-center pb-20 px-6 bg-[#FAF9F6]">
      <div className="space-y-2 text-center">
        <span className="text-[10px] tracking-[0.4em] uppercase text-[#D6453D] font-bold">
          Conta Autenticada
        </span>
        <h1 className="text-5xl md:text-6xl font-extralight tracking-tighter text-stone-900">
          Olá,{" "}
          <span className="italic font-serif text-[#D6453D]">
            {loggedUser?.firstName}
          </span>{" "}
          .
        </h1>
      </div>
    </main>
  );
}

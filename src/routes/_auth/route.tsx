import {
  createFileRoute,
  Link,
  Outlet,
  redirect,
} from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { isAuthenticated } from "@/lib/auth";

export const Route = createFileRoute("/_auth")({
  beforeLoad: () => {
    if (isAuthenticated()) {
      throw redirect({ to: "/dashboard" });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link to="/" className="group flex items-center gap-3">
            <ShoppingBag className="h-5 w-5 text-[#D6453D] stroke-[1.5px]" />
            <span className="text-xl font-light tracking-[0.2em] uppercase text-stone-800">
              Allora <span className="font-semibold text-[#D6453D]">Store</span>
            </span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <Outlet />
          </div>
        </div>
      </div>

      <div className="relative hidden lg:flex items-center justify-center bg-gradient-to-br from-[#FAF9F6] via-[#fceae8] to-[#D6453D]/10 overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#D6453D]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-white rounded-full blur-[80px]" />

        <div className="relative z-10 animate-in fade-in zoom-in duration-700">
          <div className="p-10 rounded-[2.5rem] bg-white shadow-2xl shadow-[#D6453D]/5 border border-stone-100">
            <ShoppingBag className="h-24 w-24 text-[#D6453D] stroke-[1px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

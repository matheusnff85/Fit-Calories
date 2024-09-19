import { Apple } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-zinc-100 flex justify-between mb-2 h-16 w-full ps-6 shadow-sm shadow-zinc-400 items-center">
      <div className="flex gap-3 justify-evenly items-center">
        <Apple size={28} fill="#F8333C" />
        <h1 className="text-2xl font-bold">FitCalories</h1>
      </div>
    </header>
  );
}

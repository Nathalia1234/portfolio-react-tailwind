import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="grid gap-4 text-center">
      <h2 className="text-2xl font-semibold text-red-400">
        Página não encontrada
      </h2>
      <Link to="/" className="text-emerald-400 underline">
        Voltar ao início
      </Link>
    </div>
  );
}

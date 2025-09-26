import { Link, NavLink, Outlet } from "react-router-dom";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Layout() {
  const base = "px-3 py-2 rounded-md transition";
  const active =
    "text-emerald-400 font-semibold border-b-2 border-emerald-400 pb-1";

  const idle = "text-neutral-300 hover:text-white";

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-neutral-950 border-b border-neutral-400">
        <nav className="mx-auto max-w-5xl flex items-center justify-between p-4">
          <Link to="/" className="text-lg font-bold text-emerald-400">
            Nathalia Ohana
          </Link>
          <div className="flex gap-2">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${base} ${isActive ? active : idle}`
              }
            >
              Início
            </NavLink>
            <NavLink
              to="/projetos"
              className={({ isActive }) =>
                `${base} ${isActive ? active : idle}`
              }
            >
              Projetos
            </NavLink>
            <NavLink
              to="/sobre"
              className={({ isActive }) =>
                `${base} ${isActive ? active : idle}`
              }
            >
              Sobre
            </NavLink>
          </div>
        </nav>
      </header>

      {/* Conteúdo */}
      <main className="flex-1">
        <div className="mx-auto max-w-5xl p-6">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-950 border-t border-neutral-400">
        <div className="mx-auto max-w-5xl p-4 text-sm text-neutral-400 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span>© {new Date().getFullYear()} Nathalia Ohana</span>
          <div className="flex gap-6">
            <a
              href="mailto:nathe557@gmail.com?subject=Contato%20do%20Portfólio&body=Olá%20Nathalia,%20gostaria%20de%20falar%20sobre..."
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 flex items-center gap-1"
            >
              <Mail size={18} /> Email
            </a>
            <a
              href="https://github.com/Nathalia1234"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 flex items-center gap-1"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nathalia-ohana-barigchum-leite/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 flex items-center gap-1"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

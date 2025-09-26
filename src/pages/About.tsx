import skills from "../data/skills";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Sobre() {
  return (
    <section className="min-h-[calc(100vh-180px)] flex items-center justify-center px-6">
      <div className="max-w-5xl grid md:grid-cols-2 gap-10 items-center">
        {/* Foto */}
        <div className="flex justify-center">
          <img
            src="/perfil.png"
            alt="Foto de Nathalia"
            className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-emerald-500 shadow-lg"
          />
        </div>

        {/* Texto + Skills */}
        <div>
          {/* Título */}
          <h2 className="text-3xl font-bold text-emerald-400 mb-4 text-center md:text-left">
            Sobre mim
          </h2>
          {/* Linha gradiente abaixo do título */}
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mx-auto md:mx-0 mb-6"></div>
          {/* Descrição */}
          <p className="text-neutral-300 leading-relaxed text-justify">
            Sou apaixonada por dados, tecnologia e inovação. Minha trajetória
            envolve análise de dados, Business Intelligence e projetos
            acadêmicos, sempre com o objetivo de transformar desafios em
            soluções criativas que gerem valor.
          </p>

          {/* Subtítulo das Skills */}
          <h3 className="text-xl font-semibold text-emerald-400 mt-8 mb-4 text-center md:text-left">
            Minhas principais tecnologias:
          </h3>

          {/* Skills */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {skills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <button
                  key={i}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium shadow-md transition hover:scale-105 ${skill.color}`}
                >
                  <Icon size={14} /> {skill.name}
                </button>
              );
            })}
          </div>
          {/* Contato */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-emerald-400 mt-8 mb-4 text-center md:text-left">
              Vamos conversar?
            </h3>
            <p className="text-gray-300 mb-4">
              Estou disponível para novos projetos, colaborações e
              oportunidades.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:nathe557@gmail.com?subject=Contato%20do%20Portfólio&body=Olá%20Nathalia,%20gostaria%20de%20falar%20sobre..."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 transition"
              >
                <MdEmail size={18} /> Email
              </a>
              <a
                href="https://github.com/Nathalia1234"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 transition"
              >
                <FaGithub size={18} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/nathalia-ohana-barigchum-leite/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 transition"
              >
                <FaLinkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

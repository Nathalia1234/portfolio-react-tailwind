import projects from "../data/projects";

export default function Projects() {
  return (
    <section className="grid gap-6">
      <h2 className="text-2xl font-semibold text-emerald-400">Projetos</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((proj) => (
          <div key={proj.id} className="">
            {/* Imagem */}
            <img
              src={proj.image}
              alt={proj.title}
              className="rounded-md mb-4 border border-neutral-800"
            />

            {/* Título */}
            <h3 className="text-lg font-semibold text-white">{proj.title}</h3>

            {/* Descrição */}
            <p className="text-sm text-neutral-400 mt-1">{proj.description}</p>

            {/* Tecnologias */}
            <div className="flex flex-wrap gap-2 mt-3">
              {proj.techs.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs font-medium rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Botões */}
            <div className="flex gap-2 mt-4">
              <a
                href={proj.demo}
                target="_blank"
                className="px-3 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-black rounded-md text-sm font-medium transition"
              >
                Ver Projeto
              </a>
              <a
                href={proj.code}
                target="_blank"
                className="px-3 py-1.5 bg-neutral-700 hover:bg-neutral-600 text-white rounded-md text-sm font-medium transition"
              >
                Código
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

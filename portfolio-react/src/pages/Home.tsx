export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-180px)] gap-6">
      <h1 className="text-4xl font-bold text-emerald-400">
        Olá, eu sou a <span className="text-white">Nathalia</span> 👋
      </h1>

      <p className="text-neutral-300 max-w-xl mx-auto">
        Engenheira de Computação em formação e Analista de Dados. Tenho
        experiência em Business Intelligence, Visualização de Dados e
        desenvolvimento de projetos web. Busco constantemente evoluir minhas
        habilidades e aplicar tecnologia para resolver desafios de forma
        inovadora.
      </p>

      <div className="flex gap-4 mt-6">
        <a
          href="/projetos"
          className="px-5 py-2 bg-emerald-500 hover:bg-emerald-600 text-black rounded-md font-medium transition"
        >
          Ver Projetos
        </a>
      </div>
    </section>
  );
}

import GeradorTicket from "../assets/Gerador_Ticket.png";
import CalculadoraIdade from "../assets/Calculadora_Idade.png";
import SiteReceitas from "../assets/Site_Receitas.png";
import DashboardProjetos from "../assets/Dash_Projetos.png";
import DashboardRH from "../assets/Dash_RH.png";

const projects = [
  {
    id: 1,
    title: "Gerador de Tickets",
    description: "Formulário que gera tickets para eventos.",
    image: GeradorTicket,
    demo: "https://ticket-generator.nathaliaohana.dev/",
    code: "https://github.com/Nathalia1234/ticket-generator",
    techs: ["HTML5", "CSS3", "JavaScript (ES6)"],
  },
  {
    id: 2,
    title: "Calculadora de Idade",
    description:
      "Projeto em React que calcula idade em anos, meses e dias a partir da data de nascimento.",
    image: CalculadoraIdade,
    demo: "https://age-calculator.nathaliaohana.dev/",
    code: "https://github.com/Nathalia1234/age-calculator-react-ts/tree/main/age-calc-rhf",
    techs: ["React", "TypeScript", "React Hook Form", "Vite", "TailwindCSS"],
  },
  {
    id: 3,
    title: "Site de Receitas",
    description:
      "Aplicação web responsiva que apresenta receitas em cards dinâmicos, com layout organizado e navegação intuitiva",
    image: SiteReceitas,
    demo: "https://site-receitas-theta.vercel.app/",
    code: "https://github.com/Nathalia1234/site-receitas",
    techs: ["HTML5", "CSS3"],
  },
  {
    id: 4,
    title: "Dashboard Estratégico de Projetos",
    description:
      "Este painel foi criado para ajudar na gestão de projetos, mostrando de forma clara o andamento de cada um. ",
    image: DashboardProjetos,
    demo: "https://app.powerbi.com/view?r=eyJrIjoiNDJiMzFmYTEtOTJiMy00NTBlLTk1ODQtODJjYjg2MGE0OTA0IiwidCI6IjA2MjFmNmIwLTFhNDAtNGU3Zi05ZGMwLTAwMjMwZDRlYzFiOCJ9",
    code: "https://github.com/Nathalia1234/Atividade_Pratica_Dashboards_Power_BI",
    techs: ["EXCEL", "POWER BI"],
  },
  {
    id: 5,
    title: "Dashboard Estratégico para Gestão de Recursos Humanos",
    description:
      "Este painel foi desenvolvido para auxiliar líderes e gestores da área de Recursos Humanos na análise dos dados dos colaboradores. ",
    image: DashboardRH,
    demo: "https://app.powerbi.com/view?r=eyJrIjoiNjFmZWFhOGMtODY3OS00MThjLWJhNjYtZjhlZGY5MDViZGJmIiwidCI6IjA2MjFmNmIwLTFhNDAtNGU3Zi05ZGMwLTAwMjMwZDRlYzFiOCJ9",
    code: "https://github.com/Nathalia1234/Atividade_Pratica_Dashboards_Power_BI",
    techs: ["EXCEL", "POWER BI"],
  },
];

export default projects;

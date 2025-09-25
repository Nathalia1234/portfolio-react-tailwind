import { Code2, FileCode, Palette, Database, BarChart3 } from "lucide-react";

const skills = [
  {
    name: "HTML",
    icon: FileCode,
    color:
      "bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600",
  },
  {
    name: "CSS",
    icon: Palette,
    color:
      "bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600",
  },
  {
    name: "React",
    icon: Code2,
    color:
      "bg-gradient-to-r from-emerald-400 to-cyan-500 text-black hover:from-emerald-500 hover:to-cyan-600",
  },
  {
    name: "TypeScript",
    icon: Code2,
    color:
      "bg-gradient-to-r from-blue-600 to-blue-400 text-white hover:from-blue-700 hover:to-blue-500",
  },
  {
    name: "TailwindCSS",
    icon: Palette,
    color:
      "bg-gradient-to-r from-cyan-400 to-sky-500 text-white hover:from-cyan-500 hover:to-sky-600",
  },
  {
    name: "Power BI",
    icon: BarChart3,
    color:
      "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700",
  },
  {
    name: "SQL",
    icon: Database,
    color:
      "bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600",
  },
];

export default skills;

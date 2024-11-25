import CodeTutor from "./code_tutor/CodeTutor.webp";
import GamesView from "./games_view/GamesView.webp";
import ImageEditor from "./image_editor/ImageEditor.webp";

const items = (t) => [
  {
    id: 1,
    src: ImageEditor,
    title: "Image Editor",
    web: "https://image-editor-three-wine.vercel.app/",
    repo: "https://github.com/LautaroBarrios/ImageEditor",
    description: t("projects.image_editor.description"),
    technologies: `${t(
      "projects.technologies.language"
    )}: Javascript.\n 𝗙𝗿𝗮𝗺𝗲𝘄𝗼𝗿𝗸𝘀: React, Redux, Tailwind CSS. \n ${t(
      "projects.technologies.database"
    )}: Sequelize, MySQL.\n ${t(
      "projects.technologies.tools"
    )}: HTML, CSS, Git, GitHub, Bitbucket, Node, Illustrator, Postman. \n ${t(
      "projects.technologies.agiles"
    )}: Scrum.`,
    details: null,
  },
  {
    id: 2,
    src: CodeTutor,
    title: "Code Tutor",
    web: "https://www.code-tutor.dev/",
    repo: null,
    description: t("projects.code_tutor.description"),
    technologies: `${t(
      "projects.technologies.language"
    )}: Javascript, SQL.\n 𝗙𝗿𝗮𝗺𝗲𝘄𝗼𝗿𝗸𝘀: React, Redux, Tailwind CSS. \n ${t(
      "projects.technologies.database"
    )}: Sequelize, MongoDB.\n ${t(
      "projects.technologies.tools"
    )}: HTML, CSS, Git, GitHub, Bitbucket, Node, Illustrator, Postman, Trello. \n ${t(
      "projects.technologies.agiles"
    )}: Scrum.`,
  },
  {
    id: 3,
    src: GamesView,
    title: "Games View",
    web: null,
    repo: "https://github.com/LautaroBarrios/GamesView",
    description: t("projects.games_view.description"),
    technologies: `${t(
      "projects.technologies.language"
    )}: Javascript, SQL.\n 𝗙𝗿𝗮𝗺𝗲𝘄𝗼𝗿𝗸𝘀: React, Redux, Tailwind CSS. \n ${t(
      "projects.technologies.database"
    )}: Sequelize, MySQL.\n ${t(
      "projects.technologies.tools"
    )}: HTML, CSS, Git, GitHub, Node, Illustrator, Postman.`,
    details: null,
  },
];

export default items;

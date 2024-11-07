import CodeTutor from "./code_tutor/CodeTutor_Landing.png";
import GamesView from "./games_view/GamesView_Landing.png";
import ImageEditor from "./image_editor/ImageEditor.png";

const items = (t) => [
  {
    id: 1,
    src: ImageEditor,
    title: "Image Editor",
    web: "https://image-editor-three-wine.vercel.app/",
    repo: "https://github.com/LautaroBarrios/ImageEditor",
    description: t("projects.image_editor.description"),
    technologies:
      "𝗟𝗲𝗻𝗴𝘂𝗮𝗷𝗲𝘀 𝗱𝗲 𝗣𝗿𝗼𝗴𝗿𝗮𝗺𝗮𝗰𝗶𝗼́𝗻: Javascript.\n 𝗙𝗿𝗮𝗺𝗲𝘄𝗼𝗿𝗸𝘀: React, Redux, Tailwind CSS. \n 𝗕𝗮𝘀𝗲 𝗱𝗲 𝗗𝗮𝘁𝗼𝘀: Sequelize, MySQL.\n 𝗛𝗲𝗿𝗿𝗮𝗺𝗶𝗲𝗻𝘁𝗮𝘀: HTML, CSS, Git, GitHub, Bitbucket, Node, Illustrator, Postman. \n 𝗔́𝗴𝗶𝗹𝗲𝘀: Scrum.",
    details: null,
  },
  {
    id: 2,
    src: CodeTutor,
    title: "Code Tutor",
    web: "https://www.code-tutor.dev/",
    repo: null,
    description: t("projects.code_tutor.description"),
    technologies:
      "𝗟𝗲𝗻𝗴𝘂𝗮𝗷𝗲𝘀 𝗱𝗲 𝗣𝗿𝗼𝗴𝗿𝗮𝗺𝗮𝗰𝗶𝗼́𝗻: Javascript, SQL.\n 𝗙𝗿𝗮𝗺𝗲𝘄𝗼𝗿𝗸𝘀: React, Redux, Tailwind CSS. \n 𝗕𝗮𝘀𝗲 𝗱𝗲 𝗗𝗮𝘁𝗼𝘀: Sequelize, MySQL.\n 𝗛𝗲𝗿𝗿𝗮𝗺𝗶𝗲𝗻𝘁𝗮𝘀: HTML, CSS, Git, GitHub, Bitbucket, Node, Illustrator, Postman, Trello. \n 𝗔́𝗴𝗶𝗹𝗲𝘀: Scrum.",
  },
  {
    id: 3,
    src: GamesView,
    title: "Games View",
    web: null,
    repo: "https://github.com/LautaroBarrios/GamesView",
    description: t("projects.games_view.description"),
    technologies:
      "𝗟𝗲𝗻𝗴𝘂𝗮𝗷𝗲𝘀 𝗱𝗲 𝗣𝗿𝗼𝗴𝗿𝗮𝗺𝗮𝗰𝗶𝗼́𝗻: Javascript, SQL.\n 𝗙𝗿𝗮𝗺𝗲𝘄𝗼𝗿𝗸𝘀: React, Redux, Tailwind CSS. \n 𝗕𝗮𝘀𝗲 𝗱𝗲 𝗗𝗮𝘁𝗼𝘀: Sequelize, MySQL.\n 𝗛𝗲𝗿𝗿𝗮𝗺𝗶𝗲𝗻𝘁𝗮𝘀: HTML, CSS, Git, GitHub, Node, Illustrator, Postman.",
    details: null,
  },
];

export default items;

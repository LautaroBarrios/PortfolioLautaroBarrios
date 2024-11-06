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
    details: null,
  },
  {
    id: 2,
    src: CodeTutor,
    title: "Code Tutor",
    web: "https://www.code-tutor.dev/",
    repo: null,
    description: t("projects.code_tutor.description"),
  },
  {
    id: 3,
    src: GamesView,
    title: "Games View",
    web: null,
    repo: "https://github.com/LautaroBarrios/GamesView",
    description: t("projects.games_view.description"),
    details: null,
  },
];

export default items;

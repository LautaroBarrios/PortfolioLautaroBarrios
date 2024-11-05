import CodeTutor from "./code_tutor/CodeTutor_Landing.png";
import GamesView from "./games_view/GamesView_Landing.png";
import ImageEditor from "./image_editor/ImageEditor.png";

const items = [
  {
    id: 1,
    src: ImageEditor,
    title: "Image Editor",
    web: "https://image-editor-three-wine.vercel.app/",
    repo: "https://github.com/LautaroBarrios/ImageEditor",
    description:
      "Este diseñador sirve para base de otros proyectos. Permite agregar un fondo y elementos (imágenes), los cuales pueden ser redimensionados, moverse por todo el contenedor, duplicarlos, fijarlos, eliminarlos. Además de agregar textos con tipografías distintas y colores, además de poder aplicar las mismas características que los elementos. Pudiendo descargar el contenido creado en una imagen PNG.",
    details: null,
  },
  {
    id: 2,
    src: CodeTutor,
    title: "Code Tutor",
    web: "https://www.code-tutor.dev/",
    repo: null,
    description:
      "Code-Tutor es una plataforma en línea orientada a gente de Latinoamérica, cuya función es conectar usuarios con tutores para proyectos de programación de manera independiente.",
    details:
      "Ofrece una serie de herramientas integradas, desde los calendarios y control de agenda para el orden del tiempo personal hasta el chat para comunicarse directamente con el tutor, pasando por el control del tiempo de sesión, recordatorios de tiempo, uso de salas en plataformas conocidas y amplia disponibilidad de tutores en diferentes zonas horarias. Además, facilitamos la contratación de tutores de programación de forma independiente, brindando información detallada de los tutores en los perfiles, reviews y testimonios de otros usuarios.",
  },
  {
    id: 3,
    src: GamesView,
    title: "Games View",
    web: null,
    repo: "https://github.com/LautaroBarrios/GamesView",
    description:
      "GamesView es una plataforma con un diseño basado en las famosas Arcades, donde podes consultar datos de tus juegos favoritos, descubrir nuevos, agregar nuevos, aplicar múltiples filtros para ordenamiento y búsqueda de acuerdo a tus intereses.",
    details: null,
  },
];

export default items;

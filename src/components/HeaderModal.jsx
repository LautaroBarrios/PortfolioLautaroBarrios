import { Close } from "../icons";

const HeaderModal = ({ title, buttonClose, closeModal }) => {
  return (
    <header className="flex flex-row items-center justify-between pt-1 px-1">
      <h2 className="text-xl font-bold text-[#f7f9fa]">{title}</h2>
      <button
        type="button"
        onClick={closeModal}
        title={buttonClose}
        className="bg-[#f7f9fa] active:scale-105 p-0.5 rounded-md transition-all"
      >
        <Close />
      </button>
    </header>
  );
};

export default HeaderModal;

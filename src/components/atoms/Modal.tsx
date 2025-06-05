interface ModalProps {
  imageSrc: string;
  onClose: () => void;
}

const Modal = ({ imageSrc, onClose }: ModalProps) => {
  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative"
        onClick={(e) => e.stopPropagation()} // avoid closing modal when clicking inside
      >
        <button
          className="absolute top-3 right-3 z-10 bg-black/50 rounded-full p-1.5 text-white text-xl shadow-[0_0_5px_white] hover:bg-black/70 transition"
          onClick={onClose}
        >
          ✕
        </button>
        <img
          src={imageSrc}
          alt="Zoom"
          className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg transition duration-300"
        />
      </div>
    </div>
  );
};

export default Modal;

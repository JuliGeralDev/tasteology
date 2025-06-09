interface ModalProps {
  imageSrc?: string;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal = ({ imageSrc, onClose, children }: ModalProps) => {
  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative max-w-[500px] overflow-auto bg-black p-6 rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 z-10 bg-black/50 rounded-full p-1.5 text-white text-xl shadow-[0_0_5px_white] hover:bg-black/70 transition"
          onClick={onClose}
        >
          ✕
        </button>

        {children ? (
          children
        ) : imageSrc ? (
          <img
            src={imageSrc}
            alt="Zoom"
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg transition duration-300"
          />
        ) : null}
      </div>
    </div>
  );
};

export default Modal;

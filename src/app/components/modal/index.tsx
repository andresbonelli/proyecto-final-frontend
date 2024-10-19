import X from "../icons/X";

export default function Modal({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: Function;
  children?: React.ReactNode;
}) {
  return (
    // Backdrop
    <div
      onClick={() => onClose()}
      className={`z-50 fixed w-screen h-screen inset-0 flex justify-center items-center transition-colors ${
        isOpen ? "visible bg-black/20" : "invisible"
      }`}
    >
      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative bg-white flex flex-col justify-between place-items-center gap-3 min-w-80 shadow p-4 transition-all ${
          isOpen ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
      >
        <button onClick={() => onClose()} className="absolute top-2 right-2">
          <X size={25} fill="gray" />
        </button>
        {children}
      </div>
    </div>
  );
}

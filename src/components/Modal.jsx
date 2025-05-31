const Modal = ({ isModelOpen, setIsModelOpen, children }) => {
  if (!isModelOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-gray-100 p-6 rounded-2xl shadow-lg w-full max-w-md relative animate-fadeIn">
        <button
          onClick={() => setIsModelOpen(false)}
          className="absolute top-10 right-10 text-gray-500 hover:text-red-600 text-5xl font-bold transition"
          aria-label="Close"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

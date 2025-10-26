import React from "react";
import { CircleX } from "lucide-react";

interface ModalProps {
  isModalOpen: boolean;
  modalContent: React.ReactNode;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  isModalOpen,
  modalContent,
  onClose,
}) => {
  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isModalOpen) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isModalOpen, onClose]);

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md relative animate-fadeIn">
        <button
          onClick={onClose}
          className=" text-white px-2 py-2 rounded-lg absolute top-2 right-2"
        >
          <CircleX className="text-black" />
        </button>
        <div>{modalContent}</div>
      </div>
    </div>
  );
};

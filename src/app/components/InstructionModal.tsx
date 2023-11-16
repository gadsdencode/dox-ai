import React from "react";
import { AiFillGithub } from "react-icons/ai";

interface InstructionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InstructionModal: React.FC<InstructionModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-gray-300 p-5 z-50 rounded-lg shadow-lg relative w-8/12 md:w-5/12">
        <button
          onClick={onClose}
          className="absolute right-2 text-3xl top-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Instructions</h2>
        <p>
          Dox-AI uses an RAG pattern with{" "}
          <a href="https://pinecone.io" target="_blank" className="text-gray">
            Pinecone
            </a>{" "} vector database to enable indexing, querying, and creating content from large volumes of
            text.
            </p>
            <p>
        </p>
        <br />
        <p>
          Segments relevant to the content created by Dox-AI will be highlighted.
        </p>
        <br />
        <p>
          You can clear the index by clicking the &quot;Clear Index&quot; button
          in the context panel.
        </p>
      </div>
      <div
        className="absolute inset-0 bg-black z-20 opacity-50"
        onClick={onClose}
      ></div>
    </div>
  );
};

export default InstructionModal;

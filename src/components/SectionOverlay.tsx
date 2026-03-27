import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface SectionOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const SectionOverlay = ({ isOpen, onClose, title, children }: SectionOverlayProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen && !visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-700 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-brown-dark/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Content */}
      <div className={`relative h-full overflow-y-auto transition-all duration-700 ${
        visible ? 'scale-100' : 'scale-95'
      }`}>
        <div className="min-h-full flex items-start justify-center p-4 md:p-8 pt-16">
          <div className="scroll-panel w-full max-w-4xl p-6 md:p-10 relative">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-brown/20 flex items-center justify-center hover:bg-brown/40 transition-colors text-brown-dark"
            >
              <X size={20} />
            </button>

            {/* Title */}
            <h2 className="font-heading text-2xl md:text-4xl text-brown-dark mb-8 text-center">
              {title}
            </h2>

            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOverlay;

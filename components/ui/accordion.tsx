"use client";

import { useState, createContext, useContext } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface AccordionContextType {
  openTitle: string | null;
  setOpenTitle: (title: string | null) => void;
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function AccordionItem({
  title,
  children,
  defaultOpen = false,
}: AccordionItemProps) {
  const context = useContext(AccordionContext);

  // If not inside an Accordion, fallback to internal state
  const [internalIsOpen, setInternalIsOpen] = useState(defaultOpen);

  const isOpen = context ? context.openTitle === title : internalIsOpen;

  const toggle = () => {
    if (context) {
      context.setOpenTitle(isOpen ? null : title);
    } else {
      setInternalIsOpen(!internalIsOpen);
    }
  };

  return (
    <div className="border-t border-purple-200 last:border-b">
      <button
        type="button"
        onClick={toggle}
        className="w-full flex justify-between items-center py-4 cursor-pointer bg-transparent border-0 text-left hover:text-purple-600 transition-colors"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium m-0">{title}</h3>
        {isOpen ? (
          <FaChevronUp className="text-black" />
        ) : (
          <FaChevronDown className="text-black" />
        )}
      </button>
      {isOpen && <div className="pb-4 animate-in fade-in slide-in-from-top-1 duration-200">{children}</div>}
    </div>
  );
}

interface AccordionProps {
  children: React.ReactNode;
  defaultOpenTitle?: string;
}

export function Accordion({ children, defaultOpenTitle }: AccordionProps) {
  const [openTitle, setOpenTitle] = useState<string | null>(defaultOpenTitle || null);

  return (
    <AccordionContext.Provider value={{ openTitle, setOpenTitle }}>
      <div className="space-y-0">{children}</div>
    </AccordionContext.Provider>
  );
}

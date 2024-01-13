import React, { useState } from "react";
import ArrowIcon from "../Icons/ArrowIcon";
import { IDocument } from "../SelectDocuments";

interface IAccordionItem {
  category: string;
  documents: IDocument[];
}

interface IAccordionProps {
  onDocumentSelect: (content: string, id: number) => void;
  accordionItems: IAccordionItem[];
}

const Accordion: React.FC<IAccordionProps> = ({
  onDocumentSelect,
  accordionItems,
}) => {
  const [openAccordion, setOpenAccordion] = useState<{
    index: number;
    contentIndex: number | null;
  }>({
    index: -1,
    contentIndex: null,
  });

  const handleAccordionClick = (index: number, contentIndex: number | null) => {
    if (openAccordion.index === index) {
      setOpenAccordion({ index: -1, contentIndex: null });
      return;
    }
    setOpenAccordion({ index, contentIndex });
  };

  return (
    <div id="accordion-collapse" data-accordion="collapse">
      {accordionItems.map((item, index) => {
        const lastItem = index === accordionItems.length - 1;
        return (
          <React.Fragment key={index}>
            <h2 id={`accordion-collapse-heading-${index}`}>
              <button
                type="button"
                className={`flex 
                items-center 
                justify-between w-full p-5 font-medium 
                rtl:text-right bg-gray-100 text-gray-500
                 border border-gray-200 rounded-sm 
                 focus:ring-gray-100 focus:border-gray-400 
                 focus:border-x-0 focus:text-gray-900 gap-3
                 rounded-t-md
                 ${lastItem ? "rounded-b-md" : ""}
                 `}
                onClick={() => handleAccordionClick(index, null)}
                aria-expanded={openAccordion.index === index}
                aria-controls={`accordion-collapse-body-${index}`}
              >
                <span>{item.category}</span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 rotate-${
                    openAccordion.index === index ? "0" : "180"
                  } shrink-0`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id={`accordion-collapse-body-${index}`}
              className={`p-5 pr-4 bg-white rounded-b-md border-b-0 ${
                openAccordion.index === index ? "flex flex-col gap-4" : "hidden"
              }`}
              aria-labelledby={`accordion-collapse-heading-${index}`}
            >
              {item.documents.map((doc, contentIndex) => {
                return (
                  <div
                    key={contentIndex}
                    className={`flex justify-between items-center  `}
                  >
                    <p className="mb-2 text-gray-900 text-md font-semibold">
                      {doc.name}
                    </p>
                    <button onClick={() => onDocumentSelect(doc.name, doc.id)}>
                      <ArrowIcon />
                    </button>
                  </div>
                );
              })}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Accordion;

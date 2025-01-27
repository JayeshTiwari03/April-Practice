import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import "./Accordion.css";

const faq = [
  {
    title: "What is ShayDay?",
    body: "ShayDay keeps you wake and happy.",
  },
  {
    title: "How does it work?",
    body: "ShayDay works by enligtening your mind",
  },
  {
    title: "Is it free?",
    body: "ShayDay is free, for now.",
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="accordion-container">
      {faq.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          body={item.body}
          isOpen={index === openIndex}
          setIsOpen={() =>
            index === openIndex ? setOpenIndex(null) : setOpenIndex(index)
          }
        />
      ))}
    </div>
  );
};

export default Accordion;

import React from "react";
import "./Accordion.css";

const AccordionItem = ({ key, title, body, isOpen, setIsOpen }) => {
  return (
    <div className='accordion' key={key}>
      <div
        className="accordion-title"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <span>{title}</span>
      </div>
      {isOpen && <div className="accordion-body">{body}</div>}
    </div>
  );
};

export default AccordionItem;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className="collapse-container">
      <div className="collapse-header" onClick={handleToggle}>
        <h2 class="title">{title}</h2>
        <div class ="chevron"><FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} /></div>
      </div>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
};

export default Collapse;
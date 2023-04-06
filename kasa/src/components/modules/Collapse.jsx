import React, { useState } from "react";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <h2>{title}</h2>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
}

export default Collapse;
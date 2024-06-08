import { useState } from "react";

function AccordionItem({ num, title, text }) {
    const [isOpen, setIsOpen] = useState(false);

    function handelToggle() {
        setIsOpen(!isOpen);
    }

    return (
        <div className={`item ${isOpen ? "open" : ""}`} onClick={handelToggle}>
            <p className="number">{num < 9 ? `0${num + 1}` : num}</p>
            <p className="title">{title}</p>
            <p className="icon">{isOpen ? "-" : "+"}</p>
            {isOpen && <div className="content-box">{text}</div>}
        </div>
    );
}

export default AccordionItem;
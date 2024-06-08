
function AccordionItem({ num, title, curOpen, onOpen, children }) {
    
    const isOpen = num === curOpen;

    function handelToggle() {
        onOpen(isOpen ? null : num);
    }

    return (
        <div className={`item ${isOpen ? "open" : ""}`} onClick={handelToggle}>
            <p className="number">{num < 9 ? `0${num + 1}` : num}</p>
            <p className="title">{title}</p>
            <p className="icon">{isOpen ? "-" : "+"}</p>
            {isOpen && <div className="content-box">{children}</div>}
        </div>
    );
}

export default AccordionItem;
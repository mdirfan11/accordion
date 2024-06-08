import AccordionItem from "./AccordionItem";

function Accordion({ data }) {
    return (
        <div className="accordion">
            {data.map((el, i) => <AccordionItem num={i} title={el.title} text={el.text} key={i+1}/>)}
        </div>
    );
}

export default Accordion;
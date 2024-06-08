import { useState } from "react";
import AccordionItem from "./AccordionItem";

function Accordion({ data }) {

    const [curOpen, setCurOpen] = useState(null);

    return (
        <div className="accordion">
            {data.map((el, i) => <AccordionItem curOpen={curOpen} onOpen={setCurOpen} num={i} title={el.title} key={i+1}>{el.text}</AccordionItem>)}
        </div>
    );
}

export default Accordion;
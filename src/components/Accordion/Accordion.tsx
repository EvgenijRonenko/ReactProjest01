import React from "react";

function Accordion () {
    console.log('Accordion rendering');
    return <div>
        <AccordionTitle title={'This is accordion title1'}/>
        <AccordionTitle title={'This is accordion title2'}/>
        <AccordionBody />
    </div>
}

function AccordionTitle (props: any) {
    console.log('AccordionTitle rendering');
    return  <h3>{ props.title }</h3>

}

function AccordionBody () {
    console.log('AccordionBody rendering');
    return <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>

}

export default Accordion;

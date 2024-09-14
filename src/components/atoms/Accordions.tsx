import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../../components/accordion.tsx"

  type Accordion = {
    question: string,
    answer: string
  }
const Accordions = ({question, answer}: Accordion) => {
  return (
    <div>
      <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className='text-left'>{question}</AccordionTrigger>
                <AccordionContent className=' text-textLight dark:text-dark-textLight font-light'>
                  {answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
    </div>
  )
}

export default Accordions

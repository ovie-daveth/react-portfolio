import React, { useEffect, useRef } from 'react'
import { useAutoScroll } from '../../hooks/autoScroll.tsx';
import TestimonialCard from './TestimonialCard.tsx';
import useCardInView from '../../lib/useCardInView.ts';
import useTypingEffect from '../../lib/TypingText.tsx';
import TypingText from '../../lib/TypingText.tsx';

const Testimonial = () => {

const scrollRef = useAutoScroll(400, 8000);



  return (
    <div className='container_all'>
        <div>
        <TypingText text='Testimonial' className='header' />
            <div ref={scrollRef} className='overflow-x-scroll scroll mt-16' >
                <div className='flex items-start gap-3 w-fit'>
                    {
                    [1, 2, 3, 4, 5,6,7,8].map((_, i) => (
                       <TestimonialCard key={i} width='w-[400px] h-full' />
                    ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial
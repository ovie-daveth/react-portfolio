import React, { useEffect, useRef } from 'react'
import { useAutoScroll } from '../../hooks/autoScroll.tsx';
import TestimonialCard from './TestimonialCard.tsx';

const Testimonial = () => {

const scrollRef = useAutoScroll(400, 8000);

  return (
    <div className='container'>
        <div>
            <h1 className='header'>Testimonial</h1>
            <div ref={scrollRef} className='overflow-x-scroll scroll mt-16' >
                <div className='flex items-start gap-3 w-fit'>
                    {
                    [1, 2, 3, 4, 5,6,7,8].map((_, i) => (
                       <TestimonialCard key={i} width='w-[400px]' />
                    ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial
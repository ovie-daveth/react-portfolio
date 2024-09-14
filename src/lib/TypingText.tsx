import React, { useEffect, useState } from 'react'
import useCardInView from './useCardInView.ts';
import Typewriter from 'react-typewriter-effect';

type Props = {
  text: string,
  className: string
}

const TypingText = ({text, className}: Props) => {

  const { ref: CardRef, inView: CardInView } = useCardInView();
  const [shouldType, setShouldType] = useState(false);

    // Monitor when the element comes into view
    useEffect(() => {
      if (CardInView) {
        setShouldType(true); // Trigger typing when in view
      } else{
        setShouldType(false)
      }
    }, [CardInView]);
  return (
    <h1 ref={CardRef} className={className}>
       {shouldType && (
        <Typewriter
          startDelay={100}
          cursorColor="#3F3D56"
          text={text}
          multiTextDelay={1000}
          typeSpeed={100}
          scrollArea={window}
        />
      )}
    </h1>
  )
}

export default TypingText
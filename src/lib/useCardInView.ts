import { useInView } from "react-intersection-observer";

const useCardInView = (options = { triggerOnce: false, threshold: 0.05 }) => {
  const { ref, inView } = useInView(options);
  return { ref, inView };
};

export default useCardInView;

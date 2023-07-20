import { useEffect, useState, useRef } from 'react';

export function useHeadsObserver({ isLoaded = true }: { isLoaded: boolean }) {
  const observer = useRef<IntersectionObserver>();
  const [activeId, setActiveId] = useState('');

  const handleObsever = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: any) => {
      if (entry?.isIntersecting) {
        setActiveId(entry.target.id);
      }
    });
  };
  useEffect(() => {
    if (isLoaded) {
      observer.current = new IntersectionObserver(handleObsever);

      const elements = document.querySelectorAll('h4');

      elements.forEach((elem) => observer.current?.observe(elem));
      return () => {
        observer.current?.disconnect();
      };
    }
  }, [isLoaded]);

  return { activeId };
}

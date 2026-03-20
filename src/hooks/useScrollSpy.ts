'use client';

import { useEffect, useState } from 'react';

export function useScrollSpy(ids: string[], offset = 100) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const listener = () => {
      const scroll = window.scrollY;

      const activeSection = ids.find((id) => {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          return scroll >= offsetTop - offset && scroll < offsetTop + offsetHeight - offset;
        }
        return false;
      });

      if (activeSection && activeSection !== activeId) {
        setActiveId(activeSection);
        window.history.replaceState(null, '', `#${activeSection}`);
      } else if (scroll < offset) {
        setActiveId('');
        window.history.replaceState(null, '', window.location.pathname);
      }
    };

    window.addEventListener('scroll', listener);
    return () => window.removeEventListener('scroll', listener);
  }, [ids, offset, activeId]);

  return activeId;
}

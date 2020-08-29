import { useRef, useCallback } from 'react';

function useInfiniteScrolling({ callback, isLoading, hasMore }) {
  const observer = useRef();
  return useCallback((node) => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        callback();
      }
    });
    if (node) {
      observer.current.observe(node);
    }
  }, [isLoading, hasMore, callback]);
}

export { useInfiniteScrolling };

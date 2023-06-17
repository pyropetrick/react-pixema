import { RefObject, useEffect } from "react";


export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  callback: () => void,
  mouseEvent: "mousedown" | "mouseup" = "mousedown",
): void {

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener(mouseEvent, handleClick);

    return () => {
      document.removeEventListener(mouseEvent, handleClick);
    };
  }, [ref, callback, mouseEvent]);
}

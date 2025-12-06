import { useEffect } from "react";

/**
 * useContentProtection
 * Megakadályozza a szöveg kijelölését, a jobb egérgombos menüt, és a képek húzását.
 * Használható Next.js App és Page Routerrel is.
 */
export function useContentProtection() {
  useEffect(() => {
    // Szöveg kijelölésének tiltása (CSS)
    const style = document.createElement("style");
    style.innerHTML = `
      body {
        -webkit-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        user-select: none !important;
      }
    `;
    document.head.appendChild(style);

    // Jobb egérgomb tiltása (JS)
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);

    // Cleanup
    return () => {
      document.head.removeChild(style);
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  // Kép húzásának tiltása: propok <img> elemekhez
  const imageProtectionProps: React.ImgHTMLAttributes<HTMLImageElement> = {
    draggable: false,
    onDragStart: (e) => e.preventDefault(),
    style: { userSelect: "none", pointerEvents: "none" },
  };

  return { imageProtectionProps };
}

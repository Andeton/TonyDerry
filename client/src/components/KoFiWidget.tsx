import { useEffect } from "react";

const drawConfig = {
  type: "floating-chat",
  "floating-chat.donateButton.text": "Donate",
  "floating-chat.donateButton.background-color": "#00b9fe",
  "floating-chat.donateButton.text-color": "#fff",
};

export default function KoFiWidget() {
  useEffect(() => {
    // If the widget is already present, ensure it's drawn
    const win = window as any;
    if (win.kofiWidgetOverlay) {
      try {
        win.kofiWidgetOverlay.draw?.("tonyderry", drawConfig);
      } catch (e) {
        // ignore
      }
      return;
    }

    const script = document.createElement("script");
    script.src = "https://storage.ko-fi.com/cdn/scripts/overlay-widget.js";
    script.async = true;
    script.onload = () => {
      try {
        win.kofiWidgetOverlay.draw("tonyderry", drawConfig);
      } catch (e) {
        // ignore errors
      }
    };
    document.head.appendChild(script);

    return () => {
      // We intentionally don't remove the script to avoid breaking other widgets.
    };
  }, []);

  return null;
}

import { useEffect } from 'react';

const SCRIPT_ID = 'chatway';
const SCRIPT_SRC = 'https://cdn.chatway.app/widget.js?id=nd4fZpewNI3K';

/** Loads the Chatway floating chat widget once for the whole site. */
export function ChatwayWidget() {
  useEffect(() => {
    if (document.getElementById(SCRIPT_ID)) return;
    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.async = true;
    script.src = SCRIPT_SRC;
    document.body.appendChild(script);
  }, []);
  return null;
}
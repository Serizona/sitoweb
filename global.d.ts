import type { DetailedHTMLProps, HTMLAttributes, CSSProperties } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        poster?: string;
        alt?: string;
        "camera-controls"?: boolean;
        "auto-rotate"?: boolean;
        autoplay?: boolean;
        "interaction-prompt"?: string;
        "environment-image"?: string;
        exposure?: string | number;
        "shadow-intensity"?: string | number;
        "camera-orbit"?: string;
        "field-of-view"?: string;
        "min-field-of-view"?: string;
        "max-field-of-view"?: string;
        ar?: boolean;
        "ar-modes"?: string;
        style?: CSSProperties;
        suppressHydrationWarning?: boolean;
      };
    }
  }
}

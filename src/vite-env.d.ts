/// <reference types="vite/client" />

interface CalendlyWidget {
  initPopupWidget: (options: { url: string }) => void;
  initBadgeWidget: (options: { url: string; text: string; color: string; textColor: string; branding: boolean }) => void;
  initInlineWidget: (options: { url: string; parentElement: HTMLElement | null }) => void;
}

declare global {
  interface Window {
    Calendly?: CalendlyWidget;
  }
}

export {};

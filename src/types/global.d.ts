// Declarações de tipos globais para o Google Ads
declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => boolean;
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export {};

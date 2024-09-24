import Script from "next/script";

interface props {
  adsenseKey: string;
}

export default function Adsense({ adsenseKey }: props) {
  if (process.env.NODE_ENV !== "production") {
    return null;
  }
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${adsenseKey}`}
      crossOrigin="anonymous"
      strategy="lazyOnload"
    />
  );
}

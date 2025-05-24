import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import Script from "next/script";


export const metadata = {
  title: "World Time Convert - Online TimeZone Converter, Global Time Information & More",
  description: "World Time Converter: Your free and reliable online timezone calculator. Effortlessly convert time between different timezones, access up-to-date and accurate insformation for any country, and explore advanced features for precise time tracking.",
  openGraph: {
    title: "World Time Convert",
    description: "Free online timezone converter and global time information tool. Accurate, reliable, and easy-to-use.",
    url: "https://worldtimeconvert.com",
    type: "website",
    images: [
      {
        url: "https://worldtimeconvert.com/WorldTimeConvert.png",
        width: 1200,
        height: 630,
        alt: "World Time Convert",
      },
    ],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script type='text/javascript' src='https://platform-api.sharethis.com/js/sharethis.js#property=6451e34d23c65b001a918092&product=sop' async='async'></script>
        <meta name="google-adsense-account" content="ca-pub-1263903450171291"/>
        {/* Google Analytics Script */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-S80K34SQMD" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S80K34SQMD', { page_path: window.location.pathname });
          `}
        </Script>
      </head>
      <body>
        <Navbar />
        <div className="relative mt-[4rem] mx-2 md:mx-14"> {/* Adjust for navbar height */}
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}


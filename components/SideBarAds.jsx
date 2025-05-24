"use client";

import React, { useEffect } from "react";

export default function AdSenseBanner() {
  useEffect(() => {
    // Dynamically load the AdSense script
    const scriptId = "adsbygoogle-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src =
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1263903450171291";
      script.async = true;
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);
    }

    // Push adsbygoogle if the script is already loaded
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <div className="hidden md:block rounded-md bg-gray-50">
      <ins
        className="adsbygoogle"
        style={{ display: "inline-block", width: "300px", height: "600px" }}
      ></ins>
    </div>
  );
}

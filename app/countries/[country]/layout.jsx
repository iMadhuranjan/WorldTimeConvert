import React from "react";
import country from "@/helper/Country";
import Country from "@/helper/Country";

const layout = ({ children }) => {
  return <div>{children}</div>;
};

export default layout;

export async function generateMetadata({ params }) {
  const { country } = params;

  return {
    title: `${country} Time Right Now | TimeZone in ${country} - WorldTimeConvert.Coms`,
    description: `Find ${country} Clock Time Now with our Free World Time Converter Tool. 
                  Stay updated with ${country}'s timezone information, including its standard time, 
                  UTC offset, and any daylight saving adjustments. ${country} TimeZone Accurates`,
  };
}

function formattedCountry(country) {
  const newCountry = country.replace(" ", "-");
  return newCountry;
}

export async function generateStaticParams() {
  // Ensure `Country` contains the correct data structure
  if (!Country || !Array.isArray(Country)) {
    throw new Error("Invalid Country data source");
  }

  const countries = Country.map((item) => item.country);

  // Generate static parameters
  return countries.map((country) => ({
    country: encodeURIComponent(formattedCountry(country)), // Ensure URL-safe encoding
  }));
}

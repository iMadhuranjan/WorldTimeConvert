import { timeZoneData } from "@/helper/utility";
 
const layout = ({ children }) => {
  return <div>{children}</div>;
};



export async function generateStaticParams() {
  // Extract all abbreviations from the timeZoneData
  const abbreviations = timeZoneData.map((zone) => zone.Abbreviation);

  return abbreviations.map((timezone) => ({
    timezone,
  }));

  
}

export async function generateMetadata({ params }) {
  const { timezone } = await params;

  const timeZoneDetails = timeZoneData.find(
    (zone) => zone.Abbreviation.toLowerCase() === timezone?.toLowerCase()
  );
  return {
    title: `Current ${timeZoneDetails["Full Name"]} (${timeZoneDetails[
      "Abbreviation"
    ].toUpperCase()}) Time 🔴 - WorldTimeConvert.Com`,
  };
}

export default layout;

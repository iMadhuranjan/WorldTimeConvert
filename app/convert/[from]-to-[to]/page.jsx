import { timeZoneData } from "@/helper/utility";
import ClientConverter from "./Wrapper";
// import { generateStaticParams as layoutGenerateStaticParams } from "./layout"; // Import the function

// export async function generateStaticParams() {
//   // Reuse the same logic from the layout
//   return layoutGenerateStaticParams();
// }

export default async function Page({ params }) {
  const fullParams = await params["from]-to-[to"];
  const [from, to] = fullParams.split("-to-");

  return (
    <>
      <ClientConverter from={from} to={to} />
    </>
  );
}

export async function generateMetadata({ params }) {
  const fullParams = await params["from]-to-[to"];
  const [from, to] = fullParams.split("-to-");

  return {
    title: `${from.toUpperCase()} to ${to.toUpperCase()} Time Converter - WorldTimeConvert.Com`,
    description: `Easily convert ${from.toUpperCase()} to ${to.toUpperCase()} time using our accurate and real-time timezone converter. 
                  Ideal for international meetings, scheduling, and travel plans. Get the current time difference and convert 
                  seamlessly between ${from.toUpperCase()} and ${to.toUpperCase()} today.`,
  };
}

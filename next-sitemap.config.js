const timeZoneData = require('./helper/utility'); // Ensure this path is correct
const Country = require('./helper/Country').default; // Access default export correctly

module.exports = {
  siteUrl: 'https://worldtimeconvert.com',
  generateRobotsTxt: true,
  additionalPaths: async () => {
    const dynamicPaths = [];

    // Ensure unique country names (using Set to avoid duplicates)
    const uniqueCountries = Array.from(new Set(Country.map(({ country }) => country.toLowerCase())));

    // Generate dynamic paths for /countries/{countryname}
    uniqueCountries.forEach((countryName) => {
      const path = `/countries/${countryName}`;
      dynamicPaths.push({ loc: path, changefreq: 'daily', priority: 0.7 });
    });

    // Ensure timeZoneData is correctly accessed as an array
    const abbreviations = timeZoneData.timeZoneData.map(tz => tz.Abbreviation); // Access the correct property
    abbreviations.forEach(from => {
      abbreviations.forEach(to => {
        if (from !== to) {
          const path = `/convert/${from.toLowerCase()}-to-${to.toLowerCase()}`;
          dynamicPaths.push({ loc: path, changefreq: 'daily', priority: 0.7 });
        }
      });
    });

    // Generate dynamic paths for /timezone/{timezone}
    timeZoneData.timeZoneData.forEach(tz => {
      const path = `/timezone/${tz.Abbreviation.toLowerCase()}`;
      dynamicPaths.push({ loc: path, changefreq: 'daily', priority: 0.7 });
    });

    // Return dynamic paths
    return dynamicPaths;
  },
};

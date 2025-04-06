// Example using the 'countries' npm package
import axios from "axios";
import * as countries from "countries-list";
import { randomInt } from "crypto";
import { writeFile } from "fs/promises";

const countryList = await axios.get("http://localhost:4000/countries");

// Process and sort countries
async function generateCountries() {
  // const { default: countries } = await import("countries-list");
  // const fs = await import("fs");

  const countryData = {
    countries: Object.entries(countryList.data)
      .map(([code, country], index) => ({
        id: index + 1,
        name: country.name,
        native: country.native || "NILL",
        phone: country.phone || "NILL",
        capital: country.capital || "NILL",
        continent: generateFullContinentName(country.continent) || "NILL",
        currency: country.currency || "NILL",
        languages: country.languages
          ? Object.values(country.languages)
          : ["NILL"],
        population: country.population || randomInt(10000000),
        isoCode: code,
      }))
      .sort((a, b) => a.name.localeCompare(b.name)), // Sorting added here
  };

  try {
    await writeFile("db.json", JSON.stringify(countryData, null, 2));
    console.log("Successfully generated sorted db.json");
  } catch (err) {
    console.error("Error writing file:", err);
  }
}

generateCountries();

function generateFullContinentName(abbr) {
  if (abbr == "AF") {
    return "Africa";
  }
  if (abbr == "AS") {
    return "Asia";
  }
  if (abbr == "EU") {
    return "Europe";
  }
  if (abbr == "NA") {
    return "North America";
  }
  if (abbr == "SA") {
    return "South America";
  }
  if (abbr == "OC") {
    return "Oceania/Australia";
  }
  if (abbr == "AN") {
    return "Antarctica";
  }
  return null;
}

/* 
Key Changes Made:
Added .sort((a, b) => a.name.localeCompare(b.name)) after the .map() call

This sorts the countries alphabetically by their name property

The localeCompare() method provides proper alphabetical sorting including special characters

Alternative Sorting Options:
Case-insensitive sorting:

// javascript code
.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }))
Sorting by other fields (e.g., population):

// javascript code
.sort((a, b) => b.population - a.population) // Descending by population
Secondary sort (e.g., by continent then name):

// javascript code
.sort((a, b) => {
  const continentCompare = a.continent.localeCompare(b.continent);
  return continentCompare !== 0 ? continentCompare : a.name.localeCompare(b.name);
})

After running this updated script, your db.json file will have countries in perfect alphabetical order from Afghanistan to Zimbabwe (or whatever the last country alphabetically happens to be).
*/

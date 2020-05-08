import axios from "axios";

const urlAPI = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changeableUrl = "https://covid19.mathdro.id/api";

  if (country) {
    changeableUrl = urlAPI.concat("/countries/", country);
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl);

    const modifiedData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get("https://covid19.mathdro.id/api/daily");

    return data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get("https://covid19.mathdro.id/api/countries");

    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};

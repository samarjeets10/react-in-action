import axios from 'axios';

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export const getCountryData = () => {
  return api.get(`/all?fields=name,population,region,capital,currencies,flags`);
}

//  get method for individual country data: 

export const getCountrySepData = (name) => {
  return api.get(`/name/${name}?fields=name,population,region,subregion,capital,tld,languages,currencies,borders,flags`);
}




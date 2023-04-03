import axios from "axios";

// interface IParams {
//   apiKey: string;
// }

const APIKEY: string = "d6ae2a1cab4d47d5b7b6b70fa6f9c973";

const newsAPI = axios.create({
  baseURL: "https://newsapi.org/v2",
  params: {
    apiKey: APIKEY,
  },
});

export default newsAPI;

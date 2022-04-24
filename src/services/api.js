import axios from "axios";

const api = axios.create({
  baseURL: "https://free-to-play-games-database.p.rapidapi.com/api/games",
  headers: {
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    "X-RapidAPI-Key": "8c77c25eb1msh4f11a270f840a84p123b1ejsnc07b53f3a8ff",
  },
});

export default api;

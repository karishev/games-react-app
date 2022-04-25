interface Game {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
}

interface Games {
  games: Array<Game>;
}

export default function (api: { get: (arg0: string) => Promise<Games> }) {
  return {
    getGames: () => api.get("/games").then((data: Games) => {
        return data;
      }),
  };
}

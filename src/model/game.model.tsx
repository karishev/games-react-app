interface Screenshot {
  id: number;
  image: string;
}

export interface SystemReq {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
}

export interface GameDetails {
  id: 2;
  title: string;
  thumbnail: string;
  status: string;
  short_description: string;
  description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
  minimum_system_requirements: SystemReq;
  screenshots: Array<Screenshot>;
}

interface GameRepsonse {
  data: GameDetails;
}

export default function (api: {
  get: (arg0: string) => Promise<GameRepsonse>;
}) {
  return {
    getGame: (id: number) =>
      api.get(`/game?id=${id}`).then((response: GameRepsonse) => {
        return response.data;
      }),
  };
}

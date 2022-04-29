import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GameDetails } from "../../model/game.model";
import api from "../../services/api";
import styles from "../UI/modules/GameInformation.module.css";
import { GameInfo } from "../UI/organisms/GameInfo";

const fetchGame = async (id: number) => {
  try {
    const game = await api.game.getGame(id);
    return game;
  } catch (error) {
    console.log("Error: " + error);
  } finally {
    console.log("Finished");
  }
};

export const GameInformation: React.FC = () => {
  const { id } = useParams();
  const [game, setGame] = useState<GameDetails>();

  useEffect(() => {
    id &&
      fetchGame(parseInt(id)).then((response) => response && setGame(response));
  }, []);

  return (
    <>
      <section className={styles.container}>
        {game ? (
            <GameInfo game={game} />
        ) : (
          "loading"
        )}
      </section>
    </>
  );
};

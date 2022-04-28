import { GamesList } from "../UI/molecules/GamesList";

export const Home = () => {
  return (
    <>
    <div className="text-center">
          <h1 className="title">
            Best Free to Play Games for PC and Browser in 2022!
          </h1>
          <p className="text-muted subtitle">
            265free-to-play games found in our list!
          </p>
        </div>
        <form>
          <label>
            {/* <BiSearch className={styles.search_icon} /> */}
            <input
              // onChange={(e) => setSearchTerm(e.target.value)}
              type="search"
              placeholder="Search for games"
              // className={styles.input}
            />
          </label>
        </form>
      <GamesList />
    </>
  );
};

import React, { useContext } from "react";
import { NewsContext } from "../context/newsContext";
import NewsContent from "../components/NewsContent";

export const Home: React.FC = () => {
  const { usNews } = useContext<any>(NewsContext);
  return (
    <>
      {usNews ? (
        <NewsContent title="Us News" news={usNews} />
      ) : (
        <div>
          <h1>Loading ...</h1>
        </div>
      )}
    </>
  );
};

export const Techno: React.FC = () => {
  const { techNews } = useContext<any>(NewsContext);
  return (
    <>
      {techNews ? (
        <NewsContent title="Tech News" news={techNews} />
      ) : (
        <div>
          <h1>Loading ...</h1>
        </div>
      )}
    </>
  );
};
export const BBC: React.FC = () => {
  const { bbcNews } = useContext<any>(NewsContext);
  return (
    <>
      {bbcNews ? (
        <NewsContent title="BBC News" news={bbcNews} />
      ) : (
        <div>
          <h1>Loading ...</h1>
        </div>
      )}
    </>
  );
};

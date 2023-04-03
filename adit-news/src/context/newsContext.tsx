import { createContext, useState, useEffect } from "react";
import newsAPI from "../utils/newsAPI";

export const NewsContext: any = createContext(null);

export const NewsContextProvider = (props: any) => {
  const [usNews, setUsNews] = useState<any>(null);
  const [techNews, setTechNews] = useState<any>(null);
  const [bbcNews, setBbcNews] = useState<any>(null);
  const [businessNews1, setBusinessNews1] = useState<any>(null);
  const [sportNews, setSportNews] = useState<any>(null);

  const endPoints: Array<string> = [
    "/top-headlines?country=us",
    "/everything?domains=techcrunch.com,thenextweb.com",
    "/top-headlines?sources=bbc-news",
    "/top-headlines?category=business",
    "/top-headlines?category=sports",
  ];

  const fetchData = async () => {
    try {
      const results = await Promise.all(endPoints.map((url) => newsAPI.get(url)));
      setUsNews(results[0].data.articles);
      setTechNews(results[1].data.articles);
      setBbcNews(results[2].data.articles);
      setBusinessNews1(results[3].data.articles);
      setSportNews(results[4].data.articles);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(businessNews1);
  console.log(sportNews);
  console.log(usNews);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <NewsContext.Provider
      value={{ fetchData, usNews, techNews, bbcNews, businessNews1, sportNews }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};

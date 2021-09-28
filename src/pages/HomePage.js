import React from "react";
import Article from "../components/Article";
const articles = [
  {
    id: 1,
    title: "Czym jest React?",
    author: "Jan Niezbędny",
    text: "Dolor in adipisicing deserunt eiusmod irure esse sunt reprehenderit consequat commodo mollit nulla. Ea tempor eu consectetur excepteur qui est laborum labore minim qui anim ad. Occaecat elit laboris voluptate ex minim.",
  },
  {
    id: 2,
    title: "Kurs CSS. Czy warto?",
    author: "Jan Niezbędny",
    text: "Dolor in adipisicing deserunt eiusmod irure esse sunt reprehenderit consequat commodo mollit nulla. Ea tempor eu consectetur excepteur qui est laborum labore minim qui anim ad. Occaecat elit laboris voluptate ex minim.",
  },
  {
    id: 3,
    title: "Nowy projekt od Ess",
    author: "Radek Niezbędny",
    text: "Dolor in adipisicing deserunt eiusmod irure esse sunt reprehenderit consequat commodo mollit nulla. Ea tempor eu consectetur excepteur qui est laborum labore minim qui anim ad. Occaecat elit laboris voluptate ex minim.",
  },
];

const HomePage = () => {
  const artList = articles.map((article) => (
    <Article key={articles.id} {...article} />
  ));
  return <div className="home">{artList}</div>;
};

export default HomePage;

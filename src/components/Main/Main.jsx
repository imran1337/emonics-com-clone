import React from "react";
import MainBanner from "./MainBanner/MainBanner";
import MainContent from "./MainContent/MainContent";
import MainContentCard from "./MainContentCard/MainContentCard";
import cardOneImg from "./../../images/card1.jpg";
import cardTwoImg from "./../../images/card2.jpg";
import { Container } from "react-bootstrap";
import MainBanner2 from "./MainBanner2/MainBanner2";

const cardData = [
  {
    id: 1,
    image: cardOneImg,
    title: "OUR PHILOSOPHY",
    content: `Too much is at stake. At Emonics we know that time is precious. We make sure that when we assemble to your team, the best-suited individuals are selected./nOur collective experience gives us the earned confidence to know we will deliver for you.`,
  },
  {
    id: 2,
    image: cardTwoImg,
    title: "OUR PHILOSOPHY",
    content: `Too much is at stake. At Emonics we know that time is precious. We make sure that when we assemble to your team, the best-suited individuals are selected./nOur collective experience gives us the earned confidence to know we will deliver for you.`,
  },
];

const Main = () => {
  return (
    <main className="text-center">
      <MainBanner />
      <MainContent />
      <Container className="d-md-flex">
        {cardData.map((d) => {
          const { id, image, title, content } = d;
          return (
            <MainContentCard
              id={id}
              image={image}
              title={title}
              content={content}
            />
          );
        })}
      </Container>
      <MainBanner2 />
    </main>
  );
};

export default Main;

import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const cardData = [
  {
    id: 1,
    img: "https://images.squarespace-cdn.com/content/v1/5e07349734a3db0ec4696af4/1577540818342-9ZMHS6CCGK3I9V6ZSV6T/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/markus-spiske-3Tf1J8q9bBA-unsplash.jpg?format=1000w",
    caption: "Financial Services",
  },
  {
    id: 2,
    img: "https://images.squarespace-cdn.com/content/v1/5e07349734a3db0ec4696af4/1577540818342-9ZMHS6CCGK3I9V6ZSV6T/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/markus-spiske-3Tf1J8q9bBA-unsplash.jpg?format=1000w",
    caption: "Transportation",
  },
  {
    id: 3,
    img: "https://images.squarespace-cdn.com/content/v1/5e07349734a3db0ec4696af4/1577540818342-9ZMHS6CCGK3I9V6ZSV6T/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/markus-spiske-3Tf1J8q9bBA-unsplash.jpg?format=1000w",
    caption: "Healthcare",
  },
  {
    id: 4,
    img: "https://images.squarespace-cdn.com/content/v1/5e07349734a3db0ec4696af4/1577540818342-9ZMHS6CCGK3I9V6ZSV6T/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/markus-spiske-3Tf1J8q9bBA-unsplash.jpg?format=1000w",
    caption: "Telecommunications",
  },
  {
    id: 5,
    img: "https://images.squarespace-cdn.com/content/v1/5e07349734a3db0ec4696af4/1577540818342-9ZMHS6CCGK3I9V6ZSV6T/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/markus-spiske-3Tf1J8q9bBA-unsplash.jpg?format=1000w",
    caption: "Government",
  },
  {
    id: 6,
    img: "https://images.squarespace-cdn.com/content/v1/5e07349734a3db0ec4696af4/1577540818342-9ZMHS6CCGK3I9V6ZSV6T/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/markus-spiske-3Tf1J8q9bBA-unsplash.jpg?format=1000w",
    caption: "Energy",
  },
];

const Industries = () => {
  return (
    <Container className="mt-5">
      <h3 className="text-center mb-4">
        THE CORE INDUSTRIES WE WORK WITH INCLUDE:
      </h3>
      <p style={{ lineHeight: 1.9 }}>
        Time has shown that staffing is not only good for our economy; it is an
        important industry which provides businesses with vital flexibility and
        support, and job opportunities and flexibility. And as the economy
        continues to evolve, with knowledge just networking beginning to
        dominate its heart, the industry of hiring, recruitment and workforce
        solutions is ready to provide the essential support companies need to
        grow and prosper.
      </p>
      <Row>
        {cardData.map((item) => {
          const { id, img, caption } = item;
          return (
            <Col xs={12} sm={4} key={id}>
              <Card className="m-2 text-center border-0 cursor_pointer grow">
                <Card.Img variant="top" src={img} style={{maxHeight:'300px'}} />
                <Card.Body>
                  <Card.Text>{caption}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Industries;

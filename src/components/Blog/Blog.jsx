import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const blogData = [
  {
    id: 1,
    img: "https://images.squarespace-cdn.com/content/v1/5e07349734a3db0ec4696af4/1620669377197-1Y9LR2S8BVNY2ZOKUZH1/ke17ZwdGBToddI8pDm48kOcU9X1HGM-5zffxE0YdSq8UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcVKhNNeviX1xbh7GKoBE_5-uchUOW9EcOYstM5soSvvxJAqzDixSDzYZyVvzvstxO/How+to+Deal+with+a+Toxic+Boss.jpg?format=750w",
    date: "WORK CULTURE MAY 7, 2021",
    title: "How to Deal with a Toxic Boss",
    description:
      "It's likely that not all of the hundreds of employees you'll hire in your career will be traditional tow-the-line angels or perfect operatives",
    address: "#blog_1",
  },
  {
    id: 2,
    img: "https://images.squarespace-cdn.com/content/v1/5e07349734a3db0ec4696af4/1620669377197-1Y9LR2S8BVNY2ZOKUZH1/ke17ZwdGBToddI8pDm48kOcU9X1HGM-5zffxE0YdSq8UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcVKhNNeviX1xbh7GKoBE_5-uchUOW9EcOYstM5soSvvxJAqzDixSDzYZyVvzvstxO/How+to+Deal+with+a+Toxic+Boss.jpg?format=750w",
    date: "new may 10 2021",
    title: "How to Deal with a Toxic Boss",
    description:
      "It's likely that not all of the hundreds of employees you'll hire in your career will be traditional tow-the-line angels or perfect operatives",
    address: "#blog_2",
  },
  {
    id: 3,
    img: "https://images.squarespace-cdn.com/content/v1/5e07349734a3db0ec4696af4/1620669377197-1Y9LR2S8BVNY2ZOKUZH1/ke17ZwdGBToddI8pDm48kOcU9X1HGM-5zffxE0YdSq8UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcVKhNNeviX1xbh7GKoBE_5-uchUOW9EcOYstM5soSvvxJAqzDixSDzYZyVvzvstxO/How+to+Deal+with+a+Toxic+Boss.jpg?format=750w",
    date: "new may 10 2021",
    title: "How to Deal with a Toxic Boss",
    description:
      "It's likely that not all of the hundreds of employees you'll hire in your career will be traditional tow-the-line angels or perfect operatives.",
    address: "#blog_3",
  },
  {
    id: 4,
    img: "https://images.squarespace-cdn.com/content/v1/5e07349734a3db0ec4696af4/1620669377197-1Y9LR2S8BVNY2ZOKUZH1/ke17ZwdGBToddI8pDm48kOcU9X1HGM-5zffxE0YdSq8UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcVKhNNeviX1xbh7GKoBE_5-uchUOW9EcOYstM5soSvvxJAqzDixSDzYZyVvzvstxO/How+to+Deal+with+a+Toxic+Boss.jpg?format=750w",
    date: "new may 10 2021",
    title: "How to Deal with a Toxic Boss",
    description:
      "It's likely that not all of the hundreds of employees you'll hire in your career will be traditional tow-the-line angels or perfect operatives.",
    address: "#blog_4",
  },
];

const Blog = () => {
  return (
    <section>
      <div
        style={{
          height: "300px",
          background: `url('https://images.squarespace-cdn.com/content/v1/5e07349734a3db0ec4696af4/1583428602178-U0JHT663KS0BJHB101SP/ke17ZwdGBToddI8pDm48kFN-DFK1eK1PdvHSeEQ1GP0UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcMjTBaMDyDtF-PZ6G0utiW5P6KPxcFyIcI8wqAQSp9vX3A5KcwvKKTYWvQrEWfIO1/blog+emonics.png')`,
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "50% 40%",
          objectFit: "cover",
        }}
      ></div>
      <Container>
        <Row>
          {blogData.map((singleBlog) => {
            const { id, img, date, title, description, address } = singleBlog;
            return (
              <Col xs={12} md={6} key={id}>
                <Card className="m-2 text-center cursor_pointer">
                  <Card.Img variant="top" src={img} className="img-fluid" />
                  <Card.Body>
                    <Card.Text>{date}</Card.Text>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>
                      <a href={address} className="link_style">
                        Read More
                      </a>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Blog;

import react, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PokemonLogo from "../images/Pokemon-Logo.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const CharacterList = () => {
  const [chars, setChars] = useState();
  const [title, setTitle] = useState("");
  const [content, setcontent] = useState("");
  const [loading, setLoading] = useState(false);
  let cardObject = null;

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setLoading(true);
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        setChars(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  if (chars) {
    cardObject = chars.map((post, index) => {
      return (
        <Col
          xs={4}
          key={index}
          style={{ paddingBottom: "25px", height: "200px" }}
        >
          <div
            style={{
              width: "305px",
              flexDirection: "column",
              display: "flex",
              alignItems: "center",
              paddingTop: "10px",
            }}
          >
            <img
              style={{ maxWidth: "100%" }}
              variant="top"
              src={
                "https://projectpokemon.org/images/normal-sprite/" +
                post.name +
                ".gif"
              }
            />
            <div>
              <Card.Title>{post.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              <Card.Text></Card.Text>
            </div>
          </div>
        </Col>
      );
    });
  }

  return (
    <Container>
      <Row>
        <img style={{ width: "400px" }} src={PokemonLogo} />
      </Row>
      <Row>{cardObject}</Row>
    </Container>
  );
};

export default CharacterList;

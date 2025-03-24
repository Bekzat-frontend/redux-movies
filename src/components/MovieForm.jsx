import styled from "styled-components";
import Button from "./UI/Button";
import Input from "./UI/Input";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../store/movieSlice";

const MovieForm = () => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();

  const titleValue = (e) => {
    setTitle(e.target.value);
  };
  const ratingValue = (e) => {
    setRating(e.target.value);
  };
  const imageValue = (e) => {
    setImage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() && rating.trim() && image.trim()) {
      const data = {
        title,
        rating,
        image,
        isFavorite,
      };
      dispatch(addMovie(data));
    }
    setTitle("");
    setRating("");
    setImage("");
  };

  return (
    <StyledContainer onSubmit={handleSubmit}>
      <h1>Movies</h1>
      <label htmlFor="">
        Title:
        <br />
        <Input
          type="text"
          value={title}
          onChange={titleValue}
          placeholder="write title of movie"
        />
      </label>

      <label htmlFor="">
        Rating:
        <br />
        <Input
          type="number"
          value={rating}
          onChange={ratingValue}
          placeholder="write rating of movie"
        />
      </label>

      <label htmlFor="">
        Image:
        <br />
        <Input
          type="text"
          value={image}
          onChange={imageValue}
          placeholder="write url of movie"
        />
      </label>

      <Button type="submit">Add movie</Button>
    </StyledContainer>
  );
};

export default MovieForm;

const StyledContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

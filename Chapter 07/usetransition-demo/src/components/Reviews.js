import { ReviewsContainer } from "./StyledComponents";

const Reviews = () => {
  return (
    <ReviewsContainer>
      <ul>
        {Array(300)
          .fill("")
          .map((_, i) => (
            <Review key={i} index={i} />
          ))}
      </ul>
    </ReviewsContainer>
  );
};

const Review = ({ index }) => {
  const init = performance.now();
  while (init > performance.now() - 3) {}
  return <li>Review #{index}</li>;
};

export default Reviews;

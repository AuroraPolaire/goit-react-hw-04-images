import { ButtonBox } from './Button.styled';

const Button = props => {
  const { handleLoadMore } = props;
  return (
    <ButtonBox>
      <button type="button" onClick={handleLoadMore}>
        Load more
      </button>
    </ButtonBox>
  );
};

export default Button;

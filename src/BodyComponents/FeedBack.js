
import styled from 'styled-components';

const FeedbackContainer = styled.div`
box-sizing:border-box;
  position: absolute;
  z-index: 100;
  top: 3rem;
  left: 50%;
  color: ${({ isWin }) => (isWin ? 'white' : 'black')};
  background-color: ${({ isWin }) => (isWin ? 'green' : 'red')};
  padding: 10px;
  border-radius: 5px;
  text-align: center;

@media (max-width:768px){
  font-weight:.9rem;
}
`;

const FeedbackText = styled.p`
  margin: 0;
`;
const FeedBack = ({ isWin, isVisible }) => {

  return isVisible ? (
    <FeedbackContainer isWin={isWin}>
      {isWin ? <FeedbackText>You've found it!</FeedbackText> : <FeedbackText>Keep trying</FeedbackText>}
    </FeedbackContainer>
  ) : null;
};

export default FeedBack;

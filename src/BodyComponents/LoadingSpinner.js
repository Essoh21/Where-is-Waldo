import styled from 'styled-components';

const SpinnerWrapper = styled.div`
 box-sizing:border-box;
  position fixed;
  color;white;
 top:20%;
 left:30%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10rem;
  width: 20rem;
  z-index: 1000;
`;

const Spinner = styled.div`
  border: 0.25em solid rgba(0, 0, 0, 0.1);
  border-top-color: #d9d9d9;
  color:white;
  font-weight:bold;
  border-radius: 50%;
  width: 1.5em;
  height: 1.5em;
  animation: spin 1s ease-in-out infinite;
  position: relative;
  margin-right: 1em;

  &:before {
    content: "";
    position: absolute;
    top: -0.5em;
    left: -0.5em;
    bottom: -0.5em;
    right: -0.5em;
    border: 0.25em solid rgba(0, 0, 0, 0.1);
    border-top-color: #d9d9d9;
    border-radius: 50%;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const LoadingSpinner = ({ isLoading }) => {
    return (
        <>
            {isLoading && (
                <SpinnerWrapper>
                    <Spinner />
                    <span style={{ color: "white", fontWeight: "bold" }}>Saving...</span>
                </SpinnerWrapper>
            )}
        </>
    );
};

export default LoadingSpinner;

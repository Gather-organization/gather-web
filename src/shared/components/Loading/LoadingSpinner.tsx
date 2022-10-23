import { MoonLoader } from 'react-spinners';
import styled from 'styled-components';

const SpinnerContainer = styled.div`
  width: auto;
  height: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SpinnerContent = styled.h3`
  margin-top: 10px;
  font-size: 16px;
  color: var(--gray-700);
`;

interface Props {
  loading: boolean;
  content?: string;
  size?: number;
  speed?: number;
}

export const LoadingSpinner = (props: Props) => {
  const { loading, content, size = 10, speed = 1 } = props;

  return (
    <SpinnerContainer>
      <MoonLoader
        loading={loading}
        color={'#625cff'}
        size={size}
        speedMultiplier={speed}
      />
      {content && <SpinnerContent>{content}</SpinnerContent>}
    </SpinnerContainer>
  );
};

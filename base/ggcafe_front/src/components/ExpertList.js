import styled from 'styled-components';
import ExpertItem from './ExpertItem';

const ExpertListContainer = styled.div`
  display: flex;
`;

const sample = {
  title: '제목',
  description: '내용',
  url: 'https://google.com',
  urlToImage: 'https://via.placeholder.com/160',
};

const ExpertList = () => {
  return (
    <ExpertListContainer>
      <ExpertItem article={sample} />
      <ExpertItem article={sample} />
      <ExpertItem article={sample} />
      <ExpertItem article={sample} />
      <ExpertItem article={sample} />
      <ExpertItem article={sample} />
      <ExpertItem article={sample} />
      <ExpertItem article={sample} />
      <ExpertItem article={sample} />
      <ExpertItem article={sample} />
    </ExpertListContainer>
  );
};

export default ExpertList;

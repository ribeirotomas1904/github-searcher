import { useSelector } from 'react-redux';

import styled from 'styled-components';
import { UserCard, ErrorMessage } from './'
import ContentLoader from 'react-content-loader';

const UsersCardContainer = () => {
  const { users, isLoading, error } = useSelector(state => state.users);

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <Container>
      {!isLoading ? (
        users.map(user => (
          <UserCard
            key={user.id}
            user={user}
            type="min"
            style={{ margin: '10px' }}
          />
        ))
      ) : (
        new Array(30).fill(null).map((_, index) => (
          <UserCardSkeleton key={index} />
        ))
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`;

const UserCardSkeleton = () => (
  <div
    style={{
      backgroundColor: 'white',
      margin: '10px',
      border: '1px solid #e1e4e8',
      borderRadius: '6px',
    }}
  >
    <ContentLoader
      height={150}
      width={150}
      viewBox="0 0 150 160"
    >
      <circle cx="75" cy="60" r="50" />
      <rect x="10" y="130" rx="0" ry="0" width="130" height="20" />
    </ContentLoader>
  </div>
)

export default UsersCardContainer;

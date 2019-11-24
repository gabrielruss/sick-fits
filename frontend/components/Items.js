import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const ALL_ITEMS_QUERY = gql`
  {
    items {
      id
      title
      price
      description
      image
      largeImage
    }
  }
`;

const Items = () => {
  const { loading, error, data } = useQuery(ALL_ITEMS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <p>Items</p>
      {console.log(data)}
    </div>
  );
};

export default Items;

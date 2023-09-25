import { useEffect } from 'react';

import getTrending from 'Services/ApiGet';

const Home = () => {
  useEffect(() => {
    getTrending()
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }, []);

  return <div>response</div>;
};

export default Home;

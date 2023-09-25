import { useEffect } from 'react';

import getTrending from 'Services/ApiGet';

const Home = () => {
  useEffect(() => {
    const serverRequest = async () => {
      try {
        const data = await getTrending();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    serverRequest();
  }, []);

  return <div>response</div>;
};

export default Home;

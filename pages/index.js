import { client } from "../sanity";

const Home = ({ videos }) => {
  console.log(videos);
  return <div></div>;
};

export const getServerSidePorps = async () => {
  const query = '*[_type == "album"]';
  const videos = await sanityClient.fetch(query);

  if (!videos.length) {
    return {
      props: {
        videos: [],
      },
    };
  } else {
    return {
      props: {
        videos,
      },
    };
  }
};

export default Home;

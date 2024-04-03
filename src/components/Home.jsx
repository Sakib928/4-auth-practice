import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>This is home helmet test</title>
      </Helmet>
      <h1 className="text-4xl font-bold">This is home page</h1>
    </div>
  );
};

export default Home;

import HomePage from "../components/home-page-components/homePage";

const Home = () => {
  useEffect(() => {
    document.title = "DGM";
  }, []);
  return <HomePage />;
};

export default Home;

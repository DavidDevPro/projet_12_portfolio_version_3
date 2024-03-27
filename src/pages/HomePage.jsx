import srcBanner from "../assets/images/homeBanner.webp";
import HomeBanner from "../components/HomeBanner";

const HomePage = () => {
  return (
    <main className="main">
      <HomeBanner imgSrc={srcBanner} />
    </main>
  );
};

export default HomePage;

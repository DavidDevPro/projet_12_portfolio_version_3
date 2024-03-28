import srcBanner from "../assets/images/homeBanner.webp";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeBanner from "../components/HomeBanner";
import HomeText from "../components/HomeText";

const HomePage = () => {
  return (
    <>
      {/* Header Navigation*/}
      <Header />
      <main className="main">
        <HomeBanner imgSrc={srcBanner} />
        <HomeText />
      </main>
      {/* Footer*/}
      <Footer />
    </>
  );
};

export default HomePage;

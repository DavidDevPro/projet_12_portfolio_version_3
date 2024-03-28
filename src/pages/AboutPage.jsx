import HeadPages from "../components/HeadPages";
import { BsInfoCircleFill } from "react-icons/bs";
import dataInfos from "../data/personal.json";
import AboutInfos from "../components/AboutInfos";

const AboutPage = () => {
  return (
    <main>
      <HeadPages
        headText="A propos de moi"
        icon={<BsInfoCircleFill size={45} />}
      />
      <section>
        <div className="about_text">
          <div className="about_text_content">
            <h3>Développeur Front-End</h3>
          </div>
        </div>
      </section>
      <section>
        <div className="about_infos">
          <div className="about_infos_content">
            <h3>Informations personnelles</h3>
            <ul>
              {dataInfos.map((info, index) => (
                <AboutInfos
                  key={`info + ${index}`}
                  label={info.label}
                  value={info.value}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="about_wrapper"></div>
      </section>
    </main>
  );
};

export default AboutPage;

import dataProject from "../data/listProject.json";
import HeadPages from "../components/HeadPages";
import { FaFileWaveform } from "react-icons/fa6";
import { PiArrowFatLinesDownFill } from "react-icons/pi";
import { Link, useParams } from "react-router-dom";
import Caroussel from "../components/Caroussel";
import ProjectTags from "../components/ProjectTags";
import ProjectSectionText from "../components/ProjectSectionText";
import ProjectLinksSection from "../components/ProjectSectionLinks";
import ScrollTo from "../components/ScrollTo";

const OneProjectPage = () => {
  const { id } = useParams();
  const data = dataProject.find((item) => item.id === id);

  return (
    <main>
      <HeadPages
        headText={`Projet ${data.pageId}`}
        icon={<FaFileWaveform size={45} />}
      />
      <section className="one_project_section">
        <h1>Illustrations du projet</h1>
        <Caroussel slides={data.pictures} />
        <h2>Technologies, méthodes et outils</h2>
        <div className="  one_project_section_tags">
          <div className="tags">
            {data.tags.map((tag, index) => (
              <ProjectTags key={`tag ${index}`} text={tag} />
            ))}
          </div>
        </div>
        <Link to={`/project/${data.id}#move_text`}>
          <div className="scroll_button">
            <PiArrowFatLinesDownFill className="scroll_button_icon" />
          </div>
        </Link>
        <ScrollTo />

        <h2>{`A propos de ${data.pageId}`}</h2>
        <ProjectSectionText
          aboutTexts={[data.aboutText1, data.aboutText2, data.aboutText3]}
        />

        <ProjectLinksSection
          links={[
            { url: data.github, text: "Vers GitHub" },
            { url: data.website, text: "Voir le site" },
          ]}
        />
      </section>
    </main>
  );
};

export default OneProjectPage;

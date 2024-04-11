import dataProject from "../data/listProject.json";
import HeadPages from "../components/HeadPages";
import { FaFileWaveform } from "react-icons/fa6";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import { PiArrowFatLinesDownFill } from "react-icons/pi";
import { useParams } from "react-router-dom";
import Caroussel from "../components/Caroussel";
import ProjectTags from "../components/ProjectTags";
import Button from "../components/Button";
import ProjectSectionText from "../components/ProjectSectionText";

const OneProjectPage = () => {
  const { id } = useParams();
  const data = dataProject.find((item) => item.pageId === id);

  return (
    <main>
      <HeadPages
        headText={`Projet ${data.pageId}`}
        icon={<FaFileWaveform size={45} />}
      />
      <section className="one_project_page_section">
        <h1>Illustrations du projet</h1>
        <Caroussel slides={data.pictures} />
        <h2>Technologies, méthodes et outils</h2>
        <div className=" content_project one_project_page_section_content_tags">
          <div className="tags">
            {data.tags.map((tag, index) => (
              <ProjectTags key={`tag ${index}`} text={tag} />
            ))}
          </div>
        </div>
        <a href="/project/724events#move_text">
          <div className="scroll_button">
            <PiArrowFatLinesDownFill className="scroll_button_icon" />
          </div>
        </a>

        <h2>{`A propos de ${data.pageId}`}</h2>
        <ProjectSectionText
          aboutTexts={[data.aboutText1, data.aboutText2, data.aboutText3]}
        />

        <div className="one_project_page_section_link">
          <div className="one_project_page_section_link_button">
            <TbArrowBigRightLinesFilled className="project_icon" />
            <a href={data.github} target="_blank" rel="noopener noreferrer">
              <Button
                type={"submit"}
                className={"button_project"}
                text={"Vers GitHub"}
              />
            </a>
          </div>
          <div id="move_text" className="one_project_page_section_link_button">
            <TbArrowBigRightLinesFilled className="project_icon" />
            <a href={data.website} target="_blank" rel="noopener noreferrer">
              <Button
                type={"submit"}
                className={"button_project "}
                text={"Voir le site"}
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OneProjectPage;

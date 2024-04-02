import dataProject from "../data/listProject.json";
import HeadPages from "../components/HeadPages";
import { FaFileWaveform } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import Caroussel from "../components/Caroussel";
import ProjectTags from "../components/ProjectTags";

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
        <h1>Illustrations du projet :</h1>

        <Caroussel slides={data.pictures} />
        <h2></h2>
        <div className="tags">
          {data.tags.map((tag, index) => (
            <ProjectTags key={`tag ${index}`} text={tag} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default OneProjectPage;

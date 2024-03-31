import dataProject from "../data/listProject.json";
import HeadPages from "../components/HeadPages";
import { FaFileWaveform } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import Caroussel from "../components/Caroussel";

const OneProjectPage = () => {
  const { id } = useParams();
  const data = dataProject.find((item) => item.pageId === id);

  return (
    <main>
      <HeadPages
        headText={`Projet ${data.pageId}`}
        icon={<FaFileWaveform size={45} />}
      />
      <Caroussel slides={data.pictures} />
    </main>
  );
};

export default OneProjectPage;

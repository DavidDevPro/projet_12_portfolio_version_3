import HeadPages from "../components/HeadPages";
import { BsInfoCircleFill } from "react-icons/bs";

const AboutPage = () => {
  return (
    <main>
      <HeadPages
        headText="A propos de moi"
        icon={<BsInfoCircleFill size={45} />}
      />
    </main>
  );
};

export default AboutPage;

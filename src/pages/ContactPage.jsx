import HeadPages from "../components/HeadPages";
import { MdAlternateEmail } from "react-icons/md";

const ContactPage = () => {
  return (
    <main>
      <HeadPages headText={"Contact"} icon={<MdAlternateEmail size={45} />} />
      <section></section>
    </main>
  );
};

export default ContactPage;

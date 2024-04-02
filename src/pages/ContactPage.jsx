import ContactForm from "../components/ContactForm";
import ContactText from "../components/ContactText";
import HeadPages from "../components/HeadPages";
import { MdAlternateEmail } from "react-icons/md";

const ContactPage = () => {
  return (
    <main>
      <HeadPages headText={"Contact"} icon={<MdAlternateEmail size={45} />} />
      <section className="contact_section">
        <ContactText />
      </section>
      <section className="contact_section_form">
        <ContactForm />
      </section>
    </main>
  );
};

export default ContactPage;

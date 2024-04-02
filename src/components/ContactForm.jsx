import Button from "../components/Button";
import Input from "../components/Input";
import Label from "../components/Label";

const ContactForm = () => {
  return (
    <div className="contact_form">
      <form action="">
        <Button
          className={"button contact_button"}
          type={"submit"}
          text={"Envoyer"}
        />
      </form>
    </div>
  );
};

export default ContactForm;

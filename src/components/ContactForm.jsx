import emailjs from "@emailjs/browser";
import Label from "./Label";
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";

const ContactForm = () => {
  const [confirmSend, setConfirmSend] = useState("");
  const [confirmSendType, setConfirmSendType] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target); // Récupère les données du formulaire
    const data = Object.fromEntries(formData); // Convertit les entrées du formulaire en un objet

    emailjs
      .send("service_tpqik75", "template_em79ouh", data, "KzwZVeKmyX_iMyiol")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setConfirmSend("Votre message a été envoyé avec succès.");
        setConfirmSendType("success");
        e.target.reset(); // Réinitialise le formulaire après envoi réussi
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setConfirmSend("Échec de l'envoi de votre message. Veuillez réessayer");
        setConfirmSendType("error");
      });
  };

  return (
    <div className="contact_form">
      <form onSubmit={onSubmit}>
        <h2>Formulaire de contact</h2>

        <Label htmlFor={"subject"} className="labelform">
          <TbArrowBigRightLinesFilled size={25} className="contact_icon" />
          Sujet de la demande :
        </Label>
        <Input
          type={"text"}
          id={"subject"}
          name={"subject"}
          placeholder={"Votre demande ..."}
          required={true}
        />

        <Label htmlFor={"from_name"} className="labelform">
          <TbArrowBigRightLinesFilled size={25} className="contact_icon" />
          Votre Nom :
        </Label>
        <Input
          type={"text"}
          id={"from_name"}
          name={"from_name"}
          placeholder={"Votre nom ..."}
          required={true}
        />

        <Label htmlFor={"email"} className="labelform">
          <TbArrowBigRightLinesFilled size={25} className="contact_icon" />
          Votre Email :
        </Label>
        <Input
          type={"email"}
          id={"email"}
          name={"email"}
          placeholder={"Votre email ..."}
          required={true}
        />

        <Label htmlFor={"message"} className="labelform">
          <TbArrowBigRightLinesFilled size={25} className="contact_icon" />
          Votre Message :
        </Label>
        <textarea
          id="message"
          name="message"
          placeholder="Votre message ..."
          required
        />
        {confirmSend && (
          <p className={`confirmation_message ${confirmSendType}`}>
            {confirmSend}
            {setTimeout(() => {
              setConfirmSend("");
              setConfirmSendType("");
            }, 4000)}
          </p>
        )}
        <Button
          type={"submit"}
          className={"button contact_button"}
          text={"Envoyer"}
        />
      </form>
    </div>
  );
};

export default ContactForm;

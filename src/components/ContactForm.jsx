import emailjs from "@emailjs/browser";
import Label from "./Label";
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";

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
    <>
      <form onSubmit={onSubmit}>
        <Label htmlFor={"from_name"} className="labelform">
          Votre nom :
        </Label>
        <Input
          type={"text"}
          id={"from_name"}
          name={"from_name"}
          placeholder={""}
          required={true}
        />

        <Label htmlFor={"subject"} className="labelform">
          sujet :
        </Label>
        <Input
          type={"text"}
          id={"subject"}
          name={"subject"}
          placeholder={""}
          required={true}
        />

        <Label htmlFor={"email"} className="labelform">
          email :
        </Label>
        <Input
          type={"email"}
          id={"email"}
          name={"email"}
          placeholder={""}
          required={true}
        />

        <Label htmlFor={"message"} className="labelform">
          message :
        </Label>
        <textarea id="message" name="message" placeholder="" required />

        <Button
          type={"submit"}
          className={"button contact_button"}
          text={"Envoyer"}
        />
      </form>
      {confirmSend && (
        <p className={`confirmation-message ${confirmSendType}`}>
          {confirmSend}
        </p>
      )}
    </>
  );
};

export default ContactForm;

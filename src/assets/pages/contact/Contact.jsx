import contactUnikahr from "../../extra/png/mailbox.png";
import NavBar from "../../../components/navBar/NavBar";
import "./Contact.css";
import Footer from "../../../components/footer/Footer";
import ContactForm from "../../../components/contactForm/ContactForm";

const Contact = () => {
  return (
    <div>
      <NavBar />
      <main>
        <div className=" container-contact">
          <div className="contact-title-img-container">
            <img
              src={contactUnikahr}
              className="contact-image-hr"
              alt="Putting the human"
            />
            <h2 className="contact-title">Contact us!</h2>
          </div>

          <p className="contact-description">
            Fill the form below and we will be intouch with you ASAP.
          </p>
        </div>
        <div className="map-form-container">
          <ContactForm />
          <div className="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9931.587427931954!2d-0.10360628081264604!3d51.51510825049637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603554edf855f%3A0xa1185c8d19184c0!2sCity%20of%20London%2C%20London%2C%20UK!5e0!3m2!1sen!2ses!4v1710932841734!5m2!1sen!2ses"></iframe>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

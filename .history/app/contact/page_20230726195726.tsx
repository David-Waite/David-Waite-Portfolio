import { Metadata, NextPage } from "next/types";
import { Contact } from "../components/Contact/contact";

export const metadata: Metadata = {
  title: "Contact | Fifth Layer Music",
};

const ContactPage: NextPage = () => {
  return <Contact />;
};

export default ContactPage;

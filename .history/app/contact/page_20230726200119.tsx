import { Metadata, NextPage } from "next/types";
import { Contact } from "../components/Contact/contact";

export const metadata: Metadata = {
  title: "David Waite | Contact ",
};

const ContactPage: NextPage = () => {
  return <Contact />;
};

export default ContactPage;

import AboutMain from "../components/About/AboutMain";

import { Metadata, NextPage } from "next/types";
import { Contact } from "../components/Contact/contact";

export const metadata: Metadata = {
  title: "David Waite | Contact ",
};

export default function About() {
  return (
    <div>
      <AboutMain />
    </div>
  );
}

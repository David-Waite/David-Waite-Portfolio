import AboutMain from "../components/About/AboutMain";

import { Metadata, NextPage } from "next/types";

export const metadata: Metadata = {
  title: "David Waite | About ",
};

export default function About() {
  return (
    <div>
      <AboutMain />
    </div>
  );
}

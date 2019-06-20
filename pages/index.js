import React, { useEffect } from "react";
import Header from "../components/header";
import Scene from "../components/scene";

const TeamMembers = [
  {
    name: "",
    position: "",
    bio: "",
    links: {
      twitter: "",
      facebook: "",
      github: ""
    }
  },
  {
    name: "",
    position: "",
    bio: "",
    links: {
      twitter: "",
      facebook: "",
      github: ""
    }
  }
];

function Index() {
  useEffect(() => {});

  return (
    <main>
      <Scene />
      <style jsx>{`
        :global(body) {
          background-color: #000;
        }
      `}</style>
    </main>
  );
}

export default Index;

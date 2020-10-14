import React from "react";
import "./styles.css";
import Projects from "./classcomp/projects";

class App extends React.Component {
  render() {
    return (
      <>
        <h1> Welcome to my Portfolio</h1>
        <div className="container">
          <div className="project">
            <Projects
              name={"Pokedex"}
              git={
                "https://github.com/Johnnyb818/GA-Projects/tree/master/unit_1/Pokedex"
              }
              live={"https://pokedex-ruddy-delta.vercel.app/#"}
              img={"https://i.imgur.com/v9LHmvV.png"}
            />
          </div>
          <div className="project">
            <Projects
              name={"Style-Points"}
              git={"https://github.com/Johnnyb818/project2setup"}
              live={"https://johnproject2setup.herokuapp.com/boards/"}
              img={"https://i.imgur.com/AzUvG57.png"}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;

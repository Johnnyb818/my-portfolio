import React from "react";
import "./styles.css";
import Projects from "./classcomp/projects";

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Hello, my name is John Bruno. <br/>I'm a full stack developer living in Nashville, TN</h1>
        <br/>
        <h1>Technical Skills</h1>
        <h2>Javascript | Jquery | HTML5 | Node.JS | CSS3| ES6 | EJS | Mongoose| Bootstrap | Express | React | MongoDB | Heroku | GitHub | Ruby | Rails | SQL | Postgres | Postman | ​Netlify | Material UI</h2>
        <br/>
        <h2 className="projects-header">Recent Projects</h2>
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
          <div className="project">
            <Projects
              name={"Codex"}
              git={"https://github.com/mikegoolsby/codex_client"}
              live={"https://reverent-kalam-023988.netlify.app/"}
              img={"https://i.imgur.com/js1IdsJ.png"}
            />
          </div>
          <div className="project">
            <Projects
              name={"Bar Bible"}
              git={"https://github.com/Johnnyb818/bar_bible_client"}
              live={"https://optimistic-booth-932d5e.netlify.app/"}
              img={"https://i.imgur.com/DYiLPil.png"}
            />
          </div>
        </div>
        <br/>
        <div>
          <h1>John Bruno</h1>
          <h2>Johnnyb818@gmail.com</h2>
          <h3>615-430-8181</h3>

        </div>

      </>
    );
  }
}

export default App;

import React from "react";
import "./stylesheets/App.css";
import NavBar from "./components/NavBar";
import Main from "./components/Main";

class App extends React.Component {
  /*the state whihc is used to define properties in lower level components */
  state = {
    title: "My Portfolio",
    buttons: [
      {
        name: "Home",
        link: "/"
      },
      {
        name: "About",
        link: "/about"
      },
      {
        name: "Contact",
        link: "/contact"
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <header>
          <NavBar
            title={this.state.title}
            noTitle={false}
            buttons={this.state.buttons}
          />
        </header>
        <body>
          <Main />
        </body>
      </div>
    );
  }
}

export default App;

import React, { Component, Fragment } from "react";
import ReactDOM, { render } from "react-dom";

import Header from './layout/header';
import Dashboard from './teams/Dashboard';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading"
    };

  };

  componentDidMount() {
    fetch("api/team")
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(data => {
        this.setState(() => {
          return {
            data,
            loaded: true
          };
        });
      });
  }

  render() {
    return (
      
      <ul>
        <p> <br/>The Following list lists the teams enrolled for ITSP. <br/>
            The Order is - Team Picture, Team Name, and the first team member.
        </p>
        {this.state.data.map(TEAM => {
          return (
            <Fragment>
              <Header />
            <li key={TEAM.team_id}>
            <hr />
              <img  src={TEAM.team_pic} style={{width:"60px"}} />  -  {TEAM.team_name} - {TEAM.member1}
              <hr />
            </li>
            </Fragment>
          );
        })}
      </ul>
      
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);
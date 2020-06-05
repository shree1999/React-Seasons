import React from "react";
import Display from "./Display";
import Spinner from "./Spinner";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      err: "",
    };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (error) => this.setState({ err: error.message })
    );
  }

  renderFunction() {
    if (!this.state.lat && this.state.err) {
      return <div>Error: {this.state.err}</div>;
    }

    if (!this.state.err && this.state.lat) {
      return (
        <div>
          <Display lat={this.state.lat} />
        </div>
      );
    }

    return (
      <div>
        <Spinner message="Fetching Your Location" />
      </div>
    );
  }

  render() {
    return <div className="border red">{this.renderFunction()}</div>;
  }
}

export default App;

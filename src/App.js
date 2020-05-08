import React from "react";

import { Cards, Charts, CountryPicker } from "./components";
import { fetchData } from "./api";

import style from "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {},
      country: "",
    };
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country });
  };

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className="container">
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />
      </div>
    );
  }
}

export default App;

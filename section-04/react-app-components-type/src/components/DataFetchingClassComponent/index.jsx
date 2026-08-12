import { Component } from "react";
import { API_BASE_URL } from "../../settings";

const withDataFetching = (title, WrapperComponent, endpoint) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        isLoading: true,
        error: "",
      };
    }

    async componentDidMount() {
      try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`);

        if (!response.ok) {
          throw new Error("An error ocurred when fetch products list");
        }

        const data = await response.json();

        this.setState({
          data,
          isLoading: false,
        });
      } catch (error) {
        console.error(`ERROR: Fetching data on ${endpoint}`, error);
        this.setState({
          error: "An error ocurred while fetching the data",
          isLoading: false,
        });
      }
    }

    render() {
      const { data, isLoading, error } = this.state;

      if (isLoading) {
        return (
          <div>
            <h2>{title}</h2>
            <p>Searching list of data...</p>
          </div>
        );
      }

      if (error) {
        return (
          <div>
            <h2>{title}</h2>
            <p>⚠️ {error}</p>
          </div>
        );
      }

      if (data.length === 0) {
        return (
          <div>
            <h2>{title}</h2>
            <p>⚠️ No data was found.</p>
          </div>
        );
      }
      
      return <WrapperComponent data={data} />;
    }
  };
};

export default withDataFetching;

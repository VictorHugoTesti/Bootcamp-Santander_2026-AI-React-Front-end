import { useEffect, useState } from "react";
import { API_BASE_URL } from "../../settings";

const withDataFetching = (title, WrapperComponent, endpoint) => {
  return () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`${API_BASE_URL}${endpoint}`);

          if (!response.ok) {
            throw new Error("An error ocurred when fetch products list");
          }

          const data = await response.json();
          setData(data);
          setIsLoading(false);
        } catch (error) {
          console.error(`ERROR: Fetching data on ${endpoint}`, error);
          setError("An error ocurred while fetching the data");
          setIsLoading(false);
        }
      };

      fetchData();
    }, [endpoint]);

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
  };
};

export default withDataFetching;

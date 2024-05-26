
import { useState, useEffect } from 'react';

const UseEffect = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.restful-api.dev/objects');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
    <div className="container my-3">
      <h1>My Data</h1>
      <ul className="list-group">
        {data.map((item, index) => (
          <li className="list-group-item" key={index}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseEffect

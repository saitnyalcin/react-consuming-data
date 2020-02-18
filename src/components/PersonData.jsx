import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function PersonData() {
  // init the state variables to set the data that fetched from api
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const userCallApi = async () => {
    await axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(result => setData(result.data));
  };

  useEffect(() => {
    setTimeout(() => {
      try {
        userCallApi();
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading..</h1>
      ) : (
        <ul style={{ listStyle: 'none' }}>
          {data.map(item => (
            <li key={item.username}>
              {item.username}: {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function PersonData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(result => setData(result.data));
  }, []);

  return (
    <div>
      <ul style={{ listStyle: 'none' }}>
        {data.map(item => (
          <li key={item.username}>
            {item.username}: {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

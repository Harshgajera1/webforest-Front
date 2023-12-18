import React, { useState, useEffect } from 'react';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="container mt-5">
    <h1 className="text-center mb-4">Fetched Data</h1>
    <div className="row">
      {data.map((item) => (
        <div className="col-md-4 mb-4" key={item.id}>
          <div className="card h-100 shadow">
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.body}</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Post ID: {item.id}</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Home;

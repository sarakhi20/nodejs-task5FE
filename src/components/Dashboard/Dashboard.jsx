import React, { useState, useEffect } from 'react';
import { createShortUrl, getUrls } from '../../api/api';

const Dashboard = () => {
  const [urls, setUrls] = useState([]);
  const [originalUrl, setOriginalUrl] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const { data } = await getUrls(token);

        // Check if data.urls is an array and set it
        if (data.urls && Array.isArray(data.urls)) {
          setUrls(data.urls);
        } else {
          console.error('Data.urls is not an array:', data.urls);
        }
      } catch (error) {
        console.error('Error fetching URLs', error);
      }
    };

    fetchUrls();
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await createShortUrl({ originalUrl }, token);
      // Assuming data is the new URL object
      setUrls((prevUrls) => [...prevUrls, data]);
      setOriginalUrl('');
    } catch (error) {
      console.error('Error creating short URL', error);
    }
  };

  return (
    <div className="container">
      <h2>Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Enter URL:</label>
          <input
            type="url"
            className="form-control"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Shorten
        </button>
      </form>
      <ul className="list-group mt-4">
        {urls.map((url, index) => (
          <li key={url._id || url.shortUrl || index} className="list-group-item">
            <a href={`/url/${url.shortUrl}`} target="_blank" rel="noopener noreferrer">
              {url.shortUrl}
            </a>
            <span> - {url.originalUrl}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
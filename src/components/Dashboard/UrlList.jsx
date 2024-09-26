import React from 'react';

const UrlsList = ({ urls }) => {
  return (
    <ul className="list-group mt-4">
      {urls.map((url) => (
        <li key={url._id} className="list-group-item">
          <a href={`/url/${url.shortUrl}`} target="_blank" rel="noopener noreferrer">
            {url.shortUrl}
          </a>
          <span> - {url.originalUrl}</span>
        </li>
      ))}
    </ul>
  );
};

export default UrlsList;
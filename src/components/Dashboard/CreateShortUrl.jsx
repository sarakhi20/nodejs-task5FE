import React, { useState } from 'react';
import { createShortUrl } from '../../api/api';

const CreateShortUrl = ({ onUrlCreated }) => {
  const [originalUrl, setOriginalUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await createShortUrl({ originalUrl });
      onUrlCreated(data);
      setOriginalUrl('');
    } catch (error) {
      console.error('Error creating short URL', error);
    }
  };

  return (
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
  );
};

export default CreateShortUrl;
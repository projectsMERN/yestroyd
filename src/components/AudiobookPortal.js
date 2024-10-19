import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AudiobookPortal = () => {
  const [audiobooks, setAudiobooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAudiobooks = async () => {
      try {
        const response = await axios.get('http://your-api-url/api/audiobooks/');
        setAudiobooks(response.data);
      } catch (error) {
        console.error('Error fetching audiobooks:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAudiobooks();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="audiobook-portal">
      <h1 className="text-3xl font-bold">Audiobook Portal</h1>
      <p className="mt-4">Welcome to the Audiobook Portal! Here you can explore various audiobooks tailored for children aged 0-12 years.</p>
      <div className="audiobook-list mt-8">
        <h2 className="text-2xl font-semibold">Available Audiobooks</h2>
        <ul>
          {audiobooks.map((audiobook) => (
            <li key={audiobook.id} className="mt-2">{audiobook.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AudiobookPortal;
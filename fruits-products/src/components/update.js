import React, { useState } from 'react';

export default function List() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [artists, setArtists] = useState([]);
let nextId=0;
  const handleAddArtist = () => {
    const newArtist = { id: nextId++, name: name, lastName: lastName };
    setArtists([...artists, newArtist]);
    setName('');
    setLastName('');
  };

  const handleChangeName = (id, newName) => {
    const updatedArtists = artists.map((artist) => {
      if (artist.id === id) {
        return { ...artist, name: newName };
      }
      return artist;
    });
    setArtists(updatedArtists);
  };

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />{' '}
      <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <button onClick={handleAddArtist}>Add</button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
            {artist.name} {artist.lastName}
            <button onClick={() => handleChangeName(artist.id, prompt('Enter new name:', artist.name))}>
              Change Name
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

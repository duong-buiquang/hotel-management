import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile: React.FC = () => {
  const [age, setAge] = useState<number | ''>('');
  const [hobbies, setHobbies] = useState<string>('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/users/profile', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setAge(response.data.age || '');
        setHobbies(response.data.hobbies?.join(', ') || '');
      } catch (error) {
        setMessage('Failed to fetch profile');
      }
    };

    fetchProfile();
  }, []);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.put(
        '/api/users/profile',
        { age, hobbies: hobbies.split(',').map(hobby => hobby.trim()) },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage('Profile updated successfully!');
    } catch (error) {
      setMessage('Failed to update profile');
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={e => setAge(e.target.value ? parseInt(e.target.value) : '')}
          className="block w-full p-2 mb-4 border rounded"
        />
        <input
          type="text"
          placeholder="Hobbies (comma-separated)"
          value={hobbies}
          onChange={e => setHobbies(e.target.value)}
          className="block w-full p-2 mb-4 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded"
        >
          Update Profile
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default Profile;

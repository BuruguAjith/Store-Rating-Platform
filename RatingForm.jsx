import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function RatingForm({ storeId }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    await axios.post('/api/ratings', {
      storeId,
      rating: parseInt(data.rating),
    }, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    alert('Rating submitted!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-2">
      <select {...register('rating')} className="border rounded p-2 mr-2">
        {[1, 2, 3, 4, 5].map(r => <option key={r} value={r}>{r}</option>)}
      </select>
      <button type="submit" className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700">Rate</button>
    </form>
  );
}

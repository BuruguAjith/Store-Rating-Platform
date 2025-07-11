import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignupForm() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    await axios.post('/api/auth/signup', data);
    alert('Signup successful!');
    navigate('/login');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register('name', { minLength: 20, maxLength: 60 })} placeholder="Full Name" required className="w-full p-2 border rounded" />
        <input {...register('email')} placeholder="Email" required className="w-full p-2 border rounded" />
        <input {...register('address')} placeholder="Address" required className="w-full p-2 border rounded" />
        <input {...register('password')} placeholder="Password" type="password" required className="w-full p-2 border rounded" />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Sign Up</button>
      </form>
    </div>
  );
}

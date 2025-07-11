import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RatingForm from './RatingForm';

export default function StoreList() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    axios.get('/api/stores').then(res => setStores(res.data));
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">All Stores</h2>
      {stores.map(store => (
        <div key={store.id} className="mb-6 p-4 border rounded bg-white shadow">
          <h3 className="text-lg font-bold">{store.name}</h3>
          <p className="text-sm text-gray-600">{store.address}</p>
          <p className="text-sm">Average Rating: {store.avgRating ?? 'No ratings yet'}</p>
          <RatingForm storeId={store.id} />
        </div>
      ))}
    </div>
  );
}

import { useState } from 'react';

export default function Reservation() {
  const [form, setForm] = useState({ name: '', date: '', time: '', guests: '' });

  const handleSubmit = e => {
    e.preventDefault();
    fetch('https://your-backend-url/reservation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    }).then(res => res.json()).then(() => alert('Reservation sent!'));
  };

  return (
    <section className="p-6 bg-red-50">
      <h2 className="text-2xl font-bold">Reservation</h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <input className="w-full p-2 border" placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
        <input className="w-full p-2 border" type="date" onChange={e => setForm({ ...form, date: e.target.value })} />
        <input className="w-full p-2 border" type="time" onChange={e => setForm({ ...form, time: e.target.value })} />
        <input className="w-full p-2 border" placeholder="Guests" type="number" onChange={e => setForm({ ...form, guests: e.target.value })} />
        <button type="submit" className="px-4 py-2 bg-red-600 text-white rounded">Book Now</button>
      </form>
    </section>
  );
}
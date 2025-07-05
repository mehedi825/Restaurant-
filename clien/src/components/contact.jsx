import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = e => {
    e.preventDefault();
    fetch('https://your-backend-url/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    }).then(res => res.json()).then(() => alert('Message sent!'));
  };

  return (
    <section className="p-6 bg-green-100">
      <h2 className="text-2xl font-bold">Contact Us</h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <input className="w-full p-2 border" placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
        <input className="w-full p-2 border" placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
        <textarea className="w-full p-2 border" placeholder="Message" onChange={e => setForm({ ...form, message: e.target.value })}></textarea>
        <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Send</button>
      </form>
    </section>
  );
}
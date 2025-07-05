import { useEffect, useState } from 'react';

export default function Menu() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://your-backend-url/menu')
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  return (
    <section className="p-6 bg-white">
      <h2 className="text-2xl font-bold">Menu</h2>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        {items.map(item => (
          <div key={item._id} className="p-4 border rounded shadow">
            <h3 className="font-bold text-lg">{item.name}</h3>
            <p>{item.description}</p>
            <p className="text-red-600 font-semibold">${item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
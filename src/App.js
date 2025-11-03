// -------------------------------------
// 🧩 Root Component (App.js)
// -------------------------------------
// The main entry point of the "Far Away" travel packing list app.
// It organizes the app layout by combining four subcomponents:
// Logo, Form, PackingList, and Stats.

import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "T-shirt", quantity: 12, packed: true },
// ];

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((currentItems) => [...currentItems, item]);
  }

  function handleDeleteItem(id) {
    console.log(id);
    setItems((currentItems) =>
      currentItems.filter((currentItem) => currentItem.id !== id)
    );
  }
  return (
    <div className="app">
      {/* 🏝️ App Header */}
      <Logo />

      {/* 🧾 Input Form to Add New Items */}
      <Form onAddItem={handleAddItem} />

      {/* 📋 Packing List Section */}
      <PackingList items={items} onDeleteItem={handleDeleteItem} />

      {/* 📊 Statistics / Summary Footer */}
      <Stats />
    </div>
  );
}

// -------------------------------------
// 🪪 Logo Component
// -------------------------------------
// Displays the app title with emojis for a friendly vibe.
function Logo() {
  return <h1>🌴 Far Away 👜</h1>;
}

// -------------------------------------
// 🧾 Form Component
// -------------------------------------
// Displays a form for users to add new items to the packing list.
// (Interactivity will be added later.)
function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      description: description,
      quantity: quantity,
      packed: false,
      id: Date.now(),
    };

    onAddItem(newItem);

    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>

      <select onChange={(e) => setQuantity(e.target.value)} value={quantity}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

// -------------------------------------
// 📋 PackingList Component
// -------------------------------------
// Displays the list of packing items.
// Currently renders a static array `initialItems`.
// Each item is passed down to the <Item /> component.
function PackingList({ items, onDeleteItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} onDeleteItem={onDeleteItem} />
        ))}
      </ul>
    </div>
  );
}

// -------------------------------------
// 🎒 Item Component
// -------------------------------------
// Displays a single packing item with:
// - Quantity and description
// - Strike-through if the item is packed
// - A ❌ button (to delete later)
function Item({ item, onDeleteItem }) {
  return (
    <li>
      {/* Apply line-through style if item is packed */}
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

// -------------------------------------
// 📊 Stats Component
// -------------------------------------
// Displays a footer summary of packing statistics.
// Will later show how many items are packed vs. total.
function Stats() {
  return (
    <footer className="stats">
      <em>👜 You have X items on your list, and you already packed X (x%)</em>
    </footer>
  );
}

export default App;

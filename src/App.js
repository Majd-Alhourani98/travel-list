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

  function handleToggleItem(id) {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm("Are you sure you want to delete items?");
    if (items && confirmed) setItems([]);
  }

  return (
    <div className="app">
      {/* 🏝️ App Header */}
      <Logo />

      {/* 🧾 Input Form to Add New Items */}
      <Form onAddItem={handleAddItem} />

      {/* 📋 Packing List Section */}
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />

      {/* 📊 Statistics / Summary Footer */}
      <Stats items={items} />
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
function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") sortedItems = [...items];

  if (sortBy === "description")
    sortedItems = [...items].sort((a, b) =>
      a.description.localeCompare(b.description)
    );

  if (sortBy === "packed")
    sortedItems = [...items].sort(
      (a, b) => Number(a.packed) - Number(b.packed)
    );

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>

        <button onClick={onClearList}>Clear List</button>
      </div>
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
function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
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
function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        👜 You have {numItems} items on your list, and you already packed{" "}
        {numPacked} ({percentage}%)
      </em>
    </footer>
  );
}

export default App;

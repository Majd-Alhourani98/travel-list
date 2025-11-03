// -------------------------------------
// 🧩 Root Component (App.js)
// -------------------------------------
// The main entry point of the "Far Away" travel packing list app.
// It manages the state of all packing items and coordinates between
// four subcomponents: Logo, Form, PackingList, and Stats.

import { useState } from "react";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";
import { Logo } from "./Logo";

// Example initial items (commented out - can be used for testing)
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "T-shirt", quantity: 12, packed: true },
// ];

function App() {
  // State to store all packing items
  // Each item has: { id, description, quantity, packed }
  const [items, setItems] = useState([]);

  /**
   * Adds a new item to the packing list
   * @param {Object} item - The new item object with id, description, quantity, and packed status
   */
  function handleAddItem(item) {
    // Use functional update to ensure we're working with the latest state
    setItems((currentItems) => [...currentItems, item]);
  }

  /**
   * Removes an item from the packing list by its ID
   * @param {number} id - The unique identifier of the item to delete
   */
  function handleDeleteItem(id) {
    console.log(id);
    // Filter out the item with the matching ID
    setItems((currentItems) =>
      currentItems.filter((currentItem) => currentItem.id !== id)
    );
  }

  /**
   * Toggles the packed status of an item
   * @param {number} id - The unique identifier of the item to toggle
   */
  function handleToggleItem(id) {
    // Map through items and flip the packed status for the matching item
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  /**
   * Clears all items from the packing list
   * Shows a confirmation dialog before clearing
   */
  function handleClearList() {
    // Ask for user confirmation before clearing the entire list
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

export default App;

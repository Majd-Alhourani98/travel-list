import { useState } from "react";
import { Item } from "./Item";

// -------------------------------------
// 📋 PackingList Component
// -------------------------------------
// Displays the list of packing items with sorting functionality.
// Features:
// - Renders all items using the Item component
// - Provides sorting options (input order, description, packed status)
// - Clear list button to remove all items

export function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  // State to track the current sorting method
  // Options: "input", "description", "packed"
  const [sortBy, setSortBy] = useState("input");

  // Variable to hold the sorted items array
  let sortedItems;

  // Sort items based on the selected sorting method
  if (sortBy === "input") {
    // Original input order (no sorting needed)
    sortedItems = [...items];
  }

  if (sortBy === "description") {
    // Sort alphabetically by description (case-insensitive)
    sortedItems = [...items].sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  }

  if (sortBy === "packed") {
    // Sort by packed status (unpacked items first, then packed)
    // Number(true) = 1, Number(false) = 0
    sortedItems = [...items].sort(
      (a, b) => Number(a.packed) - Number(b.packed)
    );
  }

  return (
    <div className="list">
      {/* Render the list of items */}
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

      {/* Sorting and actions controls */}
      <div className="actions">
        {/* Sort dropdown selector */}
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>

        {/* Button to clear all items from the list */}
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}

// -------------------------------------
// 🎒 Item Component
// -------------------------------------
// Displays a single packing item as a list item with:
// - Checkbox to toggle packed/unpacked status
// - Quantity and description text (with strike-through when packed)
// - Delete button to remove the item from the list

export function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      {/* Checkbox to mark item as packed/unpacked */}
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      
      {/* Item text with conditional styling */}
      {/* Apply line-through style if item is packed */}
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      
      {/* Delete button - removes item from list */}
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

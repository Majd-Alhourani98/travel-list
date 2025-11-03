import { useState } from "react";

// -------------------------------------
// 🧾 Form Component
// -------------------------------------
// Displays a form for users to add new items to the packing list.
// Features:
// - Quantity selector (1-20)
// - Text input for item description
// - Form validation (prevents empty submissions)
// - Resets form after successful submission

export function Form({ onAddItem }) {
  // State for the item description input
  const [description, setDescription] = useState("");
  
  // State for the quantity selector (defaults to 1)
  // Note: stored as string due to select element value
  const [quantity, setQuantity] = useState(1);

  /**
   * Handles form submission
   * Creates a new item object and passes it to the parent component
   * @param {Event} e - The form submit event
   */
  function handleSubmit(e) {
    e.preventDefault(); // Prevent default form submission behavior

    // Validation: Don't submit if description is empty
    if (!description) return;

    // Create a new item object
    // Using Date.now() as a simple ID generator (timestamp-based)
    const newItem = {
      description: description,
      quantity: quantity, // Will be converted to number when needed
      packed: false, // New items start as unpacked
      id: Date.now(), // Unique identifier based on current timestamp
    };

    // Pass the new item to the parent component
    onAddItem(newItem);

    // Reset form fields after successful submission
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>

      {/* Quantity selector dropdown (1-20) */}
      <select onChange={(e) => setQuantity(e.target.value)} value={quantity}>
        {/* Generate options from 1 to 20 */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      {/* Item description input field */}
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      
      {/* Submit button */}
      <button>Add</button>
    </form>
  );
}

// -------------------------------------
// 📊 Stats Component
// -------------------------------------
// Displays a footer summary of packing statistics.
// Shows:
// - Total number of items
// - Number of packed items
// - Percentage of items packed
// - Encouraging message when list is empty

export function Stats({ items }) {
  // If the list is empty, show an encouraging message
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list</em>
      </p>
    );
  
  // Calculate statistics
  const numItems = items.length; // Total number of items
  const numPacked = items.filter((item) => item.packed).length; // Count of packed items
  const percentage = Math.round((numPacked / numItems) * 100); // Percentage rounded to nearest integer
  
  // Render the statistics footer
  return (
    <footer className="stats">
      <em>
        👜 You have {numItems} items on your list, and you already packed{" "}
        {numPacked} ({percentage}%)
      </em>
    </footer>
  );
}

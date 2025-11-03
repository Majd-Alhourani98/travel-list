// -------------------------------------
// 🧩 Root Component (App.js)
// -------------------------------------
// The main entry point of the "Far Away" travel packing list app.
// It organizes the app layout by combining four subcomponents:
// Logo, Form, PackingList, and Stats.

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "T-shirt", quantity: 12, packed: true },
];

function App() {
  return (
    <div className="app">
      {/* 🏝️ App Header */}
      <Logo />

      {/* 🧾 Input Form to Add New Items */}
      <Form />

      {/* 📋 Packing List Section */}
      <PackingList />

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
function Form() {
  return (
    <form className="add-form">
      <h3>What do you need for your 😍 trip?</h3>
    </form>
  );
}

// -------------------------------------
// 📋 PackingList Component
// -------------------------------------
// Displays the list of packing items.
// Currently renders a static array `initialItems`.
// Each item is passed down to the <Item /> component.
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
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
function Item({ item }) {
  return (
    <li>
      {/* Apply line-through style if item is packed */}
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
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

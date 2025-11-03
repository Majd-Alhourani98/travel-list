// -------------------------------------
// 🧩 Root Component (App.js)
// -------------------------------------
// The main entry component of the "Far Away" travel packing list app.
// It organizes the app layout by combining four subcomponents:
// Logo, Form, PackingList, and Stats.

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
// Displays the title of the app with fun emojis for personality.
function Logo() {
  return <h1>🌴 Far Away 👜</h1>;
}

// -------------------------------------
// 🧾 Form Component
// -------------------------------------
// Contains the input form where users can add new packing items.
// (Functionality will be added later.)
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
// Placeholder for the list of items the user plans to pack.
// Will later display items dynamically.
function PackingList() {
  return <div className="list">LIST</div>;
}

// -------------------------------------
// 📊 Stats Component
// -------------------------------------
// Displays travel packing statistics.
// Will later show how many items are packed and unpacked.
function Stats() {
  return (
    <footer className="stats">
      <em>👜 You have X items on your list, and you already packed X (x%)</em>
    </footer>
  );
}

export default App;

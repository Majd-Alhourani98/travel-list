# 🌴 Far Away - Travel Packing List App

A beautiful and intuitive React-based travel packing list application that helps you organize and track what you need for your next adventure! 🎒✈️

![Travel Packing List](https://img.shields.io/badge/React-19.2.0-blue?style=flat-square&logo=react)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

## ✨ Features

- **📝 Add Items**: Easily add items to your packing list with custom quantities (1-20)
- **✅ Track Progress**: Check off items as you pack them with visual strike-through
- **🗑️ Delete Items**: Remove individual items or clear the entire list
- **📊 Statistics**: Real-time tracking of total items and packing progress percentage
- **🔀 Sort Options**: Sort your list by:
  - Input order (original order)
  - Description (alphabetical)
  - Packed status (unpacked items first)
- **🎨 Beautiful UI**: Modern, travel-themed design with warm colors and custom fonts
- **📱 Responsive**: Works seamlessly on desktop and mobile devices

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/travel-list.git
```

2. Navigate to the project directory:
```bash
cd travel-list
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## 📁 Project Structure

```
travel-list/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── App.js              # Main application component
│   ├── Form.js             # Form component for adding items
│   ├── Item.js             # Individual item component
│   ├── Logo.js             # App logo/header component
│   ├── PackingList.js      # List container with sorting
│   ├── Stats.js            # Statistics footer component
│   ├── index.js            # Application entry point
│   └── index.css           # Global styles
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

## 🛠️ Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## 💻 Technologies Used

- **React 19.2.0** - UI library
- **React DOM** - DOM rendering
- **CSS3** - Styling with custom fonts and responsive grid layout
- **Create React App** - Build tooling and configuration

## 🎨 Design Features

- Custom Google Fonts (Monoton for title, Quicksand for body)
- Warm color palette inspired by travel and adventure
- CSS Grid layout for responsive design
- Smooth user interactions and visual feedback

## 📝 How to Use

1. **Add Items**: Enter an item description and select a quantity (1-20), then click "Add"
2. **Mark as Packed**: Click the checkbox next to an item to mark it as packed
3. **Delete Items**: Click the ❌ button to remove an individual item
4. **Sort List**: Use the dropdown to sort items by different criteria
5. **Clear List**: Click "Clear List" to remove all items (with confirmation)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Create React App](https://github.com/facebook/create-react-app)
- Fonts provided by [Google Fonts](https://fonts.google.com/)

---

Made with ❤️ for travelers who want to stay organized! 🌍✈️

# 🎯 GoSlate - Your Daily Planner

**Reset. Replan. Rerise.**

A modern, elegant daily planning application built with React and Tailwind CSS. GoSlate helps you organize your tasks and meal planning with a beautiful, premium interface.

## ✨ Features

### 🗓️ Task Management
- **Daily Task Planning** - Add, edit, and delete tasks for specific dates
- **Task Completion Tracking** - Mark tasks as completed with visual indicators
- **Date Selection** - Navigate through different dates to plan ahead
- **Local Storage** - All tasks are saved locally in your browser
- **Show/Hide Completed** - Toggle visibility of finished tasks

### 🍽️ Meal Planning
- **Weekly Menu System** - Pre-planned meals for every day of the week
- **Special Sunday Menus** - Alternating special menus for Sundays
- **Four Meal Categories** - Breakfast, Lunch, Snacks, and Dinner
- **Visual Meal Cards** - Color-coded meal display with emojis
- **Date-Specific Menus** - Different meals based on the selected date

### 🎨 Premium Design
- **Modern UI/UX** - Clean, elegant interface with Tailwind CSS
- **Responsive Design** - Works perfectly on all device sizes
- **Gradient Backgrounds** - Beautiful color transitions throughout
- **Smooth Animations** - Hover effects and transitions
- **Glass Morphism** - Modern frosted glass effects
- **Professional Typography** - Carefully chosen fonts and spacing

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/prog-ayushman/goslate.git
   cd goslate
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install required packages**
   ```bash
   npm install react-icons uuid
   # or
   yarn add react-icons uuid
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000` (or the port shown in your terminal)

## 📱 Usage

### Task Management
1. **Select a Date** - Use the date picker to choose your planning date
2. **Add Tasks** - Enter your task in the input field and click "Save Task"
3. **Complete Tasks** - Check the checkbox next to completed tasks
4. **Edit Tasks** - Click the edit (pencil) icon to modify a task
5. **Delete Tasks** - Click the delete (trash) icon to remove a task
6. **Filter View** - Use the "Show Completed Tasks" checkbox to toggle visibility

### Meal Planning
1. **Switch to Meals Tab** - Click the "🍽️ Meal Planning" tab
2. **Select Date** - Choose any date to see the planned meals
3. **View Menu** - See breakfast, lunch, snacks, and dinner for that day
4. **Special Sundays** - Notice the "Sunday Special" badge for alternating Sunday menus

## 🛠️ Built With

- **[React](https://reactjs.org/)** - Frontend framework
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[React Icons](https://react-icons.github.io/react-icons/)** - Beautiful icons
- **[UUID](https://www.npmjs.com/package/uuid)** - Unique ID generation
- **[Vite](https://vitejs.dev/)** - Build tool and dev server

## 📂 Project Structure

```
goslate/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Navigation header with logo
│   │   └── Footer.jsx      # Footer with branding
│   ├── App.jsx            # Main application component
│   ├── index.css          # Global styles and Tailwind imports
│   └── main.jsx           # React app entry point
├── public/
│   └── index.html         # HTML template
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
└── README.md             # This file
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue gradient (`from-blue-600 to-blue-700`)
- **Secondary**: Teal accent (`from-green-600 to-teal-600`)
- **Background**: Soft gradients (`from-slate-50 to-blue-50`)
- **Cards**: White with subtle colored accents

### Typography
- **Headers**: Bold, gradient text effects
- **Body**: Clean, readable fonts
- **Interactive**: Hover effects and smooth transitions

## 📅 Meal Planning System

### Weekly Schedule
- **Monday**: Traditional Indian breakfast, varied lunch/dinner
- **Tuesday**: North Indian specialties
- **Wednesday**: South Indian focus with biriyani dinner
- **Thursday**: Mixed regional cuisines
- **Friday**: Comfort foods and street food snacks
- **Saturday**: Continental breakfast, Indian mains

### Sunday Specials
- **Odd Sundays** (1st, 3rd): Dosa breakfast, Biryani lunch
- **Even Sundays** (2nd, 4th): Dosa breakfast, Pulao dinner
- **5th Sunday**: Follows odd pattern

## 💾 Data Storage

All task data is stored locally in your browser using `localStorage`. This means:
- ✅ Your data persists between sessions
- ✅ No server required - works offline
- ✅ Privacy-focused - data stays on your device
- ⚠️ Data is browser-specific
- ⚠️ Clearing browser data will remove tasks

## 🔧 Customization

### Adding New Meals
Edit the `weeklyMeals` and `sundayMeals` objects in `App.jsx` to customize the meal planning system.

### Styling Changes
Modify Tailwind classes in the components to change colors, spacing, and effects.

### New Features
The modular component structure makes it easy to add new features like:
- Categories for tasks
- Priority levels
- Meal customization
- Export functionality

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Ayushman Pradhan**
- LinkedIn: [Ayushman Pradhan](https://www.linkedin.com/in/ayushman-pradhan-6a7a64328)
- Built with ❤️ for productivity and organization

## 🙏 Acknowledgments

- Inspired by the need for better daily planning tools
- Thanks to the React and Tailwind CSS communities
- Special appreciation for clean, minimal design principles

---

**Start your day right with GoSlate! ✨**

*Every moment is a fresh beginning. Reset. Replan. Rerise.*
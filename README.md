# 🎯 GoSlate - Your Daily Planner

**Reset. Replan. Rerise.**

A modern, elegant daily planning application built with React and Tailwind CSS. GoSlate helps you organize your tasks, meal planning, and class schedules with attendance tracking—all in a beautiful, premium interface.

![GoSlate Logo](https://img.shields.io/badge/GoSlate-Premium%20Planner-blue?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAKICAK)

## ✨ Features

### 🗓️ Task Management
- **Daily Task Planning** - Add, edit, and delete tasks for specific dates
- **Task Completion Tracking** - Mark tasks as completed with visual indicators
- **Date Selection** - Navigate through different dates to plan ahead
- **Local Storage** - All tasks are saved locally in your browser
- **Show/Hide Completed** - Toggle visibility of finished tasks

### 🍽️ Meal Planning
- **Weekly Menu System** - Pre-planned meals for every day of the week
- **Special Sunday Menus** - Alternating special menus for Sundays (1st/3rd vs 2nd/4th)
- **Four Meal Categories** - Breakfast, Lunch, Snacks, and Dinner
- **Visual Meal Cards** - Color-coded meal display with emojis
- **Date-Specific Menus** - Different meals based on the selected date's day of week

### 📚 Class Schedule & Attendance Tracking
- **Recurring Weekly Classes** - Add classes once for a day (e.g., Friday) and they appear on all future Fridays
- **Daily Attendance Marking** - Mark attendance as Present ✅, Absent ❌, or Off Day 🏖️
- **Attendance Statistics** - View overall attendance percentage for each subject
- **Color-Coded Progress** - Visual indicators (green ≥75%, yellow 60-74%, red <60%)
- **Sunday Off Day** - No classes can be added on Sundays
- **Smart Calculations** - Attendance percentage excludes "Off Day" from calculation
- **Class Management** - Edit or delete classes from your schedule

### 🎨 Premium Design
- **Modern UI/UX** - Clean, elegant interface with Tailwind CSS
- **Responsive Design** - Works perfectly on all device sizes (mobile, tablet, desktop)
- **Gradient Backgrounds** - Beautiful color transitions throughout
- **Smooth Animations** - Hover effects and transitions for better interaction
- **Glass Morphism** - Modern frosted glass effects
- **Professional Typography** - Carefully chosen fonts and spacing

### 📱 Progressive Web App (PWA)
- **Installable** - Install on home screen like a native app
- **Offline Support** - Works without internet connection
- **Fast Loading** - Cached assets for instant access
- **Cross-Platform** - Works on iOS, Android, Windows, and Mac

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

### Class Schedule & Attendance
1. **Switch to Classes Tab** - Click the "📚 Classes" tab
2. **Add Classes** - Enter your class name and click "Add Class"
   - Classes appear on ALL instances of that day (e.g., add on Friday = every Friday)
   - Sunday is always a day off (no classes can be added)
3. **Mark Attendance** - For each class, select Present ✅, Absent ❌, or Off Day 🏖️
4. **View Statistics** - Scroll down to see overall attendance for each subject
   - **Attendance % = Present / (Present + Absent) × 100**
   - Off Days are excluded from the calculation
   - Green (≥75%): Good attendance
   - Yellow (50-74%): Warning
   - Red (<50%): Critical
5. **Delete Classes** - Click the trash icon to remove a class from all dates

## 🛠️ Built With

- **[React](https://reactjs.org/)** - Frontend framework for UI components
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework for styling
- **[React Icons](https://react-icons.github.io/react-icons/)** - Beautiful icon library
- **[UUID](https://www.npmjs.com/package/uuid)** - Unique ID generation for tasks
- **[Vite](https://vitejs.dev/)** - Modern build tool and dev server

## 📂 Project Structure

```
goslate/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation header with G logo
│   │   └── Footer.jsx          # Footer with branding
│   ├── App.jsx                 # Main application component
│   ├── index.css               # Global styles and Tailwind imports
│   └── main.jsx                # React app entry point
├── index.html                  # HTML template
├── manifest.json               # PWA manifest 
├── icon-192.png                # PWA icon 192x192 
├── icon-512.png                # PWA icon 512x512 
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration
└── README.md                   # This file
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: Blue gradient (`from-blue-600 to-blue-700`)
- **Secondary Teal**: Teal accent (`from-green-600 to-teal-600`)
- **Purple**: For classes tab (`from-purple-600 to-purple-700`)
- **Background**: Soft gradients (`from-slate-50 to-blue-50`)
- **Cards**: White with subtle colored accents and borders

### Typography
- **Headers**: Bold, gradient text effects (24-48px)
- **Body**: Clean, readable fonts (14-18px)
- **Interactive**: Hover effects and smooth transitions (300ms)

### Components
- **Tabs**: 3 main tabs - Tasks, Meals, Classes
- **Cards**: Rounded corners (16-24px), shadows, and borders
- **Buttons**: Gradient backgrounds, hover scale effects
- **Inputs**: Rounded borders, focus states with rings
- **Progress Bars**: Color-coded attendance visualization


## 💾 Data Storage

All data is stored locally in your browser using `localStorage`. This means:

✅ Your data persists between sessions  
✅ No server required - works completely offline  
✅ Privacy-focused - data stays on your device  
✅ Fast access - instant loading from local storage  

⚠️ Data is browser-specific (won't sync across browsers)  
⚠️ Clearing browser data will remove all tasks/attendance  

## 🔧 Customization

### Adding New Meals
Edit the `weeklyMeals` and `sundayMeals` objects in `App.jsx`:

```javascript
const weeklyMeals = {
  1: {
    breakfast: 'Your meal',
    lunch: 'Your meal',
    snacks: 'Your meal',
    dinner: 'Your meal'
  }
  // ... more days
}
```

### Styling Changes
Modify Tailwind classes in the components to change:
- Colors (use Tailwind color palette)
- Spacing (padding, margins)
- Borders and shadows
- Animations and transitions

### New Features
The modular component structure makes it easy to add:
- Task categories and tags
- Task priority levels
- Recurring tasks
- Meal customization per user
- Export functionality (PDF/CSV)
- Multi-user support
- Push notifications

## 📱 Making It a PWA (Progressive Web App)

To make GoSlate installable on devices:

1. **Create `manifest.json`** 
2. **Add icons** (192x192 and 512x512 PNG)
3. **Register service worker** in `main.jsx`
4. **Add install button** 


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

- Inspired by the personal need for better daily planning tools
- Thanks to the React and Tailwind CSS communities
- Special appreciation for clean, minimal design principles
- Influenced by productivity and academic planning concepts

---

## Advanced Features Overview

### Smart Date Management
- Automatic day-of-week detection
- Recurring class scheduling without duplication
- Historical attendance tracking

### Attendance Intelligence
- Percentage calculations excluding off days
- Color-coded performance indicators
- Individual and aggregate statistics

### Offline-First Architecture
- All data stored locally
- No external API calls required
- Works perfectly without internet

### Responsive Mobile UI
- Touch-friendly buttons and inputs
- Optimized for small screens
- Scales beautifully on tablets and desktops

---

**Start your day right with GoSlate! ✨**

*Every moment is a fresh beginning. Reset. Replan. Rerise. 🎯*

For questions or support, please open an issue on GitHub or reach out to the developer.

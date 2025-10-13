import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { FaEdit, FaCalendarAlt, FaUtensils } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])
  const [activeTab, setActiveTab] = useState('tasks') // 'tasks' or 'meals'

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = JSON.parse(todoString)
      setTodos(todos)
    }
  }, [])

  const saveToLS = (updatedTodos) => {
    localStorage.setItem("todos", JSON.stringify(updatedTodos || todos))
  }

  const toggleFinished = () => {
    setshowFinished(!showFinished)
  }

  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos)
    saveToLS(newTodos)
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos)
    saveToLS(newTodos)
  }

  const handleAdd = () => {
    const newTodos = [...todos, { id: uuidv4(), todo, isCompleted: false, date: selectedDate }]
    setTodos(newTodos)
    setTodo("")
    saveToLS(newTodos)
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => item.id === id)
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    saveToLS(newTodos)
  }

  const weeklyMeals = {
    1: {
      breakfast: 'Idli, Ghuguni, Coconut and Groundnut chutney, Tea',
      lunch: 'Rice, Roti, Dal, Sagamuga, Aloo Baigan Bharta, Dahi Salad',
      snacks: 'Mix-veg Chowmein, Coffee',
      dinner: 'Rice, Roti, Dal, Soyabean-Aloo Kasa, Cabbage-Matar, Fruit Custard'
    },
    2: {
      breakfast: 'Chole, Bhature, Coffee',
      lunch: 'Rice, Roti, Dal, Navaratna Kurma, Dahi Kadhi, Papad',
      snacks: 'Dahi-Vada Aludum',
      dinner: 'Rice, Roti, Dal, Paneer Bhurji, Aloo-Beans Bhaja, Sweet Curd'
    },
    3: {
      breakfast: 'Masala Upama, Ghuguni, Coconut and Groundnut chutney, Tea',
      lunch: 'Rice, Roti, Dal, Mushroom and Green-Peas Masala, Aloo-Cauliflower Bhaja, Salad',
      snacks: 'Paneer Patties, Coffee',
      dinner: 'Mix-Veg Dum Biriyani, Paneer Curry, Raita, Rasagola'
    },
    4: {
      breakfast: 'Vada, Aloo-dum, Coconut and Groundnut chutney, Tea',
      lunch: 'Rice, Roti, Dal, Potal-Kurma, Cabbage-Matar Bhaja, Papad',
      snacks: 'Pav-Bhaji, Tea',
      dinner: 'Rice, Roti, Dal, Paneer Tadka, Finger chips, Salad, Kalajamun'
    },
    5: {
      breakfast: 'Bread, Jam, Banana, Tea',
      lunch: 'Rice, Roti, Dal, Cauliflower-Aloo Kasa, Tomato Chutney, Papad',
      snacks: 'Pampdi Chat, Coffee',
      dinner: 'Rice, Roti, Dal, Paneer-Butter Masala, Seasonal Bhaja, Malpua'
    },
    6: {
      breakfast: 'Uttapam, Sambar, Coconut and Groundnut chutney, Coffee',
      lunch: 'Rice, Roti, Dal, Chena Curry, Cabbage-Beans-Green Peas Bhaja, Salad',
      snacks: 'Vada Pav, Tea',
      dinner: 'Rice, Roti, Dal, Mushroom Besar, Chilli Soya, Papad'
    }
  };

  const sundayMeals = {
    odd: {
      breakfast: 'Onion Masala Dosa, Coconut and Groundnut chutney, Tea',
      lunch: 'Veg Dum Biryani, Paneer Curry, Raita, Papad',
      snacks: 'Corn Salad, Tea',
      dinner: 'Rice, Roti, Dal, Mix-Veg Ghanta with paneer, Dahi-bundi, Ice-Cream'
    },
    even: {
      breakfast: 'Onion Masala Dosa, Coconut and Groundnut chutney, Tea',
      lunch: 'Rice, Roti, Dal, Mix-Veg Ghanta with paneer, BitterGourd chips, Salad',
      snacks: 'Samosa, Pudina Chutney, Coffee',
      dinner: 'Mushroom Pulao, Dal fry, Puri, Paneer-MatarAloo Curry, Papad, Ice-Cream'
    }
  };

  const getSundayType = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDay();

    if (day !== 0) return null; // Not a Sunday

    const dateNum = date.getDate();
    const weekOfMonth = Math.ceil(dateNum / 7);

    // 1st and 3rd Sunday - Same menu
    if (weekOfMonth === 1 || weekOfMonth === 3) return 'odd';
    // 2nd and 4th Sunday - Same menu
    if (weekOfMonth === 2 || weekOfMonth === 4) return 'even';

    // 5th Sunday - use odd pattern
    return 'odd';
  }

  const getMealForDate = (dateString) => {
    const date = new Date(dateString);
    const dayOfWeek = date.getDay(); // 0 = Sunday, 1 = Monday, etc.

    if (dayOfWeek === 0) {
      // Sunday - use alternating pattern
      const sundayType = getSundayType(dateString);
      return sundayMeals[sundayType];
    } else {
      // Monday to Saturday - use fixed weekly pattern
      return weeklyMeals[dayOfWeek];
    }
  }

  const filteredTodos = todos.filter(item => item.date === selectedDate)
  const currentMeal = getMealForDate(selectedDate)
  const sundayType = getSundayType(selectedDate)

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  }

  const getDayName = (dateString) => {
    const date = new Date(dateString);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
            
            {/* Header Section */}
            <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600 px-8 py-12 text-center">
              <h1 className='font-bold text-4xl md:text-5xl text-white mb-4 drop-shadow-lg'>
                GoSlate - Your Daily Planner
              </h1>
              <p className="text-blue-100 text-lg font-medium">
                Organize your tasks and meals with elegance ✨
              </p>
            </div>

            <div className="p-8">
              {/* Date Selector */}
              <div className="bg-gradient-to-r from-white to-blue-50 rounded-2xl p-6 mb-8 shadow-lg border border-blue-100">
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <FaCalendarAlt className="text-blue-700 text-xl" />
                    </div>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="border-2 border-blue-200 rounded-xl px-4 py-3 font-semibold text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-fit">
                    <span className="text-gray-700 font-bold text-lg">{formatDate(selectedDate)}</span>
                    {sundayType && (
                      <div className="mt-2">
                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                          🎉 Sunday Special
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex gap-4 mb-8">
                <button
                  onClick={() => setActiveTab('tasks')}
                  className={`flex-1 py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                    activeTab === 'tasks'
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-2xl shadow-blue-300/50'
                      : 'bg-white text-blue-700 hover:bg-blue-50 shadow-lg border-2 border-blue-200'
                  }`}
                >
                  📝 Tasks & Goals
                </button>
                <button
                  onClick={() => setActiveTab('meals')}
                  className={`flex-1 py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                    activeTab === 'meals'
                      ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-2xl shadow-green-300/50'
                      : 'bg-white text-green-700 hover:bg-green-50 shadow-lg border-2 border-green-200'
                  }`}
                >
                  🍽️ Meal Planning
                </button>
              </div>

              {/* Tasks Tab */}
              {activeTab === 'tasks' && (
                <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-xl border border-blue-100">
                  <div className="addTodo mb-8">
                    <h2 className='text-3xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text mb-6'>
                      Add a New Task
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1 relative">
                        <input
                          placeholder='What do you want to accomplish today?'
                          onChange={handleChange}
                          value={todo}
                          type="text"
                          className='w-full border-2 border-blue-200 rounded-2xl px-6 py-4 text-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-white/80 backdrop-blur-sm'
                        />
                      </div>
                      <button
                        onClick={handleAdd}
                        disabled={todo.length <= 3}
                        className='bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl hover:from-blue-700 hover:to-blue-800 disabled:from-gray-300 disabled:to-gray-400 px-8 py-4 text-lg font-bold text-white whitespace-nowrap shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:transform-none disabled:cursor-not-allowed'
                      >
                        ✨ Save Task
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center mb-6 p-4 bg-blue-50 rounded-xl">
                    <input
                      className='w-5 h-5 rounded focus:ring-2 focus:ring-blue-500'
                      id='show'
                      onChange={toggleFinished}
                      type="checkbox"
                      checked={showFinished}
                    />
                    <label className='ml-3 font-semibold text-gray-700 cursor-pointer' htmlFor="show">
                      Show Completed Tasks
                    </label>
                  </div>

                  <div className='h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent mb-8'></div>

                  <h2 className='text-3xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text mb-6'>
                    Your Tasks for Today
                  </h2>
                  
                  <div className="todos space-y-4">
                    {filteredTodos.length === 0 && (
                      <div className='text-center text-gray-500 py-16 bg-gradient-to-br from-blue-50 to-white rounded-2xl border-2 border-dashed border-blue-200'>
                        <div className="text-6xl mb-4">🎯</div>
                        <p className="text-xl font-semibold">No tasks for this date</p>
                        <p className="text-gray-400 mt-2">Add your first task above to get started!</p>
                      </div>
                    )}
                    {filteredTodos.map(item => {
                      return (showFinished || !item.isCompleted) && (
                        <div
                          key={item.id}
                          className={`todo flex items-center justify-between p-6 rounded-2xl shadow-lg border-2 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl ${
                            item.isCompleted 
                              ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' 
                              : 'bg-gradient-to-r from-white to-blue-50 border-blue-200 hover:border-blue-300'
                          }`}
                        >
                          <div className='flex items-center gap-4 flex-1'>
                            <input
                              name={item.id}
                              onChange={handleCheckbox}
                              type="checkbox"
                              checked={item.isCompleted}
                              className="w-6 h-6 cursor-pointer rounded focus:ring-2 focus:ring-blue-500"
                            />
                            <div className={`flex-1 text-lg ${
                              item.isCompleted 
                                ? "line-through text-gray-500 font-medium" 
                                : "text-gray-800 font-semibold"
                            }`}>
                              {item.todo}
                            </div>
                            {item.isCompleted && (
                              <span className="text-2xl">✅</span>
                            )}
                          </div>
                          <div className="buttons flex gap-3">
                            <button
                              onClick={(e) => handleEdit(e, item.id)}
                              className='bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 p-3 text-white rounded-xl transition-all duration-300 transform hover:scale-110 shadow-lg'
                            >
                              <FaEdit className="text-lg" />
                            </button>
                            <button
                              onClick={(e) => handleDelete(e, item.id)}
                              className='bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 p-3 text-white rounded-xl transition-all duration-300 transform hover:scale-110 shadow-lg'
                            >
                              <AiFillDelete className="text-lg" />
                            </button>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Meals Tab */}
              {activeTab === 'meals' && (
                <div className="bg-gradient-to-br from-white to-green-50 rounded-2xl p-8 shadow-xl border border-green-100">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 bg-green-100 rounded-full">
                      <FaUtensils className="text-green-700 text-2xl" />
                    </div>
                    <h2 className='text-3xl font-bold text-transparent bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text'>
                      {getDayName(selectedDate)}'s Menu
                    </h2>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    {/* Breakfast */}
                    <div className="meal-item bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl drop-shadow-lg">🌅</span>
                        <h3 className="text-2xl font-bold text-orange-700">Breakfast</h3>
                      </div>
                      <p className="text-gray-800 text-lg font-medium leading-relaxed">{currentMeal.breakfast}</p>
                    </div>

                    {/* Lunch */}
                    <div className="meal-item bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl drop-shadow-lg">☀️</span>
                        <h3 className="text-2xl font-bold text-yellow-700">Lunch</h3>
                      </div>
                      <p className="text-gray-800 text-lg font-medium leading-relaxed">{currentMeal.lunch}</p>
                    </div>

                    {/* Snacks */}
                    <div className="meal-item bg-gradient-to-br from-pink-50 to-rose-50 border-2 border-pink-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl drop-shadow-lg">🍪</span>
                        <h3 className="text-2xl font-bold text-pink-700">Snacks</h3>
                      </div>
                      <p className="text-gray-800 text-lg font-medium leading-relaxed">{currentMeal.snacks}</p>
                    </div>

                    {/* Dinner */}
                    <div className="meal-item bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl drop-shadow-lg">🌙</span>
                        <h3 className="text-2xl font-bold text-indigo-700">Dinner</h3>
                      </div>
                      <p className="text-gray-800 text-lg font-medium leading-relaxed">{currentMeal.dinner}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default App

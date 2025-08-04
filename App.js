import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaListAlt, FaBullseye, FaRegEdit, FaRegCalendarAlt, FaDumbbell, FaSun } from 'react-icons/fa';

const tabs = [
  { name: 'Tasks', icon: <FaListAlt /> },
  { name: 'Goals', icon: <FaBullseye /> },
  { name: 'Plans', icon: <FaRegEdit /> },
  { name: 'Calendar', icon: <FaRegCalendarAlt /> },
  { name: 'Fitness', icon: <FaDumbbell /> },
  { name: 'Morning Routine', icon: <FaSun /> }
];

const dummyData = {
  Tasks: ['Math homework', 'Read 10 pages'],
  Goals: ['Run 5km this week'],
  Plans: ['Study plan for exams'],
  Calendar: ['Meeting with mentor'],
  Fitness: ['Tennis practice'],
  'Morning Routine': ['Drink water', 'Meditate 5 min']
};

export default function App() {
  const [activeTab, setActiveTab] = useState('Tasks');

  return (
    <div className="flex flex-col min-h-screen">
      <motion.header
        className="p-4 text-center text-2xl font-bold bg-gradient-to-r from-blush to-sky text-white shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        LifeFlow
      </motion.header>

      <main className="flex-1 p-4">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-lg shadow-md p-4"
        >
          <h2 className="text-xl font-semibold mb-3">{activeTab}</h2>
          <ul className="list-disc list-inside">
            {dummyData[activeTab].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </motion.div>
      </main>

      <nav className="flex justify-around p-3 bg-white shadow-inner">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`flex flex-col items-center text-sm ${activeTab === tab.name ? 'text-sky' : 'text-gray-500'}`}
            onClick={() => setActiveTab(tab.name)}
          >
            <span className="text-lg">{tab.icon}</span>
            {tab.name}
          </button>
        ))}
      </nav>
    </div>
  );
}
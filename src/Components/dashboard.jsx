// import { useState } from 'react';
// import { LayoutDashboard, Home, Users, Settings } from 'lucide-react';
// import { Button } from './components/ui/button';  // Assuming you have a Button component inside the ui folder

// export default function Dashboard() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   // Toggle sidebar visibility
//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Dashboard Sidebar */}
//       <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 ${isSidebarOpen ? 'block' : 'hidden'}`}>
//         <div className="w-64 bg-white p-4">
//           <div className="flex justify-between items-center mb-8">
//             <span className="text-2xl font-bold text-purple-600">Dashboard</span>
//             <button onClick={toggleSidebar} className="text-gray-600">
//               &times;
//             </button>
//           </div>
//           <ul className="space-y-4">
//             <li>
//               <a href="#" className="text-gray-800 hover:text-purple-600 flex items-center gap-2">
//                 <LayoutDashboard /> Dashboard
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-gray-800 hover:text-purple-600 flex items-center gap-2">
//                 <Users /> Users
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-gray-800 hover:text-purple-600 flex items-center gap-2">
//                 <Settings /> Settings
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex flex-1 flex-col">
//         {/* Dashboard Header */}
//         <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4">
//           <div className="flex justify-between items-center">
//             <div className="text-xl font-bold">Welcome to your Dashboard</div>
//             <div className="flex items-center gap-4">
//               <button className="bg-purple-700 text-white px-4 py-2 rounded">Notifications</button>
//               <button className="bg-purple-700 text-white px-4 py-2 rounded">Profile</button>
//             </div>
//           </div>
//         </header>

//         {/* Dashboard Content */}
//         <main className="flex-1 p-6">
//           <div className="bg-gray-100 p-6 rounded-lg">
//             <h2 className="text-xl font-bold text-gray-900 mb-4">Your Dashboard Content</h2>
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <p className="text-gray-600">This is where your dashboard content will go. You can add widgets, statistics, etc.</p>
//             </div>
//           </div>
//         </main>

//         {/* Dashboard Footer */}
//         <footer className="bg-gradient-to-br from-purple-900 to-indigo-900 text-white py-6 mt-12">
//           <div className="text-center">
//             <p>&copy; 2024 PharmaSafe Expert. All rights reserved.</p>
//           </div>
//         </footer>
//       </div>

//       {/* Back to website button */}
//       <div className="fixed bottom-6 left-6 z-50">
//         <Button 
//           onClick={() => window.location.href = '/'} // Go back to website
//           className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg"
//         >
//           <Home className="size-4 mr-2" />
//           Retour au Site
//         </Button>
//       </div>
//     </div>
//   );
// }


import { useState } from 'react';
import "../Styles/dashboard.css"
export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Toggle sidebar visibility
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="dashboard-container">
      {/* Dashboard Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <span className="sidebar-title">Dashboard</span>
          <button onClick={toggleSidebar} className="close-btn">&times;</button>
        </div>
        <ul className="sidebar-links">
          <li>
            <a href="#" className="sidebar-link">Dashboard</a>
          </li>
          <li>
            <a href="#" className="sidebar-link">Users</a>
          </li>
          <li>
            <a href="#" className="sidebar-link">Settings</a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Dashboard Header */}
        <header className="dashboard-header">
          <div className="header-left">
            <h1>Welcome to your Dashboard</h1>
          </div>
          <div className="header-right">
            <button className="header-btn">Notifications</button>
            <button className="header-btn">Profile</button>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="dashboard-body">
          <div className="dashboard-content">
            <h2>Your Dashboard Content</h2>
            <div className="dashboard-widget">
              <p>This is where your dashboard content will go. You can add widgets, statistics, etc.</p>
            </div>
          </div>
        </main>

        {/* Dashboard Footer */}
        <footer className="dashboard-footer">
          <p>&copy; 2024 PharmaSafe Expert. All rights reserved.</p>
        </footer>
      </div>

      {/* Back to website button */}
      <div className="back-to-website">
        <button className="back-btn" onClick={() => window.location.href = '/'}>
          Back to Website
        </button>
      </div>
    </div>
  );
}

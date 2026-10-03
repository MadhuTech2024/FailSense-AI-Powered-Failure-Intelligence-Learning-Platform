import { Routes, Route } from 'react-router-dom'; // 1. Fixed import
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard'
import Practice from './pages/Practice'
import ProblemSolver from './pages/ProblemSolver' 
import Failures from './pages/Failures'
import Insights from './pages/Insights'
import Recommendations from './pages/Recommendations'
import Profile from './pages/Profile'
const App = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

    <Route path="/practice" element={<Profile />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
  <Route element={<DashboardLayout />}>
    <Route path="/dashboard" element={<Dashboard />} />

  <Route path="/practice" element={<Insights />} />
      <Route
      path="/practice/:id"
      element={<ProblemSolver />}
    />

   <Route path="/failures" element={<Failures />} />

   <Route path="insights" element={<Insights />} />

    <Route
      path="/recommendations"
      element={<Recommendations />}
    />

    <Route
      path="/profile"
      element={<Profile />}
    />
  </Route>
</Route>
    </Routes>
  );
};

export default App;

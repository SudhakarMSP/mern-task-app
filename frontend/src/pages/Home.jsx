import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to TaskTracker</h1>
        <p>
          A simple and powerful task management app built with the MERN stack.
          Organize your work, set priorities, and track progress with ease.
        </p>
        {user ? (
          <Link to="/dashboard" className="btn btn-primary btn-lg">
            Go to Dashboard
          </Link>
        ) : (
          <div className="hero-actions">
            <Link to="/register" className="btn btn-primary btn-lg">
              Get Started
            </Link>
            <Link to="/login" className="btn btn-outline btn-lg">
              Login
            </Link>
          </div>
        )}
      </div>
      <div className="features">
        <div className="feature-card">
          <h3>🔐 Secure Auth</h3>
          <p>JWT-based authentication to keep your tasks private.</p>
        </div>
        <div className="feature-card">
          <h3>✅ Full CRUD</h3>
          <p>Create, read, update, and delete tasks effortlessly.</p>
        </div>
        <div className="feature-card">
          <h3>🎯 Priorities & Status</h3>
          <p>Organize by priority and track status from pending to completed.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
import { lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import LoadingSpinner from "./pages/LoadingSpinner";
import ErrorBoundary from "./ErrorBoundary";

// lazy pages
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Settings = lazy(() => import("./pages/Settings"));
const Profile = lazy(() => import("./pages/Profile"));

function ErrorFallback() {
  return (
    <div>
      <h2>Something went wrong</h2>
      <p>Please reload or try again</p>
    </div>
  );
}

function App() {
  return (
    <>
      <nav style={{ padding: "1rem" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/settings">Settings</Link> |{" "}
        <Link to="/profile">Profile</Link>
      </nav>

      <ErrorBoundary fallback={<ErrorFallback />}>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
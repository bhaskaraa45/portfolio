import './App.css';
import HomePage from './pages/home.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFoundPage from './pages/PageNotFound.tsx'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path='/'
            element={<HomePage />}
          ></Route>

          <Route
            exact
            path='/about'
            element={<HomePage />}
          ></Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

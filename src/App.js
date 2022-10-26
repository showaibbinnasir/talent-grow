import router from './router/router'
import './App.css';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

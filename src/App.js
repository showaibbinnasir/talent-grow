import router from './router/router'
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { useContext } from 'react';
import { AuthProvider } from './context/AuthContext/AuthContext';


function App() {
  const {dark} = useContext(AuthProvider);
  console.log(dark)
  return (
    <div className="App">
      <div className={ dark ? 'bg-slate-400' : 'bg-white'}>
      <RouterProvider router={router}></RouterProvider>
      </div>
      
    </div>
  );
}

export default App;

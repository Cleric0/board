import './App.css'; 
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home';
import { DetailsPage } from './pages/pageForWindow';
import {useRootStore} from './store/use-root-store'
import { useEffect } from 'react';


function App() {
  const {todoStore} = useRootStore()

  useEffect(() => {
    todoStore.loadTodos()
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/details' element={<DetailsPage/>}></Route>
      </Routes>
    </>
  );
}

export default App;

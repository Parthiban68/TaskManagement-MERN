import { useState } from 'react';
import Home from './pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AllTasks from './pages/AllTasks';
import ImportantTask from './pages/ImportantTask';
import CompletedTasks from './pages/CompletedTasks';
import IncompletedTasks from './pages/IncompletedTasks';

function App() {
  return (
      <div className='bg-sand text-white h-screen p-2'>
        <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}> 
          <Route index element={<AllTasks/>}/> 
          <Route path='/importanttasks' element={<ImportantTask/>}/> 
          <Route path='/completedtasks' element={<CompletedTasks/>}/> 
          <Route path='/incompletedtasks' element={<IncompletedTasks/>}/> 
          </Route>
        </Routes>
        </BrowserRouter> 
    </div>
  )
}

export default App

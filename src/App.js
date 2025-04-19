import './App.css';
import AddBooks from './components/AddBooks';
import SearchBook from './components/SearchBook';
import ViewAllBooks from './components/ViewAllBooks';

import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div>

<BrowserRouter>

<Routes>

  

<Route path='/' element={ <AddBooks/> } /> 
<Route path='/search' element={ <SearchBook/> } /> 
<Route path='/viewall' element={ <ViewAllBooks/> } /> 

</Routes>



</BrowserRouter>




    </div>
  );
}

export default App;
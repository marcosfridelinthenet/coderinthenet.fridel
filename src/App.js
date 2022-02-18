import NavBar from './components/NavBar';
import Cart from './components/Cart';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer></ItemListContainer>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/category/:categoryId" element={<ItemListContainer></ItemListContainer>}></Route>
          <Route path="/item/:itemId" element={<ItemDetailContainer></ItemDetailContainer>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <ItemListContainer/> */}
      {/* <ItemDetailContainer></ItemDetailContainer> */}
      {/* <ItemList></ItemList>  */}
      {/* <ItemCount></ItemCount> */}
    </div>
  );
}




export default App;

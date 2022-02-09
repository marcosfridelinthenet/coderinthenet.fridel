import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemList from './components/ItemList';
import ItemDetailContainer from './components/ItemDetailContainer';




function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <ItemListContainer/> */}
      <ItemDetailContainer></ItemDetailContainer>
      {/* <ItemList></ItemList>  */}
      {/* <ItemCount></ItemCount> */}
    </div>
  );
}




export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AddProduct from './Component/funcComponent';

function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <h1 className='mb-5'>Product Inventory Management</h1>
        <AddProduct/>
      </div>
    </div>
  );
}

export default App;

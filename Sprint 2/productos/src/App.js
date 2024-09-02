import './App.css';
import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import { ThemeProvider } from './ThemeContext';
import { useTheme } from './ThemeContext';

function ProductBrandRow({brand, key}) {
  return (
    <tr>
      <th colSpan={6} className='bg-gray-400 text-white py-2'>{brand}</th>
    </tr>
  )
}

function ProductRow({product, key}) {
  return (
    <tr>
      <td className='px-4 py-2'>{product.title}</td>
      <td className='px-4 py-2'>{product.description}</td>
      <td className='px-4 py-2'>{product.stock}</td>
      <td className='px-4 py-2'>{product.price}</td>
      <td className='px-4 py-2'>{product.rating}</td>
      <td className='px-4 py-2'> 
        <img src={product.thumbnail} alt={product.title} className='w-12 h-12'/>
      </td>
    </tr>
  )
}

function ProductTable({products, filterText, filterExpensive}) {
  const rows = [];
  let lastBrand = null;

  products.forEach(product => {
    if(product.title.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if(filterExpensive === true && product.price >= 500) {
      return;
    }
    if(product.brand !== lastBrand) {
      rows.push(
        <ProductBrandRow brand={product.brand} key={product.id}/>
      )
    }
    rows.push(
      <ProductRow product={product} key={product.title}/>
    )
    lastBrand = product.brand;
  })

  return (
    <table className='w-full border-collapse border border-gray-400 mt-4'>
      <thead>
        <tr className='bg-gray-200'>
          <th className='px-4 py-2'>Nombre</th>
          <th className='px-4 py-2'>Descripcion</th>
          <th className='px-4 py-2'>Stock</th>
          <th className='px-4 py-2'>Precio</th>
          <th className='px-4 py-2'>Calificaciones</th>
          <th className='px-4 py-2'>Foto</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

function FilterableProductTable({products}) {
  const [filterText, setFilterText] = useState("");
  const [filterExpensive, setFilterExpensive] = useState(false);
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={`max-w-4xl mx-auto p-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <SearchBar 
        checkboxValue={filterExpensive} onChangeCheckboxValue={setFilterExpensive}
        onChangeTextValue={setFilterText} textValue={filterText}
      />
      {/* <p>{filterText}</p>
      <p>Estoy filtrando los caros? {filterExpensive ? 'Si': 'No'}</p> */}
      <ProductTable filterExpensive={filterExpensive} filterText={filterText} products={products}/>
    </div>
  )
}

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/category/smartphones')
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(
        error => console.error('Error: ', error)
      );
    // let res = await fetch('https://dummyjson.com/products/category/smartphones');
    // let data = await res.json();
  })

  return (
    <ThemeProvider>
      <FilterableProductTable products={products}/>
    </ThemeProvider>
  );
}

export default App;

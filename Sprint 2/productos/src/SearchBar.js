function SearchBar({onChangeTextValue, textValue, onChangeCheckboxValue, checkboxValue}) {
  return (
    <form className="mb-4 flex">
        <input
            className="mr-2"
            type="text"
            value={textValue}
            onChange={(e) => onChangeTextValue(e.target.value)}
            placeholder='Buscar...' />
        <br></br>
        <input 
            type='checkbox'
            className="mr-2"
            value={checkboxValue}
            onChange={(e) => onChangeCheckboxValue(e.target.checked)}/>
        Solo mostrar productos baratos (menores a 500)
    </form>
  )
}

export default SearchBar;
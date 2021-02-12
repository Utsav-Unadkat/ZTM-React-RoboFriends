const SearchBox = ({onSearchChange}) =>{
    return (
        <div className='pa2'>
            <input 
            className='pa 3 b--green bg-lightest-blue'
            type='Search' 
            placeholder='Search Robots'
            onChange={onSearchChange}
            />
        </div>
    );
}

export default SearchBox;
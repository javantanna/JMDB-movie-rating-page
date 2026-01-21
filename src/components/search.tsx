import React from 'react'

const Search = (props:{searchTerm:string,setSearchTerm:React.Dispatch<React.SetStateAction<string>>}) => {
  return (
    <div className="search">
        <div >
            <img src="./search.svg" alt="search" />
            <input type="text" placeholder="Search through 100s of movies" value={props.searchTerm} onChange={(event)=>props.setSearchTerm(event.target.value)} />
            
        </div>
        
    </div>


  )
}

export default Search
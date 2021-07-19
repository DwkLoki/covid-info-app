import { GrSearch } from "react-icons/gr";
import "./searchBar.scss";

const SearchBar = ({onChange, placeholder}) => {
    return (
        <div>
            {/* <div className="search container mt-5 mb-5 px-4"> */}
                <form className='search container d-flex justify-content-center mt-5 mb-4'>
                    <div className="search-bar d-flex align-items-center">
                        <GrSearch className='search-bar-icon' size='25' color='red'/>
                        <input className='search-bar-input' type='text' onChange={onChange} placeholder={placeholder} />
                    </div>
                </form>
            {/* </div> */}

        </div>
    )
}

export default SearchBar
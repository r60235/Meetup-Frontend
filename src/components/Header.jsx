import { Link } from "react-router-dom";  

const Header = ({ searchInput, setSearchInput }) => {

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchInput(value); 
    };

    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container py-3">
                    <Link to="/">
                        <img src="/2111553.png" alt="Meetup" width="60" height="51" />
                    </Link>
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search by title and tags"
                            aria-label="Search"
                            value={searchInput}  
                            onChange={handleSearchChange}  
                        />
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default Header;

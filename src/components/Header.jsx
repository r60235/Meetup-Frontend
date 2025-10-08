import {findEventByEventTitleAndTags} from "../pages/EventDetails"

const Header = () => {

    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container py-3">
                    <a className="navbar-brand" href="#">
                        <img src="meetup.svg" alt="Meetup" width="60" height="51"/>
                    </a>

                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" 
                            placeholder="Search by title and tags" 
                            aria-label="Search"
                            onChange={(e)=>findEventByEventTitleAndTags(e.target.value)}/>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Header;

import { useState } from "react";
import { Link } from "react-router-dom";  
import useFetch from "../useFetch";  
import Header from "../components/Header";  

const MainPage = () => {
    const [searchInput, setSearchInput] = useState("");
    const [eventTypeSelect, setEventType] = useState("All");

    const { data : events, loading, error } = useFetch("http://localhost:5001/events");

    const filteredEvents = events?.filter((ev) => {
        const matchesSearch = 
            ev.title.toLowerCase().includes(searchInput.toLowerCase()) || 
            ev.eventTags.find(tag => tag.toLowerCase().includes(searchInput.toLowerCase()));
        const matchesEventType = eventTypeSelect === 'All' || ev.type === eventTypeSelect;
        return matchesSearch && matchesEventType;
    });

    if (error) return <p>Error: {error}</p>;

    return (
        <div className="bg-light">
            <main className="container py-3">
                <Header searchInput={searchInput} setSearchInput={setSearchInput} />
                <div className="border-bottom border-dark mb-4"></div>
                {loading &&  <p>Loading...</p>}

                <div className="d-flex justify-content-between align-items-center">
                    <h1 className="display-2 fw-bold mb-5">Meetup Events</h1>
                    <div>
                        <select
                            className="form-select mb-3"
                            aria-label="Filter by event type"
                            value={eventTypeSelect}
                            onChange={(e) => setEventType(e.target.value)}
                        >
                            <option value="All">Select Event Type</option>
                            <option value="Online">Online</option>
                            <option value="Offline">Offline</option>
                        </select>
                    </div>
                </div>

                {/* carDs */}
                <div className="row">
                    {filteredEvents?.map((event) => (
                        <div className="col-md-4 mb-4" key={event._id}>
                            <div className="card rounded overflow-hidden">
                                {/* img */}
                                <Link to={`/event/${event._id}`} className="d-block">
                                    <div className="position-relative">
                                        <img 
                                            src={event.imgUrl} 
                                            className="card-img-top" 
                                            alt={event.title} 
                                        />
                                        <span className={`position-absolute top-0 start-0 m-2 badge rounded-pill ${event.type === 'Online' ? 'bg-success' : 'bg-danger'}`}>
                                            {event.type}
                                        </span>
                                    </div>
                                </Link>

                                {/* body */}
                                <div className="card-body">
                                    {/* date */}
                                    <p className="card-text text-muted small">
                                        {event.startDate} | {event.startTime}
                                    </p>
                                    
                                    {/* title */}
                                    <h5 className="card-title">{event.title}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default MainPage;

const MainPage = () => {
    return (
        <div className="bg-light">
            <main className="container py-3">
                <div className="border-bottom border-dark mb-4"></div>
                
                <div className="d-flex justify-content-between align-items-center">
                    <h1 className="display-2 fw-bold">Meetup Events</h1>
                    
                    <div>
                        <select className="form-select" aria-label="Filter by event type">
                            <option selected>Select Event Type</option>
                            <option value="Online">Online</option>
                            <option value="Offline">Offline</option>
                            <option value="Both">Both</option>
                        </select>
                    </div>
                </div>
            </main>    
        </div>
    );
}

export default MainPage;

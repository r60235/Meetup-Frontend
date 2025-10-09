import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import Header from "../components/Header";

const EventDetails = () => {
    const { id } = useParams();
    const { data: event, loading, error } = useFetch(`http://localhost:5001/event/${id}`);

    if (error) return <p>Error: {error}</p>;

    // missing event
    if (!event) return <p>No event found.</p>;

    return (
        <div className="bg-light">
            <div className="container py-3">
                <Header />
                <div className="border-bottom border-dark mb-4"></div>
                {loading && <p>Loading...</p>}
                
                
            </div>
        </div>
    );
};

export default EventDetails;

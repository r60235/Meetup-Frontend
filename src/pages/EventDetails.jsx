import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import Header from "../components/Header";

const EventDetails = () => {
    const { id } = useParams();
    const { data: event, loading, error } = useFetch(`https://meetup-backend-silk.vercel.app/event/${id}`);

    if (error) return <p>Error: {error}</p>;

    // missing event
    if (!event) return <p>No event found.</p>;

    return (
        <div className="bg-light">
            <div className="container py-3">
                <Header />
                <div className="border-bottom border-dark mb-4"></div>
                {loading && <p>Loading...</p>}

                <h1 className="display-5 fw-bold">{event.title}</h1>

                <div className="row mt-4">
                    {/* leFt */}
                    <div className="col-md-8">


                        <p className="mb-0">Hosted by: </p>
                        <h6><strong>{event.hostedBy || "Marketing Experts"}</strong></h6>
                        
                        {/* event Image */}
                        <img
                            src={event.eventImgUrl}
                            alt="Event Image"
                            className="img-fluid rounded"
                            style={{ height: '438px', objectFit: 'cover' }}
                        />

                        {/* 3vent details */}
                        <h3 className="fw-bold mt-3">Details:</h3>
                        <p>{event.details || "No additional details available."}</p>

                        {/* additional info */}
                        <h3 className="fw-bold mt-3">Additional Information:</h3>
                        <p><strong>Dress Code:</strong> {event.additionalInfo.dressCode || "Not specified"}</p>
                        <p><strong>Age Restriction:</strong> {event.additionalInfo.ageRestriction || "No restriction"}</p>

                        {/* tags */}
                        {event.eventTags && event.eventTags.length > 0 && (
                            <div className="mt-3">
                                <h5>Event Tags:</h5>
                                <div className="d-flex flex-wrap">
                                    {event.eventTags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="badge bg-secondary me-3 mb-3 fs-5 p-2"  
                                            style={{ borderRadius: '12px' }} 
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* right */}
                    <div className="col-md-4">
                        <div className="card shadow-sm border-0 bg-white mb-4">
                            <div className="card-body">
                                {/* dates  */}
                                <p>{event.startDate} at {event.startTime} to</p>
                                <p className="mt-0">{event.startTime} at {event.endTime}</p>
                              
                                <br />

                                {/* address */}
                                <p>{event.eventAddress || "Not provided"}</p>

                                <br />

                                {/* fee */}
                                <p> {event.eventTicketPrice === 0 ? "Free" : `$${event.eventTicketPrice}`}</p>
                            </div>
                        </div>

                        {/* speakers  */}
                        <h3 className="fw-bold mt-3">Speakers:</h3>
                        <div className="d-flex flex-column">
                            {event.speakerDetails && event.speakerDetails.length > 0 ? (
                                event.speakerDetails.map((speaker, index) => (
                                    <div key={index} className="card mb-3">
                                        <div className="card-body d-flex align-items-center">
                                            <img
                                                src={speaker.imgUrl || "/default-speaker.jpg"}
                                                alt={speaker.name}
                                                className="rounded-circle"
                                                style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                            />
                                            <div className="ms-3">
                                                <h5 className="card-title">{speaker.name}</h5>
                                                <p className="card-text">{speaker.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>No speakers listed.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;

import React, { useEffect, useState } from "react";
import styles from './ExistingEvents.module.sass';
import EventItem from "../EventItem/EventItem";

const ExistingEvents = (props) => {
    const {userId, eventData} = props;
    const [events, setEvents] = useState([]);

    const updateEvents = () => {
        setEvents(getAllEvents());
    }

    useEffect(() => {
        if (eventData) {
            let localStorageEvents = JSON.parse(localStorage.getItem(`${userId}`));
            if (localStorageEvents) {
                localStorageEvents.push(eventData);
            } else {
                localStorageEvents = [eventData];
            }
            localStorage.setItem(`${userId}`, JSON.stringify(localStorageEvents));
        } 
        setEvents(getAllEvents());
    }, [eventData])


    const getAllEvents = () => {
        const eventsList = [];
        const localStorageEvents = JSON.parse(localStorage.getItem(`${userId}`));
        if (localStorageEvents && localStorageEvents.length > 0) {
            localStorageEvents.sort((a, b) => new Date(a.eventStart) - new Date(b.eventStart))
            for (const event of localStorageEvents) {
                eventsList.push(
                    <EventItem
                        key={event.eventId}
                        updateEvents={updateEvents}
                        userId={userId}
                        eventId={event.eventId}
                        eventName={event.eventName}
                        eventStart={event.eventStart}
                        eventEnd={event.eventEnd}
                        eventNotification={event.eventNotification}/>)
            }
        }
        return eventsList;
    }

    return (
        <div className={styles.eventList}>            
            <div className={styles.title}>
                All scheduled events
                <span>{' '}<i className="fas fa-stopwatch"></i></span>
            </div>
            {(events.length === 0) && <h2>No scheduled events</h2>}
            <ul>
                {events}
            </ul>
        </div>

    );
}

export default ExistingEvents;


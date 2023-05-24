import React, { useRef, useEffect, useState } from "react";
import styles from './EventItem.module.sass';
import moment from 'moment';
import { toast } from 'react-toastify';

const EventItem = (props) => {
    const {
        eventName,
        eventStart,
        eventEnd,
        eventNotification,
        eventId,
        userId,
        updateEvents } = props;

    const [editing, setEditing] = useState(false);
    const [editedName, setEditedName] = useState(eventName);
    const [editedStart, setEditedStart] = useState(eventStart);
    const [editedEnd, setEditedEnd] = useState(eventEnd);
    const [completed, setCompleted] = useState(false);

    const ref = useRef(); 

    const turnOnNotification = () => {
          ref.current.classList.add(styles.notification);
          toast.error(`The ${eventName} event will end soon!`);
      };

    const deleteEvent = () => {
        const userEvents = JSON.parse(localStorage.getItem(`${userId}`));
        const index = userEvents.findIndex(event => event.eventId === eventId);
        if (index >= 0) {
            userEvents.splice(index, 1);
            localStorage.setItem(`${userId}`, JSON.stringify(userEvents));
        }
        updateEvents();
    }

    const startEditing = () => {
        setEditing(true);
    }

    const cancelEditing = () => {
        setEditing(false);
        setEditedName(eventName);
        setEditedStart(eventStart);
    }

    const saveEditing = () => {
        const userEvents = JSON.parse(localStorage.getItem(`${userId}`));
        const index = userEvents.findIndex(event => event.eventId === eventId);
        if (index >= 0) {
            userEvents[index].eventName = editedName;
            userEvents[index].eventStart = editedStart;
            localStorage.setItem(`${userId}`, JSON.stringify(userEvents));
        }
        setEditing(false);
        updateEvents();
    }

    useEffect(() => {
        const isEventCompleted = moment(eventEnd).isBefore(moment());
        setCompleted(isEventCompleted);

        if (isEventCompleted) {
            turnOnNotification();
          }

      }, [eventEnd]);

    useEffect(() => {
        const diffNotification = moment(eventNotification).diff(moment());
        const timerNotification = setTimeout(turnOnNotification, diffNotification);
        
        return () => {
          clearTimeout(timerNotification);
        };
      }, [eventNotification]);

    return (    
        <>
            <li
                ref={ref}
                className={`${styles.container} ${completed ? styles.completed : ""} ${
                    editing ? styles.editing : ""
                }`}
                >
                <div className={styles.eventBody}>
                    {editing ? (
                        <>
                            <input
                                type="text"
                                value={editedName}
                                onChange={(e) => setEditedName(e.target.value)}
                                className={styles.eventTitle}
                            />
                            <input
                                type="datetime-local"
                                value={moment(editedStart).format("YYYY-MM-DDTHH:mm")}
                                onChange={(e) => setEditedStart(e.target.value)}
                                className={styles.eventStart}
                            />
                            <input
                                type="datetime-local"
                                value={moment(editedEnd).format("YYYY-MM-DDTHH:mm")}
                                onChange={(e) => setEditedEnd(e.target.value)}
                                className={styles.eventEnd}
                            />
                        </>
                    ) : (
                        <>
                            <div className={styles.eventTitle}>{eventName}</div>
                            <span>{moment(eventStart).format('DD MMM YYYY HH:mm')}</span>
                            {' '}
                            <span>{moment(eventEnd).format('DD MMM YYYY HH:mm')}</span>
                        </>
                    )}
                </div>
                <div className={styles.actions}>
                    {editing ? (
                        <>
                            <i onClick={saveEditing} className={`fas fa-solid fa-save ${styles.saveIcon}`}></i>
                            <i onClick={cancelEditing} className={`fas fa-solid fa-times ${styles.cancelIcon}`}></i>
                        </>
                    ) : (
                        <i onClick={startEditing} className={`fas fa-solid fa-edit ${styles.editIcon}`}></i>
                    )}
                    <i onClick={deleteEvent} className={`fas fa-solid fa-trash ${styles.deleteIcon}`}></i>
                </div>
            </li>
        </>
    );
}

export default EventItem;


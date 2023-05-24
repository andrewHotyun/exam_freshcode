import React, {useState} from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import CreateEvent from '../../components/Events/CreateEvent/CreateEvent';
import ExistingEvents from '../../components/Events/ExistingEvents/ExistingEvents';
import styles from './Events.module.sass';

const Events = (props) => {
    const {id} = props;

    const [eventData, setEventData] = useState();

    const updateEvent = (value) => {
        setEventData(value)
    }

    return (
        <>
            <Header />
            <div className={styles.events}>
                <CreateEvent userId={id} updateEvent={updateEvent}/>
                <ExistingEvents userId={id} eventData={eventData}/>
            </div>
        </>
    );
}


const mapStateToProps = (state) => {
    const {userStore: {data}} = state;
    return data;
};

export default connect(mapStateToProps)(Events)



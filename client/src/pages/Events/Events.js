import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import CreateEvent from '../../components/Events/CreateEvent/CreateEvent';
import styles from './Events.module.sass';

const Events = (props) => {
    const {id} = props;

    const updateEvent = (value) => {
    }

    return (
        <>
            <Header />
            <div className={styles.events}>
                <CreateEvent userId={id} updateEvent={updateEvent} />
            </div>
        </>
    );
}


const mapStateToProps = (state) => {
    const {userStore: {data}} = state;
    return data;
};

export default connect(mapStateToProps)(Events)
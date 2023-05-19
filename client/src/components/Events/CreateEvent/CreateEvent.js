import React from 'react';
import { Form, Formik } from 'formik';
import moment from 'moment';
import eventSchema from '../../../validators/validationSchems';
import FormInput from '../../FormInput/FormInput';
import styles from './CreateEvent.module.sass';

const CreateEvent = (props) => {
  const {userId, updateEvent} = props;

  const createEvent = (values, {resetForm}) => {
    const addEvent = {
      id: `${userId}${Date.now()}`,
      name: values.name,
      start: values.start,
      notification: values.notification
    };
    updateEvent(addEvent);
    resetForm();
  };

  return (
    <div className={styles.event}>
      <h1>Create Event</h1>
      <Formik
        onSubmit={createEvent}
        initialValues={{
          name: '',
          start: '',
          notification: ''
        }}
        validationSchema={eventSchema.EventSchema}
      >
        <Form>
          <label>Name:</label>
          <FormInput
            name="name"
            type="text"
            placeholder="Enter event name"
            classes={{
              input: styles.input,
              warning: styles.required,
              valid: styles.valid,
              notValid: styles.notValid,
            }}
          />
          <label>Start date:</label>
          <FormInput
            name="start"
            type="datetime-local"
            min={moment().format('YYYY-MM-DDTHH:mm')}
            classes={{
              input: styles.input,
              warning: styles.required,
              valid: styles.valid,
              notValid: styles.notValid,
            }}
          />
          <label>Notification date:</label>
          <FormInput
            name="notification"
            type="datetime-local"
            min={moment().format('YYYY-MM-DDTHH:mm')}
            classes={{
              input: styles.input,
              warning: styles.required,
              valid: styles.valid,
              notValid: styles.notValid,
            }}
          />
          <button type="submit">Create Event</button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateEvent;


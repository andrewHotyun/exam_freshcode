import React from 'react';
import { connect } from 'react-redux';
import CONSTANTS from '../../constants';
import CustomerDashboard from '../../components/CustomerDashboard/CustomerDashboard';
import CreatorDashboard from '../../components/CreatorDashboard/CreatorDashboard';
import Header from '../../components/Header/Header';
import { Redirect } from 'react-router-dom';

const Dashboard = (props) => {
  const { role, history } = props;
    if (!role) {
      return <Redirect to="/login"/>
    }
  return (
    <div>
      <Header />
      {
        role === CONSTANTS.CUSTOMER
        ? <CustomerDashboard history={history} match={props.match} />
        : <CreatorDashboard history={history} match={props.match} />
      }
    </div>
  );
};

const mapStateToProps = (state) => state.userStore.data;

export default connect(mapStateToProps)(Dashboard);

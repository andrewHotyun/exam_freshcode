import React from 'react';
import { connect } from 'react-redux';
import CONSTANTS from '../../constants';
import CustomerDashboard from '../../components/CustomerDashboard/CustomerDashboard';
import CreatorDashboard from '../../components/CreatorDashboard/CreatorDashboard';
import Header from '../../components/Header/Header';

const Dashboard = (props) => {
  const { role, history } = props;
  const dashboardRender = () => {
    if (role === CONSTANTS.CUSTOMER) {
      return <CustomerDashboard history={history} match={props.match} />;
    } else if (role === CONSTANTS.CREATOR) {
      return <CreatorDashboard history={history} match={props.match} />;
    } else if (role === CONSTANTS.MODERATOR) {
      return <CustomerDashboard history={history} match={props.match} role={props.role} />;
    }
  }
  return (
    <div>
      <Header />
      {dashboardRender()}
    </div>
  );
};

const mapStateToProps = (state) => state.userStore.data;

export default connect(mapStateToProps)(Dashboard);

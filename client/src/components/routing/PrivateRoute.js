import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Navigate} from 'react-router-dom'
import Spinner from '../layouts/Spinner';

const PrivateRoute = ({component:Component,auth:{isAuthenticated,loading},...rest}) => {
    // if(isAuthenticated && !loading) return <Component/>
    // return <Navigate to="/login"/>

    if (loading) return <Spinner/>
    if(isAuthenticated) return <Component/>

    return <Navigate to='/login'/>

}

PrivateRoute.propTypes = {
    auth:PropTypes.object.isRequired,
}

const mapStateToProps = state =>({
    auth:state.auth
})

export default connect(mapStateToProps)(PrivateRoute)

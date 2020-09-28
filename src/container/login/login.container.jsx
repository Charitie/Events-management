import { connect } from 'react-redux';
import { loginAsync } from '../../redux/actions/auth';
import { Login } from './login';

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (user) => {
      dispatch(loginAsync(user))
    }
  }
}

const LoginContainer =  connect(mapStateToProps, mapDispatchToProps)(Login)

export default LoginContainer;

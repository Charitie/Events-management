import { connect } from 'react-redux';
import { signupAsync } from '../../redux/actions/auth';
import { Signup } from './signup';

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signup: (user) => {
      dispatch(signupAsync(user))
    }
  }
}

const SignupContainer =  connect(mapStateToProps, mapDispatchToProps)(Signup)

export default SignupContainer;

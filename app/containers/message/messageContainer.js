import { connect } from 'react-redux';
import Message from '../../components/message/message';

const mapStateToProps = state => ({
  routes: state.routes,
});

export default connect(mapStateToProps)(Message);

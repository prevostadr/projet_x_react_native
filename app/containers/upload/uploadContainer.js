import { connect } from 'react-redux';
import Upload from '../../components/upload/upload';

const mapStateToProps = state => ({
  routes: state.routes,
});

export default connect(mapStateToProps)(Upload);

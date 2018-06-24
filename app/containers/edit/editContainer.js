import { connect } from 'react-redux';
import Edit from '../../components/edit/edit';

const mapStateToProps = state => ({
  routes: state.routes,
});

export default connect(mapStateToProps)(Edit);

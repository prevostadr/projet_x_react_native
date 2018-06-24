import { connect } from 'react-redux';
import Search from '../../components/play-video/play-video';

const mapStateToProps = ({ routes }) => ({ routes });
export default connect(mapStateToProps)(Search);

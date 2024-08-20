import PropTypes from 'prop-types';

const Title = ({ handleAddUser }) => (
  <div className='title'>
    <h1>Album List</h1>
    <button onClick={handleAddUser}>Add</button>
  </div>
);

Title.propTypes = {
  handleAddUser: PropTypes.func.isRequired,
};

export default Title;

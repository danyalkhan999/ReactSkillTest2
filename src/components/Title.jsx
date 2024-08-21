import PropTypes from 'prop-types';

// Title component that displays the main title and an "Add" button
const Title = ({ handleAddUser }) => (
  <div className='title'>
    {/* Main heading for the album list */}
    <h1>Album List</h1>
    {/* Button to trigger adding a new user */}
    <button onClick={handleAddUser}>Add</button>
  </div>
);

// Defining prop types for the Title component to ensure correct data types are passed
Title.propTypes = {
  handleAddUser: PropTypes.func.isRequired, // handleAddUser must be a function
};

// Exporting the Title component for use in other parts of the application
export default Title;

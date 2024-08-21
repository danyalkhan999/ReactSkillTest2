import PropTypes from 'prop-types';

// EditUserForm component for editing or adding a user
const EditUserForm = ({ selectedUser, editedUser, handleInputChange, handleSubmit, setSelectedUser }) => (
  // Render the form only if a user is selected
  selectedUser && (
    <div className="form-container">
      {/* Display a dynamic title based on whether the user is being edited or added */}
      <h4 className="title">{selectedUser.id ? 'Edit User' : 'Add User'}</h4>
      {/* Form to edit or add a user */}
      <form onSubmit={handleSubmit}>
        {/* User ID input field */}
        <label className="userid">
          User ID:
          <input
            type="text"
            name="userId"
            value={editedUser.userId}
            onChange={handleInputChange}
          />
        </label>
        {/* ID input field, disabled if editing an existing user */}
        <label className="id">
          ID:
          <input
            type="text"
            name="id"
            value={editedUser.id}
            onChange={handleInputChange}
            disabled={!!selectedUser.id}  // Disable ID field if editing an existing user
          />
        </label>
        {/* Title input field */}
        <label className="para">
          Title:
          <input
            className="titleInput"
            type="text"
            name="title"
            value={editedUser.title}
            onChange={handleInputChange}
          />
        </label>
        {/* Buttons to save or cancel the form */}
        <div className="button">
          {/* Save button to submit the form */}
          <button type="submit">Save</button>
          {/* Cancel button to reset the selected user */}
          <button type="button" className='cancel' onClick={() => setSelectedUser(null)}>Cancel</button>
        </div>
      </form>
    </div>
  )
);

// Defining prop types for the EditUserForm component to ensure correct data types are passed
EditUserForm.propTypes = {
  selectedUser: PropTypes.object, // selectedUser can be null or an object
  editedUser: PropTypes.shape({
    userId: PropTypes.string.isRequired, // userId must be a string
    id: PropTypes.string.isRequired, // id must be a string
    title: PropTypes.string.isRequired, // title must be a string
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired, // handleInputChange must be a function
  handleSubmit: PropTypes.func.isRequired, // handleSubmit must be a function
  setSelectedUser: PropTypes.func.isRequired, // setSelectedUser must be a function
};

// Exporting the EditUserForm component for use in other parts of the application
export default EditUserForm;

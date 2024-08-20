import PropTypes from 'prop-types';

const EditUserForm = ({ selectedUser, editedUser, handleInputChange, handleSubmit, setSelectedUser }) => (
  selectedUser && (
    <div className="form-container">
      <h4 className="title">{selectedUser.id ? 'Edit User' : 'Add User'}</h4>
      <form onSubmit={handleSubmit}>
        <label className="userid">
          User ID:
          <input
            type="text"
            name="userId"
            value={editedUser.userId}
            onChange={handleInputChange}
          />
        </label>
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
        <div className="button">
          <button type="submit">Save</button>
          <button type="button" className='cancel' onClick={() => setSelectedUser(null)}>Cancel</button>
        </div>
      </form>
    </div>
  )
);



EditUserForm.propTypes = {
  selectedUser: PropTypes.object,
  editedUser: PropTypes.shape({
    userId: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  setSelectedUser: PropTypes.func.isRequired,
};

export default EditUserForm;

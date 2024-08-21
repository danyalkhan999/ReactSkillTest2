// Importing necessary libraries and components
import PropTypes from 'prop-types';
import CollectionsIcon from '@mui/icons-material/Collections';

// AlbumItem component to display an album's details with options to update or delete
const AlbumItem = ({ person, updateUser, deleteUser, borderColor, bgColor }) => (
  <div>
    {/* Main article containing the album item information */}
    <article className="album-item" style={{ borderColor: borderColor }}>
      {/* Container for album details */}
      <div className="item-info">
        <header className="id">
          {/* Display the user ID with a customizable background color */}
          <h4 className='album-key' style={{backgroundColor: bgColor}}>{person.userId}</h4>
          {/* Display the album ID with an icon */}
          <h4 className="identity album-key"><CollectionsIcon /> {person.id}</h4>
        </header>
        {/* Display the album title */}
        <p className="item-text">
           {person.title}
        </p>
        {/* Container for the Update and Delete buttons */}
        <div className="btn-container">
          {/* Button to update the user's album details */}
          <button onClick={() => updateUser(person)}>Update</button>
          {/* Button to delete the user's album */}
          <button onClick={() => deleteUser(person.id)}>Delete</button>
        </div>
      </div>
    </article>
  </div>
);

// Defining prop types for the AlbumItem component to ensure correct data types are passed
AlbumItem.propTypes = {
  person: PropTypes.shape({
    userId: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  updateUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  borderColor: PropTypes.string,
  bgColor: PropTypes.string,
};

// Exporting the AlbumItem component for use in other parts of the application
export default AlbumItem;


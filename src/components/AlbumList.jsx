// Importing necessary libraries and components
import PropTypes from 'prop-types';
import AlbumItem from './AlbumItem';

// AlbumList component to display a list of AlbumItems
const AlbumList = ({ users, updateUser, deleteUser, colors }) => (
  <div className="section-center">
    {/* Loop through each user in the users array */}
    {users.map((person, index) => {
      
      // Log the type of person.userId to the console for debugging purposes
      console.log("iser", typeof(person.userId));
      
      // Determine the color for the current item based on its index
      const color = colors[index % colors.length];
      
      return (
        <AlbumItem 
          // Unique key for each AlbumItem, using index for simplicity
          key={index}
          // Passing down the user data as props to AlbumItem
          person={person}
          // Passing the updateUser function as a prop to handle updates
          updateUser={updateUser}
          // Passing the deleteUser function as a prop to handle deletions
          deleteUser={deleteUser}
          // Passing the border color and background color from the colors array
          borderColor={color.border}
          bgColor={color.bgColor}
        />
      );
    })}
  </div>
);

// Defining prop types for the AlbumList component to ensure correct data types are passed
AlbumList.propTypes = {
  users: PropTypes.arrayOf(
    // Expecting an array of user objects with specific properties
    PropTypes.shape({
      userId: PropTypes.number.isRequired, // userId must be a number
      id: PropTypes.number.isRequired, // id must be a number
      title: PropTypes.string.isRequired, // title must be a string
    })
  ).isRequired,
  updateUser: PropTypes.func.isRequired, // updateUser must be a function
  deleteUser: PropTypes.func.isRequired, // deleteUser must be a function
  colors: PropTypes.arrayOf(
    // Expecting an array of color objects with specific properties
    PropTypes.shape({
      id: PropTypes.number.isRequired, // id must be a number
      border: PropTypes.string.isRequired, // border must be a string
      bgColor: PropTypes.string.isRequired, // bgColor must be a string
    })
  ).isRequired,
};

// Exporting the AlbumList component for use in other parts of the application
export default AlbumList;

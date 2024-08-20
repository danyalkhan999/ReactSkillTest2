import { useEffect, useState } from 'react';
import Title from './Title';
import AlbumList from './AlbumList';
import EditUserForm from './EditUserForm';

const Detail = () => {
  // State to hold the list of users
  const [users, setUsers] = useState([]);

  // State to hold the currently selected user (for editing or adding)
  const [selectedUser, setSelectedUser] = useState(null);

  // State to hold the form data for the edited or newly added user
  const [editedUser, setEditedUser] = useState({
    userId: '',
    id: '',
    title: '',
  });

  // State to determine if the form is in edit mode or add mode
  const [isEditing, setIsEditing] = useState(false);

  // Array of color themes used for album items
  const colors = [
    { id: 1, border: "#ff0a54", bgColor: "#f7cad0" },
    { id: 2, border: "#2d6a4f", bgColor: "#b7e4c7" },
    { id: 3, border: "#495057", bgColor: "#e9ecef" },
    { id: 4, border: "#023e8a", bgColor: "#ade8f4" },
    { id: 5, border: "#606f49", bgColor: "#dcebca" },
  ];

  // Fetch the user data when the component mounts
  useEffect(() => {
    getUsersDetail();
  }, []);

  // Function to fetch user data from an API
  const getUsersDetail = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/albums');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Function to delete a user by their ID
  const deleteUser = async (itemId) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/albums/${itemId}`, {
        method: 'DELETE',
      });
      setUsers(users.filter((user) => user.id !== itemId));
    } catch (error) {
      console.log(error);
    }
  };

  // Function to set the form into edit mode with the selected user's data
  const updateUser = (user) => {
    setIsEditing(true);
    setSelectedUser(user);
    setEditedUser(user);
  };

  // Function to handle input changes in the form
  const handleInputChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  // Function to handle form submission for adding or editing a user
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEditing) {
        // If in edit mode, update the existing user
        await fetch(`https://jsonplaceholder.typicode.com/albums/${selectedUser.id}`, {
          method: 'PUT',
          body: JSON.stringify(editedUser),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
        // Update the user list with the edited user data
        setUsers(users.map((user) => (user.id === selectedUser.id ? editedUser : user)));
      } else {
        // If not in edit mode, add a new user
        const response = await fetch('https://jsonplaceholder.typicode.com/albums', {
          method: 'POST',
          body: JSON.stringify(editedUser),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
        const newUser = await response.json();
        setUsers([...users, newUser]);
      }

      // Reset the form and close it
      setSelectedUser(null); // This will close the form container
      setEditedUser({ userId: '', id: '', title: '' }); // Clear the form fields
      setIsEditing(false); // Reset the editing state

    } catch (error) {
      console.log(error);
    }
  };

  // Function to handle adding a new user by opening the form in add mode
  const handleAddUser = () => {
    setIsEditing(false); // Ensure the form is in add mode
    setSelectedUser({ userId: '', id: '', title: '' }); // Open the form with empty fields
    setEditedUser({ userId: '', id: '', title: '' }); // Clear the form fields
  };

  return (
    <>
      {/* Title component, includes the "Add" button to open the form in add mode */}
      <Title handleAddUser={handleAddUser} />

      {/* AlbumList component to display the list of users with update and delete options */}
      <AlbumList
        users={users}
        updateUser={updateUser}
        deleteUser={deleteUser}
        colors={colors}
      />

      {/* EditUserForm component to display the form for editing or adding a user */}
      <EditUserForm
        selectedUser={selectedUser}
        editedUser={editedUser}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        setSelectedUser={setSelectedUser}
      />
    </>
  );
}

export default Detail;

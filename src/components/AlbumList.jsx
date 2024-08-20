// import React from 'react';
import PropTypes from 'prop-types';
import AlbumItem from './AlbumItem';

const AlbumList = ({ users, updateUser, deleteUser, colors }) => (
  <div className="section-center">
    {users.map((person, index) => {

      console.log("iser", typeof(person.userId))
      const color = colors[index % colors.length];
      return (
        <AlbumItem 
          key={index}
          person={person}
          updateUser={updateUser}
          deleteUser={deleteUser}
          borderColor={color.border}
          bgColor={color.bgColor}
        />
      );
    })}
  </div>
);

AlbumList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  updateUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      border: PropTypes.string.isRequired,
      bgColor: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AlbumList;

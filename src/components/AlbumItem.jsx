// import React from 'react';
import PropTypes from 'prop-types';
import CollectionsIcon from '@mui/icons-material/Collections';

const AlbumItem = ({ person, updateUser, deleteUser, borderColor, bgColor }) => (
  <div>
    <article className="album-item" style={{ borderColor: borderColor}}>
      {/* <img src="60111.jpg" className="photo" alt="dummy-photo" /> */}
      <div className="item-info">
        <header className="id">
          <h4 className='album-key' style={{backgroundColor: bgColor}}>{person.userId}</h4>
          <h4 className="identity album-key"><CollectionsIcon /> {person.id}</h4>
        </header>
        <p className="item-text">
           {person.title}
        </p>
        <div className="btn-container">
          <button onClick={() => updateUser(person)}>Update</button>
          <button onClick={() => deleteUser(person.id)}>Delete</button>
        </div>
      </div>
    </article>
  </div>
);

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

export default AlbumItem;

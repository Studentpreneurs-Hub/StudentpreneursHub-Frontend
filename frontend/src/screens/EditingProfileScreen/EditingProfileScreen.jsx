import "../EditingProfileScreen/EditingProfileScreen.css"
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import profileImg from "../../assets/profile_picture.png"

const EditingProfileScreen = () => {
  return (
    <Container className="Edit">
      <div className="edit--img">
        <img className="profile-img" src={profileImg} alt="Profile Img" />
        <span className="edit--btns">
            <Button className="edit-btn" variant="outline-dark">Update New Picture</Button>
            <Button className="edit-btn" variant="outline-dark" >Delete</Button>
        </span>
      </div>
    </Container>
  );
};

export default EditingProfileScreen;

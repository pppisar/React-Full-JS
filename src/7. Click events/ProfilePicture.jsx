function ProfilePicture() {
  const imageUrl = "./src/assets/profile.jpg";

  const handleClick = (e) => (e.target.style.display = "none");

  return (
    <img
      className="profile__image"
      onClick={(e) => handleClick(e)}
      src={imageUrl}
      alt="Profile picture"
    />
  );
}

export default ProfilePicture;

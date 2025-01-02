function Profile({ avatar, username, tag, location, followers, views, likes }) {
  return (
    <div className="container">
      <div className="card-container">
        <div className="card-content">
          <img className="card-img" src={avatar} alt="User avatar" />
          <p>{username}</p>
          <p>@{tag}</p>
          <p>{location}</p>
        </div>

        <ul className="follower-container">
          <li className="follower-li">
            <span>Followers</span>
            <span>{followers}</span>
          </li>
          <li className="follower-li">
            <span>Views</span>
            <span>{views}</span>
          </li>
          <li className="follower-li">
            <span>Likes</span>
            <span>{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Profile;

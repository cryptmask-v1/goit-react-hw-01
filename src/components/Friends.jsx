const Friends = ({ friends }) => {
  return (
    <div className="friends-container">
      {friends.map((friend) => {
        return (
          <div className="friends-list" key={friend.id}>
            <img
              className="friend-avatar"
              src={friend.avatar}
              alt="Avatar"
              width="65"
            />
            <p
              style={{
                color: "black",
                fontSize: "25px",
                fontWeight: "500",
                margin: "0px",
              }}
            >
              {friend.name}
            </p>
            {friend.isOnline ? (
              <p style={{ color: "green", fontSize: "16px", margin: "0px" }}>
                Online
              </p>
            ) : (
              <p style={{ color: "red", fontSize: "16px", margin: "0px" }}>
                Offline
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default Friends;

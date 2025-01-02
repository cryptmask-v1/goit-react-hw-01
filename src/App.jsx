import "./App.css";
import "./Module.css";
import Friends from "./components/Friends.jsx";
import Profile from "./components/Profile";
import Tables from "./components/Tables";
import userData from "./components/userData.js";
import friends from "./components/friendsData.js";
import transactions from "./components/tableData.js";

function App() {
  return (
    <div
      style={{
        display: "flex",
        alingItems: "center",
        flexDirection: "column",
        gap: "50px",
      }}
    >
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes}
      />
      <Friends friends={friends} />
      <Tables transactions={transactions} />
    </div>
  );
}

export default App;

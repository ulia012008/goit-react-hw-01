import "./App.css";

import userData from "../userData.json";
import { Profile } from "./Profile";
import friends from "../friends.json";
import { FriendList } from "./FriendList";

import transactions from "../transactions.json";
import TransactionHistory from "./TransactionHistory";

function App() {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;

import react from "react";
import "./styles.css";

function Nav({notifNum, markAsRead}) {
    return <nav>
        <h4>Notifications <span>{notifNum}</span></h4>
        <button onClick={()=> markAsRead()}>Mark as read</button>
    </nav>
}

export default Nav;
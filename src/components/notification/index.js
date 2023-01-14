import React from "react";
import "./styles.css";
import App from "../../App";

function Notification({ image, notifier, action, event, time, isOpened, id, readNotif }) {
  const setEvent = () => {
    if (action.includes("follow")) {
      return 0;
    } else if (action.includes("group") || action.includes("recent post")) {
      return 1;
    } else if (action.includes("private message")) {
      return 2;
    } else {
      return 3;
    }
  };

  return (
    <div
      onClick = {()=>  readNotif(id)}
      style={isOpened ? { backgroundColor: "transparent" } : {}}
      className="notifContainer"
      >
      <img src={image} alt="Mark-Webber" />
      <div style={{width: "100%"}}>
        <div className="notifContent">
          <div>
            <p>
              <span className="notifName">{notifier}</span> {action}{" "}
              {![0, 2, 3].includes(setEvent()) && (
                <span className="event">{event}</span>
              )}{" "}
              {isOpened ? null : <span className="notifDot"></span>}
            </p>
            <p className="time">{time}</p>
          </div>
          {setEvent() === 3 && <div>
                <img src={event} alt={action} />
            </div>}
        </div>
        {setEvent() === 2 && <div className="message">{event}</div>}
      </div>
    </div>
  );
}

export default Notification;

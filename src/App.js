import react, { useState,useMemo } from "react";
import "./App.css";
import Nav from "./components/nav";
import Notification from "./components/notification";
import notificationData from "./data/notifications";

function App() {
  const [data, setData] = useState(notificationData);



  const notif = useMemo(()=> {
    let num = 0;
    data.forEach(notification => {
      if(notification.isOpened === false){
        num++;
      }
    });
    return num;
    
  },[data])




  const markAsRead = ()=> {
    const newData = data.map(d => {
        d.isOpened = true;
        return d;
    });

    setData(newData);
  }

  const readNotif = (id)=> {
    const currentData = data.map(d => {
      if(id === d.id) {
        d.isOpened = !d.isOpened;
      }
      return d;
    })

    setData(currentData);
  }

  return (
    <div className="container">
      <Nav notifNum={notif} markAsRead={markAsRead}/>

      {data &&
        data.map(({ image, notifier, id, event, action, time, isOpened}) => (
          <Notification
            key={id}
            id = {id}
            image={image}
            notifier={notifier}
            action={action}
            event={event}
            time={time}
            isOpened={isOpened}
            readNotif={readNotif}
          />
        ))}
    </div>
  );
}



export default App;

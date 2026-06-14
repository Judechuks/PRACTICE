import { useState, useEffect } from "react";
import io from "socket.io-client";
import Swal from "sweetalert2";

const socket = io("http://localhost:3001");

function App() {
  const [notifications, setNotifications] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    // Grant notification permission
    const notificationPermission = () => {
      if (
        Notification.permission === "default" ||
        Notification.permission === "denied"
      ) {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            Swal.fire({
              icon: "success",
              text: "Notification permission granted",
              theme: "auto",
            });
          } else {
            Swal.fire({
              title: "Allow Notification Permission",
              text: "You need to grant permission to receive notifications from us!",
              icon: "info",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Ok, try now!",
              cancelButtonText: "No Don't",
              theme: "auto",
            }).then((result) => {
              if (result.isConfirmed) {
                Notification.requestPermission();
              } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
              ) {
                Swal.fire({
                  title: "Cancelled",
                  text: "Your decision is respected!",
                  icon: "success",
                  theme: "auto",
                });
              }
            });
          }
        });
      }
    };

    notificationPermission();

    socket.on("pushNotification", (data) => {
      console.log("Notification Recieved", data);

      // send notification
      if (Notification.permission === "granted") {
        new Notification("New Notification", {
          body: data.message,
          icon: "https://via.placeholder.com/50",
        });
      }
      setNotifications((prevNotifications) => [...prevNotifications, data]);
    });

    return () => {
      socket.off("pushNotification");
    };
  }, []);

  const handleSendNotification = () => {
    if (value.trim()) {
      fetch("http://localhost:3001/notify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: value }),
      })
        .then((res) => res.json())
        .then((data) =>
          Swal.fire({ icon: "success", text: data.message, theme: "auto" })
        );
    } else {
      Swal.fire({
        icon: "error",
        text: "Please enter a message",
        theme: "auto",
      });
    }
    setValue("");
    return;
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-lg mx-auto bg-gray-600 p-4 rounded">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-300 mb-3 text-center">
          Push Notification
        </h1>
        <article className="mb-2 flex items-center border border-gray-200 rounded focus-within:ring-blue-500 focus-within:ring-2">
          <input
            type="text"
            className="px-4 py-2 rounded outline-none"
            placeholder="Enter your message"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <button
            className="flex- px-4 py-2 rounded text-white bg-blue-500 hover:bg-blue-600 cursor-pointer"
            // onClick={() => console.log("Notification sent")}>
            onClick={handleSendNotification}>
            Send Notification
          </button>
        </article>
        <ul>
          {notifications.map((notification, index) => (
            <li key={index}>{notification.message}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default App;

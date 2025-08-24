import React, { createContext, useState, useEffect, useRef } from "react";

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const intervalRef = useRef(null);
  const [running, setRunning] = useState(true);


  const addNotification = (message) => {
    setNotifications((prev) => [
      ...prev,
      { id: Date.now(), message, read: false },
    ]);
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const stopNotifications = () => {
    clearInterval(intervalRef.current);
    setRunning(false);
  };


  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        addNotification("🔔 You have a new message!");
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [running]);

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        addNotification,
        markAllAsRead,
        stopNotifications,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

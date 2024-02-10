import React, { useEffect, useState } from "react";

const useLocalStorage = (name, value) => {
  const [data, setData] = useState(() => {
    console.log(localStorage.getItem("todos"));
    const storedData = localStorage.getItem(name);
    return storedData !== undefined && storedData && storedData.length > 0
      ? JSON.parse(storedData)
      : [];
  });
  useEffect(() => {
    if (data !== undefined && data) {
      localStorage.setItem(name, JSON.stringify(data));
    }
  }, [name, data]);
  return [data, setData];
};

export default useLocalStorage;

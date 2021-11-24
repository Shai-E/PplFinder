import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export const usePeopleFetch = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { pageNumber, nationality } = useSelector((state) => state);

  const fetchUsers = async () => {
    setIsLoading(true);
    const { data } = await axios.get(
      `https://randomuser.me/api/?results=25&page=${pageNumber}${
        nationality.length > 0 && "&nat=" + nationality.join(",").toLowerCase()
      }`
    );
    setIsLoading(false);
    setUsers([...users, ...data.results]);
  };

  useEffect(() => {
    fetchUsers();
  }, [pageNumber]);

  return { users, isLoading, fetchUsers };
};

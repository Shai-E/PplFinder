import React, { useState, useRef, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "components/Spinner";
import CheckBox from "components/CheckBox";
import * as S from "./style";
import UserItem from "components/UserItem/UserItem";
import MultipleSelectCheckmarks from "components/Select/MultipleSelectCheckmarks";
import { updateFavorites, updateNationality, updatePageNumber } from "redux/actionTypes";

const UserList = ({ users, isLoading }) => {
  const [hoveredUserId, setHoveredUserId] = useState();
  const observer = useRef();
  const { nationality, favorites, countries } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        nationality.length > 0 ? nationality.includes(user.nat) : true
      )
    );
  }, [users, nationality]);

  useEffect(() => {
    filteredUsers.length === 0 && dispatch(updatePageNumber());
  }, [filteredUsers]);

  const lastUserElementRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(updatePageNumber());
      }
    },{threshold: .9});
    if (node) observer.current.observe(node);
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredUserId(index);
  };

  const handleMouseLeave = () => {
    setHoveredUserId();
  };

  const handleValueChange = (value, isChecked) => {
    dispatch(updateNationality(
      isChecked
      ? [...nationality, value]
      : nationality.filter((country) => country !== value)
    ));
  };

  const setFavorite = (user) => {
    dispatch(updateFavorites(
      favorites.emails.includes(user.email)
      ? favorites.favorites.filter((favorite) => favorite.email !== user.email)
      : [...favorites.favorites, user]
    ));
  };

  return (
    <S.UserList>
      <S.Filters>
        {countries.map(
          (country) =>
            country.display && (
              <CheckBox
                key={country.iso2}
                value={country.iso2}
                label={country.name}
                onChange={handleValueChange}
              />
            )
        )}
      </S.Filters>
      <S.SelectContainer>
        <MultipleSelectCheckmarks/>
      </S.SelectContainer>
      <S.List>
        {filteredUsers.map((user, index, filteredUsers) => {
          return (
            <UserItem
              lastUserElementRef={filteredUsers.length === index + 1 ? lastUserElementRef : null}
              key={index}
              index={index}
              user={user}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              hoveredUserId={hoveredUserId}
              favorites={favorites.favorites}
              favoritesEmails={favorites.emails}
              setFavorite={() => setFavorite(user)}
            ></UserItem>
          );
        })}
        {isLoading && (
          <S.SpinnerWrapper>
            <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
          </S.SpinnerWrapper>
        )}
      </S.List>
    </S.UserList>
  );
};

export default UserList;

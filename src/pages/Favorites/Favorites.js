import React, { useEffect, useState } from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import * as S from "./style";
import { useSelector, useDispatch } from "react-redux";
import { getFromLocalStorage } from "../../utils/storageHelper";
import { updateNationality } from "redux/actionTypes";

const Favorites = () => {
  const { favorites } = useSelector((state) => state);
  const [favoritesToDisplay, setFavoritesToDisplay] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateNationality([]));
  }, []);

  useEffect(() => {
    const favoritesFromStorage = getFromLocalStorage("favorites");
    setFavoritesToDisplay(
      favorites.favorites.length <= 0 && favoritesFromStorage
        ? favoritesFromStorage
        : favorites.favorites
    );
  }, [favorites]);

  return (
    <S.Favorites>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Your Favorites
          </Text>
        </S.Header>
        <UserList users={favoritesToDisplay} />
      </S.Content>
    </S.Favorites>
  );
};

export default Favorites;

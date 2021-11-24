import React, { useEffect } from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import { usePeopleFetch } from "hooks";
import * as S from "./style";
import { useDispatch } from "react-redux";
import { updateNationality } from "redux/actionTypes";

const Home = () => {
  const { users, isLoading } = usePeopleFetch();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateNationality([]));
  }, []);

  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            PplFinder
          </Text>
        </S.Header>
        <UserList users={users} isLoading={isLoading} />
      </S.Content>
    </S.Home>
  );
};

export default Home;

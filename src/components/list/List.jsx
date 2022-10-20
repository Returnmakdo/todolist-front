import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { toggleIsLoading } from "../../redux/modules/animation";
import { __getTodos } from "../../redux/modules/todos";
import SmallLoading from "../loading/smLoading";
import Todo from "../todo/Todo";
import EditModal from "./EditModal";

/** isDone 상태에 따라 todo들을 뿌려주는 컴포넌트  */
function List({ isDone }) {
  const { todos: data } = useSelector((state) => state.todos);
  const { isLoading } = useSelector((state) => state.animation);
  const todos = data.filter((todo) => todo.isDone === isDone);
  const dispatch = useDispatch();
  const [layId, setLayId] = useState(null);

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  useEffect(() => {
    setTimeout(() => {
      dispatch(toggleIsLoading(false));
    }, 300);
  }, [dispatch, isDone]);

  return (
    <BigContainer>
      <ListContainer>
        {isLoading ? (
          <SmallLoading />
        ) : (
          <AnimatePresence>
            {todos?.map((todo) => (
              <Todo key={todo.id} {...todo} setLayId={setLayId} />
            ))}
          </AnimatePresence>
        )}
      </ListContainer>
      <AnimatePresence>
        {layId ? <EditModal layoutId={layId} setLayId={setLayId} /> : null}
      </AnimatePresence>
    </BigContainer>
  );
}

export default List;

const BigContainer = styled.div`
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  margin-top: 10px;
  &::-webkit-scrollbar {
    //display: none; /* Chrome, Safari, Opera*/
  }
  &::-webkit-scrollbar {
    width: 5px; /* 스크롤바의 너비 */
  }

  &::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background: rgba(0, 0, 0, 0.2); /* 스크롤바의 색상 */

    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: inherit;
  }
  @media screen and (max-width: 770px) {
    //height: 74vw;
    //min-height: 460px;
  }
`;
const ListContainer = styled.div`
  display: grid;
  min-height: 30vh;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(180px, 180px));
  gap: 15px;
  padding: 5px;

  @media screen and (max-width: 770px) {
    grid-template-rows: repeat(auto-fill, minmax(140px, 1fr));
    grid-template-columns: repeat(auto-fill, minmax(137px, 1fr));
    gap: 15px;
  }
  @media screen and (max-width: 690px) {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

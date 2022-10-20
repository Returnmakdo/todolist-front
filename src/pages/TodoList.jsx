import { useState } from "react";
import styled from "styled-components";
import Header from "../components/header/Header";
import Layout from "../components/layout/Layout";
import List from "../components/list/List";
import TodosNav from "../components/list/TodosNav";

function TodoList() {
  const [focus, setFocus] = useState(true);
  return (
    <Layout>
      <Header title={"Todo List"} />
      <ListWrapper as="main">
        <TodosNav focus={focus} setFocus={setFocus} />
        <List isDone={!focus} />
      </ListWrapper>
    </Layout>
  );
}

export default TodoList;

const ListWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 1fr;
  padding-bottom: 30px;
`;

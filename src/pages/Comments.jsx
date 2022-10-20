import Layout from "../components/layout/Layout";
import Header from "../components/header/Header";
// import Button from "../elem/Button";
import styled from "styled-components";
import CommentsForm from "../components/comments/CommentsForm";
import CommentsList from "../components/comments/CommentsList";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getTodo } from "../api/todos/todosApi";

// import DeleteSvg from "../styles/svg/DeleteSvg";

function Comments() {
  const { id } = useParams();
  const { data: todo } = useQuery("todo", () => getTodo(+id));

  return (
    <Layout>
      <Header title={"Comments"} />
      <TodoHeader>TODO : {todo?.content}</TodoHeader>
      <CommentsForm id={+id} />
      <CommentsList id={+id} />
    </Layout>
  );
}
export default Comments;

const TodoHeader = styled.div`
  font-size: 13px;
  margin-top: 20px;
`;

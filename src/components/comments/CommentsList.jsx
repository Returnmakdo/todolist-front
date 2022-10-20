import { React } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getComments } from "../../api/comments/commentsApi";
import CommentEdit from "./CommentEdit";

function CommentsList() {
  const { data: comments } = useQuery("comments", getComments);

  return (
    <CommentList>
      {comments?.map((comment) => (
        <CommentEdit key={comment.id} comment={comment} />
      ))}
    </CommentList>
  );
}
export default CommentsList;

const CommentList = styled.div`
  margin-top: 20px;
  height: 295px;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #fb9f71;
    background-clip: padding-box;
    border: 2px solid transparent;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: #ffc977;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;

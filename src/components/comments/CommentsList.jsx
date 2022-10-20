import { useEffect, React } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __getComment } from "../../redux/modules/comments";
import CommentEdit from "./CommentEdit";

function CommentsList({ id }) {
  const { comments } = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getComment(id));
  }, [dispatch, id]);

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

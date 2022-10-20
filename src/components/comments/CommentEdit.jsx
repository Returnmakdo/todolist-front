import { useState, React, useEffect } from "react";
import DeleteSvg from "../../styles/svg/DeleteSvg";
import CloseSvg from "../../styles/svg/CloseSvg";
import EditSvg from "../../styles/svg/EditSvg";
import CheckSvg from "../../styles/svg/CheckSvg";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { deleteComment, editComment } from "../../api/comments/commentsApi";
import { queryClient } from "../..";

function CommentEdit({ comment }) {
  const [disable, setDisable] = useState(true);
  const { register, handleSubmit, setValue, setFocus } = useForm();
  const { mutate: deleteMutate } = useMutation(deleteComment, {
    onSuccess: () => queryClient.invalidateQueries("comments"),
  });
  const { mutate: editMutate } = useMutation(editComment, {
    onSuccess: () => queryClient.invalidateQueries("comments"),
  });
  useEffect(() => {
    setValue("comment", comment.comment);
  }, [comment, setValue, disable]);

  // 댓글을 삭제하는 함수
  const onDelete = (e) => {
    e.preventDefault();
    deleteMutate(comment.id);
  };

  // Edit Form을  보여주는 함수
  const onEdit = (e) => {
    e.preventDefault();
    setDisable(false);
  };

  // 변경된 input값을 저장하는 함수
  const onValid = (inputs) => {
    editMutate({ id: comment.id, update: { ...inputs } });
    setDisable(true);
  };

  useEffect(() => {
    if (!disable) setFocus("comment");
  }, [disable, setFocus]);

  return (
    <CommentContainer onSubmit={handleSubmit(onValid)}>
      <ComInput
        {...register("comment")}
        type="text"
        name="comment"
        disabled={disable}
      />
      {disable ? (
        <button onClick={onDelete}>
          <DeleteSvg />
        </button>
      ) : (
        <button
          onClick={(e) => {
            e.preventDefault();
            setDisable(true);
          }}
        >
          <CloseSvg />
        </button>
      )}
      {disable ? (
        <button onClick={onEdit}>
          <EditSvg />
        </button>
      ) : (
        <button>
          <CheckSvg />
        </button>
      )}
    </CommentContainer>
  );
}
export default CommentEdit;

const ComInput = styled.input`
  width: 80%;
  margin: 10px;
  padding: 5px;
  border: 1px solid #ffc977;
  border-radius: 10px;
`;

const CommentContainer = styled.form`
  svg {
    width: 20px;
  }
`;

import React from "react";
import styled from "styled-components";
import CheckSvg from "../../styles/svg/CheckSvg";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { addComment } from "../../api/comments/commentsApi";
import { queryClient } from "../..";

function CommentsForm({ id }) {
  const { register, handleSubmit, reset, setFocus } = useForm();
  const { mutate } = useMutation(addComment, {
    onSuccess: () => queryClient.invalidateQueries("comments"),
  });

  // 댓글을 생성하는 함수
  const onValid = (inputs) => {
    if (inputs.comment.trim() === "") return setFocus("comment");
    mutate({ ...inputs, todoId: id, createdAt: Date.now() });
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onValid)}>
      <CommentInput maxLength="40" type="text" {...register("comment")} />
      <button
        style={{ position: "absolute", marginTop: "50px", marginRight: "10px" }}
      >
        <CheckSvg />
      </button>
    </Form>
  );
}
export default CommentsForm;

const Form = styled.form`
  svg {
    width: 18px;
  }
  display: flex;
  justify-content: flex-end;
`;

const CommentInput = styled.input`
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  height: 100px;
  position: relative;
  border-radius: 6px;
  border: 1px solid #fb9f71;
  box-shadow: 3px 3px 2px 2px lightgrey;
`;

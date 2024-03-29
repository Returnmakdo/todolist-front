import { motion } from "framer-motion";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import styled from "styled-components";
import { queryClient } from "../..";
import { editTodos, getTodo } from "../../api/todos/todosApi";
import Button from "../../elem/Button";
import { Flexbox } from "../../styles/flex";
import CloseSvg from "../../styles/svg/CloseSvg";

const btnStyle = {
  _width: "100%",
  _bgColor: "#3f3f3f",
  _hoverBgColor: "#262626",
};

/** Todo의 edit 버튼을 클릭했을 때 나오는 모달창 */
function EditModal({ layoutId, color, setLayId }) {
  const { data: todo } = useQuery("todo", () => getTodo(layoutId));

  const { mutate } = useMutation(editTodos, {
    onSuccess: () => queryClient.invalidateQueries("todos"),
  });
  const { register, setValue, handleSubmit } = useForm();
  const onClose = (e) => {
    e.preventDefault();
    setLayId(null);
  };

  const onValid = (inputs) => {
    mutate({ id: todo.id, update: { ...inputs } });
    setLayId(null);
  };

  useEffect(() => {
    setValue("title", todo?.title);
    setValue("content", todo?.content);
  }, [todo, setValue]);

  return (
    <Modal
      layoutId={layoutId + ""}
      bgcolor={color}
      onSubmit={handleSubmit(onValid)}
    >
      <div>
        <h3>Edit</h3>
        <span onClick={onClose}>
          <CloseSvg />
        </span>
      </div>
      <input {...register("title")} name="title" type="text" required />
      <textarea {...register("content")} name="content" type="text" required />
      <Button {...btnStyle}>Edit</Button>
    </Modal>
  );
}
export default EditModal;

const Modal = styled(motion.form)`
  width: 300px;
  height: 350px;
  background-color: white;
  border-radius: 15px;
  position: absolute;
  top: 5%;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  div {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 10px;
    h3 {
      position: absolute;
      width: 100%;
      font-weight: 600;
      font-size: 20px;
      text-align: center;
    }
    span {
      ${Flexbox};
      z-index: 3;
      width: 30px;
      height: 30px;
      background-color: inherit;
      border-radius: 50%;
      cursor: pointer;
      svg {
        width: 20px;
        transition: color 0.2s linear;
      }
      &:hover {
        background-color: rgba(0, 0, 0, 0.5);
        svg {
          color: white;
        }
      }
    }
  }
  input {
    margin: 5px;
    padding: 10px 15px;
    font-size: 15px;
    border-radius: 10px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  }
  textarea {
    flex-grow: 2;
    padding: 10px 15px;
    font-size: 15px;
    line-height: 1.4;
    border: none;
    border-radius: 10px 10px 0px 0px;
    outline: none;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  }
  button {
    border-radius: 0px 0px 10px 10px;
  }
  @media screen and (max-width: 730px) {
    width: 40vw;
    min-width: 260px;
  }
`;

import Button from "../../elem/Button";
import styled from "styled-components";
import { __addTodos } from "../../redux/modules/todos";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useInputs from "../../hooks/useInputs";
import { memo } from "react";
function TodoForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { inputs, onChange, reset } = useInputs({
    title: "",
    content: "",
    color: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      inputs.title.trim() === "" ||
      inputs.content.trim() === "" ||
      inputs.color.trim() === ""
    ) {
      return alert("모든 항목을 입력해주세요.");
    }
    dispatch(
      __addTodos({
        ...inputs,
        id: Date.now(),
        isDone: false,
        createdAt: Date.now(),
      })
    );
    reset();
    navigate("/todoList");
  };

  return (
    <StForm as="form" onSubmit={onSubmit}>
      <StBox>
        <StText>제목</StText>
        <Input
          type="text"
          placeholder=" 제목을 입력해주세요. (10자이내)"
          minLength="3"
          maxLength="10"
          value={inputs.title}
          name="title"
          onChange={onChange}
        />
        <StText>내용</StText>
        <Textarea
          type="text"
          placeholder=" 내용을 입력해주세요. (200자이내)"
          rows="5"
          maxLength="200"
          value={inputs.content}
          name="content"
          onChange={onChange}
        />
        <StText>색상 선택</StText>
        <Select name="color" value={inputs.color} onChange={onChange}>
          <option disabled value="">
            색상 선택하기
          </option>
          <option value="#F4CEB8">orange</option>
          <option value="#E4EF93">green</option>
          <option value="#EEABE0">pink</option>
          <option value="#D4B6F4">purple</option>
          <option value="#99B7FF">blue</option>
        </Select>
      </StBox>
      <Button>추가하기</Button>
    </StForm>
  );
}

/*입력값 텍스트*/
const StText = styled.div`
  font-size: 25px;
  font-weight: 500;
  margin: 10px 0px 10px 0px;
`;

/*입력값 폼 스타일*/
const StForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

/*제목창 스타일*/
const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 2px solid #40424454;
  border-radius: 10px;
  font-size: 16px;
  padding: 5px 10px;
`;

/*내용창 스타일 */
const Textarea = styled.textarea`
  width: 100%;
  border: 2px solid #40424454;
  padding: 12px;
  font-size: 16px;
  border-radius: 10px;
  resize: none;
  &:focus {
    outline: none;
  }
`;

/*전체 박스*/
const StBox = styled.div`
  width: 100%;
`;

/*색상선택*/
const Select = styled.select`
  width: 100%;
  height: 40px;
  font-size: 16px;
  border: 2px solid #40424454;
  border-radius: 10px;
`;
export default memo(TodoForm);

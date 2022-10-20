import { memo } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { toggleAni, toggleIsLoading } from "../../redux/modules/animation";

/** Todolist의 카테고리 이동 네비게이션 */
function TodosNav({ focus, setFocus }) {
  const dispatch = useDispatch();
  const onToggle = () => {
    dispatch(toggleAni(null));
    dispatch(toggleIsLoading(true));
    setFocus((prev) => !prev);
  };
  return (
    <Nav>
      <NavItem onClick={onToggle} focus={focus}>
        Working
      </NavItem>
      <NavItem onClick={onToggle} focus={!focus}>
        Done
      </NavItem>
    </Nav>
  );
}

export default memo(TodosNav);

const Nav = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 30px 0px 15px 10px;
`;
const NavItem = styled.li`
  font-size: 20px;
  font-weight: ${(props) => (props.focus ? "700" : "600")};
  margin-right: 20px;
  cursor: pointer;
  color: ${(props) => (props.focus ? "#242424" : "rgba(0,0,0,0.5)")};
  &:hover {
    color: ${(props) => (!props.focus ? "rgba(0,0,0,0.7)" : "#242424")};
  }
`;

// const boxAni = {
//   initial: {
//     opacity: 1,
//   },
//   exit: {
//     opacity: 0,
//   },
// };

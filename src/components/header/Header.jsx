import { memo } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Flexbox } from "../../styles/flex";

/** 뒤로 가기 버튼을 사용할 수 있는 네비게이션 */
function Header({ title }) {
  const navigate = useNavigate();
  const { pathname } = window.location;
  const prevPage = () => {
    if (pathname === "/todolist") navigate("/");
    else navigate(-1);
  };
  return (
    <Nav as="header">
      {pathname !== "/#/" ? (
        <span onClick={prevPage}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </span>
      ) : null}
      <h3>{title}</h3>
    </Nav>
  );
}
export default memo(Header);
const Nav = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 30px;
  span {
    ${Flexbox}
    width:30px;
    z-index: 2;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  svg {
    width: 20px;
  }
  h3 {
    position: absolute;
    width: 100%;
    font-weight: 700;
    font-size: 24px;
    text-align: center;
  }
`;

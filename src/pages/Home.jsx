import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import styled from "styled-components";

function Home() {
  return (
    <Layout>
      <TodoTitle>TODO LIST</TodoTitle>
      <LinkBox>
        <Link to="/write">
          <BtnBox>
            <img className="imgBtn" src="img/pen.png" alt="투두작성" />
            <StText>TODO</StText>
          </BtnBox>
        </Link>
        <Link to="/todolist">
          <BtnBox>
            <img className="imgBtn" src="img/menu.png" alt="투두조회" />
            <StText>TODO LIST</StText>
          </BtnBox>
        </Link>
      </LinkBox>
    </Layout>
  );
}

/*타이틀 글자*/
const TodoTitle = styled.h1`
  font-size: 70px;
  font-weight: 800;
  margin-top: 10px;
  text-align: center;
`;
/*링크 버튼*/
const BtnBox = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/*버튼 전체 박스*/
const LinkBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 70px;
`;

/*링크 버튼 글자*/
const StText = styled.p`
  font-size: 30px;
  font-weight: 600;
  margin-top: 20px;
`;

export default Home;

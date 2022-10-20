import styled from "styled-components";

function Layout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Layout;

const Wrapper = styled.div`
  width: 60vw;
  max-width: 850px;
  min-width: 400px;
  height: 560px;
  /* min-height: 550px;
  max-height: 555px; */
  padding: 30px 50px 50px 50px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.boardColor};
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);
`;

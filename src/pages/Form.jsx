import Header from "../components/header/Header";
import Layout from "../components/layout/Layout";
import TodoForm from "../components/write/TodoForm";

function Form() {
  return (
    <Layout>
      <Header title={"Todo 작성하기"} />
      <TodoForm />
    </Layout>
  );
}

export default Form;

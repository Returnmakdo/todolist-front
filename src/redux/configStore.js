import { configureStore } from "@reduxjs/toolkit";
import todos from "./modules/todos";
import comments from "./modules/comments";
import animation from "./modules/animation";

const store = configureStore({
  reducer: { todos, comments, animation },
});

export default store;

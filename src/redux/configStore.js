import { configureStore } from "@reduxjs/toolkit";
import comments from "./modules/comments";
import animation from "./modules/animation";

const store = configureStore({
  reducer: { comments, animation },
});

export default store;

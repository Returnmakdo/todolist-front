import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//댓글 가져오는 함수
export const __getComment = createAsyncThunk(
  "comments/getComment",
  async (payload, thunkApi) => {
    try {
      const { data } =
        await axios.get(`${process.env.REACT_APP_COMMENTS_URL}?_sort=createdAt&_order=DESC
      `);
      return thunkApi.fulfillWithValue({ data, id: payload });
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

//댓글추가
export const __addComment = createAsyncThunk(
  "comments/addComment",
  async (payload, thunkApi) => {
    try {
      const { data } = await axios.post(
        process.env.REACT_APP_COMMENTS_URL,
        payload
      );
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

//댓글삭제
export const __deleteComment = createAsyncThunk(
  "comments/deleteComment",
  async (payload, thunkApi) => {
    try {
      await axios.delete(`${process.env.REACT_APP_COMMENTS_URL}/${payload}`);
      return thunkApi.fulfillWithValue(payload);
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

//수정저장
export const __editSave = createAsyncThunk(
  "comments/editSave",
  async (payload, thunkApi) => {
    try {
      const { data } = await axios.patch(
        `${process.env.REACT_APP_COMMENTS_URL}/${payload.id}`,
        payload
      );
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    [__getComment.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      const { data, id } = action.payload;
      state.comments = data.filter((comment) => comment.todoId === id);
    },
    [__getComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__addComment.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__addComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = [action.payload, ...state.comments];
    },
    [__addComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__deleteComment.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__deleteComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = state.comments.filter(
        (comment) => comment.id !== action.payload
      );
    },
    [__deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__editSave.fulfilled]: (state, action) => {
      state.isLoading = false;
      const idx = state.comments.findIndex(
        (comment) => comment.id === action.payload.id
      );
      state.comments[idx] = action.payload;
    },
  },
});

export default commentsSlice.reducer;

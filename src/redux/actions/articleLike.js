import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";

export const articleLike = createAsyncThunk(
  "likeCount",
  async ({ articelId, likeCount }, { rejectWithValue }) => {
    try {
      const body = new URLSearchParams(likeCount).toString();
      const { data } = await http().post(`/article/manage/${articelId}`, body);
      return data.results;
    } catch (err) {
      const results = err.response?.data?.results;
      const message = err?.response?.data?.message;
      if (results) {
        return rejectWithValue(results);
      }
      if (err.code === "ERR_NETWORK") {
        return rejectWithValue("Error: Connection to Backend Failed!");
      }
      return rejectWithValue(message);
    }
  }
);

// export const updateLikeCount = (articleId, likeCount) => {
//   return {
//     type: "UPDATE_LIKE_COUNT",
//     payload: { articleId, likeCount },
//   };
// };

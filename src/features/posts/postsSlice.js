import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPosts } from "./fetchPosts";

const initialState = {
    isLoading: false,
    isError: false,
    posts: [],
    error: null
};

export const fetchPosts =
createAsyncThunk("posts/fetchPosts", async (data) =>
{
  console.log(data)
    const response = await getPosts();
    return response;
});

const postsSilce = createSlice({
    name: "posts",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
        });

        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.posts = action.payload;
        });
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.isError = true;
            state.error = action.error;
        });
    }
});

export default postsSilce.reducer;

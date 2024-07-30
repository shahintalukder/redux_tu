import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./features/posts/postsSlice";

export default function ThunkApp() {
    const { isLoading, isError, error, posts } = useSelector(
        state => state.posts
    );
    const dispatch = useDispatch(fetchPosts());

    useEffect(() => {
        dispatch(fetchPosts({name: 'test',msg:
        'Hell0'}));
    }, []);
    
   // console.log(posts)

    let content;

    if (isLoading) {
        content = <h2>Loading...</h2>;
    }

    if (isError) {
        content = <h3>{error}</h3>;
    }

   if (isError && posts.length === 0) {
        content = <h3>Data not found!</h3>;
    }

    if (!isLoading && posts.length > 0) {
        content = (
            <ul>
                {posts.map(el => (
                    <li key={el.id}>{el.title}</li>
                ))}
            </ul>
        );
    }

    return <div>{content}</div>;
}

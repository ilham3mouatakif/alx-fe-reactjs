import React from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

const PostsComponent = () => {
    const { data, error, isLoading, isError, refetch } = useQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts,
    });

    if (isLoading) {
        return <div>Loading posts...</div>;
    }

    if (isError) {
        return (
            <div>
                <p>Error: {error.message}</p>
                <button onClick={() => refetch()}>Try Again</button>
            </div>
        );
    }

    return (
        <div>
            <h1>Posts</h1>
            <button onClick={() => refetch()} style={{ marginBottom: '20px' }}>
                Refetch Posts
            </button>
            <ul>
                {data.map((post) => (
                    <li key={post.id} style={{ marginBottom: '10px' }}>
                        <h3 style={{ margin: '0' }}>{post.title}</h3>
                        <p style={{ margin: '5px 0' }}>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostsComponent;

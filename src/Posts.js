import React from 'react'
import PostItem from './PostItem'
import './Posts.css'

export default function Posts() {
    const posts = [
        {
            upvote:547,
            image: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1953&q=80",
            title: "Questions about new wallet",
            user: "theindependentonline",
            subreddit: "politics",
            comment_count: 248
        },
        {
            upvote:143,
            image: "https://images.unsplash.com/photo-1619754226711-70ab984d068a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1225&q=80",
            title: "What about those ears?",
            user: "animals4us",
            subreddit: "dogs",
            comment_count: 486
        },
        {
            upvote:754,
            image: "https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
            title: "Pop up or Tent pegs",
            user: "nationishome",
            subreddit: "camping",
            comment_count: 321
        },
        {
            upvote:267,
            image: "https://images.unsplash.com/photo-1583776256401-8dbf3ecd1116?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
            title: "Beanies the new trend",
            user: "waronsexism",
            subreddit: "feminism",
            comment_count: 248
        }
    ]
    return (
        <div className="posts">
            {posts.map(post => (
                <PostItem post={post} />
            ))}
        </div>
    )
}

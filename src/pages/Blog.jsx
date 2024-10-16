import React from 'react';
import './Blog.css'; // Import the CSS file for styles

function Blog() {
    const posts = [
        { id: 1, title: 'First Blog Post', content: 'This is the content of the first blog post.' },
        { id: 2, title: 'Second Blog Post', content: 'This is the content of the second blog post.' },
        { id: 3, title: 'Third Blog Post', content: 'This is the content of the third blog post.' },
    ];

    return (
        <div className="blog-container">
            <header className="blog-header">
                <h1>My Blog</h1>
            </header>

            <div className="blog-content">
                <main className="blog-main">
                    {posts.map(post => (
                        <article key={post.id} className="blog-post">
                            <h2>{post.title}</h2>
                            <p>{post.content}</p>
                        </article>
                    ))}
                </main>

                <aside className="blog-sidebar">
                    <h3>About Me</h3>
                    <p>This is a brief introduction about me.</p>
                    <h3>Categories</h3>
                    <ul>
                        <li>Technology</li>
                        <li>Lifestyle</li>
                        <li>Travel</li>
                    </ul>
                </aside>
            </div>
        </div>
    );
}

export default Blog;

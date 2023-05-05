import { useState } from "react";
import { useHistory } from 'react-router-dom';


const CreateBlogPost = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const [isPending, setIsPending] = useState(false)
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        console.log(blog)
        setIsPending(true)
        setTimeout(() => {
            fetch('http://localhost:8000/blogs', {
                method: 'POST',
                headers: { "content-Type": "application/json"},
                body: JSON.stringify(blog)
            })
            .then(() => {
                console.log('New post added')
                setIsPending(false)
                //history.go(-1)
                history.push('/')
            })
        }, 2000)
  
    }
    return ( 
        <div className="create-blog-container">
            {/* { isPending && <LoaderComponent />} */}
            <h1>CREATE POST</h1>
            <form onSubmit={handleSubmit} >
                
                <label htmlFor="title">Blog title:</label>
                <input 
                type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)} 
                id="title" 
                required 
                />

                <label htmlFor="content">Blog content:</label>
                <textarea 
                id="content" 
                value={body} 
                onChange={(e) => setBody(e.target.value)} 
                required
                >
                </textarea>

                <label htmlFor="author">Blog author:</label>
                <input 
                type="text" 
                id="author" 
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required />

                { !isPending && <button>ADD BLOG</button>}
                { isPending && <button>ADDING BLOG...</button>}
            </form>
        </div>
     );
}
 
export default CreateBlogPost;
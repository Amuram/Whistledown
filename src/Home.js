import { useState, useEffect } from "react";
import BlogItems from './BlogItems';
import LoaderComponent from './LoaderComponent';
import useFetch from "./useFetch";

const Home = () => {
    const { data: blogs, error, isPending } = useFetch('http://localhost:8000/blogs')

    
    return ( 
        <div className="home">
            { error && <div><h1>{ error}</h1></div>}
            { isPending && <LoaderComponent />}
            { blogs && <BlogItems blogs={blogs} title='BLOG POSTS' /> }
        </div>
     );
}
 
export default Home;
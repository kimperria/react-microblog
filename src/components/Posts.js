import { useState } from "react";
import { Spinner } from "react-bootstrap";


const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

export default function Posts() {

  const [posts , setPosts] = useState();

  // TODO: add a side effect function to request posts here
  useEffect(() => {
    (async () => {
      const response = await fetch(BASE_API_URL + 'api/feed');
      if (response.ok) {
        const results = await response.json();
        setPosts(results.data);
      }else {
        setPosts(null);
      }
    });
  }, []);
  
  
    return (
      <>
      {posts === undefined ?
      <Spinner animation='border' />
      :
      <>
        {posts === null ?
        <p>Could not retrive blog posts.</p> :
        <>

        </>}
      </>  
      }
      </>
    );
  }
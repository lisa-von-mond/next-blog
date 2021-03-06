import * as React from "react";
import styled from "styled-components";
import { Post } from "../Post/Post";

export function PostList({posts, short}) {

const LastThree = posts.filter((element,index) => (index <= 2));

  if (short === true){

  return (
    <List>
    {LastThree.map((post) => (
      <li key={post.id}>
        <Post {...post} />
      </li>
    ))}
  </List>

  );
}

else {
return (

  <List>
  {posts.map((post) => (
    <li key={post.id}>
      <Post {...post} />
    </li>
  ))}
</List>

);
    }

}

export function PostListShort({ posts }) {

  const LastThree = posts.filter((element,index) => (index <= 2));

  return (


    <List>
      {LastThree.map((post) => (
        <li key={post.id}>
          <Post {...post} />
        </li>
      ))}
    </List>
  );
}


const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 60ch;
  list-style: none;
`;

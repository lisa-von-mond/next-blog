import * as React from "react";
import styled from "styled-components";
import { PostList } from "../PostList/PostList";
import { useState } from 'react' 


export function PostLoader({posts}) {

const[seeAll, setSeeAll] = useState(false)

function buttonClick(){
setSeeAll(!seeAll)
}

return(
    <PostFrame>
    <h2>Latest Posts</h2>
    <PostList posts={posts} short ={seeAll ? false : true} />
    <SeeAllButton onCLick = {buttonClick}>{seeAll ? "Hide" : "See All"}</SeeAllButton>
    </PostFrame>
);
}

const PostFrame = styled.div`
border: 2px dotted white;
box-shadow:-10px -10px 20px hotpink;
border-radius: 12px;
padding:1rem;

h2{
  color:white;
  padding:0;
  margin-top:1rem;
  margin-bottom:2rem;
  text-transform:uppercase;
}
`

const SeeAllButton = styled.button`
background-color:white;
color:hotpink;
margin-top:1.8rem;
margin-bottom:1.8rem;
border-radius:100px;
font-size:1.2rem;
padding:1rem;
text-transform:uppercase;
`






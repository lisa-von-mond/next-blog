import { PostLoader } from "../components/PostLoader/PostLoader";
import { getSortedPostsData } from "../lib/posts";
import styled from "styled-components";
import { withTheme } from "styled-components";

export default function Home({ posts }) {
  return (
    <><myBody>
    <MyHeader>
      <Headline>NEWS NEWS NEWS</Headline>
      <TeaserText>
      <p>Read all the hot stuff about Marshmallow Lovers Club here </p>
      </TeaserText>
      </MyHeader>
      <PostLoader posts={posts} />
      </myBody>
    </>
  );
}

export async function getStaticProps() {
  const posts = getSortedPostsData();
  // somehow get the data!
  return {
    props: {
      posts: posts,
    },
  };
}

const Headline = styled.h1 `
font-size: 3.2rem;
color:white;
padding:0;
margin-top:1rem;
height:200px;
width:180px;
text-align:center;
line-height:3rem;
`
const MyHeader= styled.header`
width:80%;
display:flex;
gap:3rem;`

const myBody = styled.body`
display:flex;
flex-direction:column;
align-items:flex-start;
width:96vw;
margin:2vw;
gap:6rem;`

const TeaserText = styled.div`
color:white;
font-size:1.2rem;
height:10rem;
text-decoration: underline;
`
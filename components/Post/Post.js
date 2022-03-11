import Link from "next/link";
import * as React from "react";
import styled from "styled-components";

export function Post({ id, title, date }) {
  return (
    <Link href={`/blog/${id}`}>
      <a>
        <Container>
          <Title id={id}>{title}</Title>
          <time dateTime={date}>{date}</time>
        </Container>
      </a>
    </Link>
  );
}

const Container = styled.article`
  padding: 1rem;
  border: 2px dotted white;
  box-shadow: 10px 10px 20px hotpink;
  border-radius: 12px;
`;

const Title = styled.h3`
  margin: 0;
`;
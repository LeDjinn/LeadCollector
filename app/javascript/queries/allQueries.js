//import {gql} from "@apollo/client";
import {gql } from 'graphql-tag'

export const COMMENTS = gql`
query allComments {
  comments {
    body
    userId
    id
    answers{
      body
      userId
      id
    }
    
    
  }
}
`;

export const ADD_COMMENT = gql`
mutation CreateComment($body: String!) {
    createComment(body: $body){
        body
    }
}

`

export const ADD_ANSWER = gql`
mutation CreateAnswer($body: String!, $comment_id: String!) {
    createAnswer(body: $body, commentId: $comment_id){
        body
    }
}

`
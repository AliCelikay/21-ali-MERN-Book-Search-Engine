import { gql } from '@apollo/client';

// GET_ME query will return these fields
export const GET_ME = gql`
    query me {
        me {
            _id: ID!
            username
            email
            savedBooks {
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
`;

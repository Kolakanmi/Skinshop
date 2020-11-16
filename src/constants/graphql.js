import gql from 'graphql-tag'

export const PRODUCTS_QUERY = gql`
    query ProductsQuery {
        products {
            id,
            title,
            image_url,
            price(currency: USD)
        }
    }
`

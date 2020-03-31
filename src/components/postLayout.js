import React from "react"
import { Link, graphql } from "gatsby"

export default function postLayout({ data }) {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <div className="card-title">{data.swapi.post_by_pk.title}</div>
          <div className="card-text text-muted">
            {data.swapi.post_by_pk.description}
          </div>
          <button className="mt-2 btn btn-light">
            <Link to="/">Back</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  query PostId($slug: SWAPI_uuid!) {
    swapi {
      post_by_pk(id: $slug) {
        description
        createdAt
        id
        link
        title
        updatedAt
        user {
          displayName
          createdAt
          id
        }
      }
    }
  }
`

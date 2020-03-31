import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      swapi {
        post {
          id
          link
          title
          updatedAt
          userId
          description
          createdAt
        }
      }
    }
  `)
  return (
    <div className="container mt-5">
      <div className="row rol-cols-2">
        {data.swapi.post.map(post => (
          <div className="col" key={post.id}>
            <div className="card">
              <div className="card-body">
                <div className="card-title font-weight-bold">
                  <Link
                    className="text-dark text-decoration-none"
                    to={`/post/${post.id}`}
                  >
                    {post.title}
                  </Link>
                </div>
                <div className="card-text font-weight-light text-muted">
                  {post.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default IndexPage

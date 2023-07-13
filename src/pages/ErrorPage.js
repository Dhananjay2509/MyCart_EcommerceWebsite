import React from 'react'
import { styled } from 'styled-components'

function ErrorPage() {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <h2>404</h2>
          <h3>OHH!! You are Lost</h3>
          <p>
            The page you are looking for does not exist.
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .container{
    padding:  0;
    text-align: center
  }

  h2{
    font-size: 5rem
  }

  h3{
    font-size: 3rem
  }

  p{
    margin: 1rem 0;
  }
`

export default ErrorPage

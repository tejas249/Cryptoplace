import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className='hero'>
        <h1>Largest <br/> Crypto Marketplace </h1>
        <p> Welcome to the  world's largest cryptocurrency marketplace.
            SignUp to explore more about cryptos
        </p>

        <form>
            <input type="text" placeholder='Search Crypto' />
            <button type="submit">Search</button>
        </form>
      </div>
    </div>
  )
}

export default Home
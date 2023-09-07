import { useState } from 'react'
import "./App.css";


function App() {


  return (
    <div>
      <header>
        <h1>Styled-Components</h1>
        <nav style={{display: "flex", justifyContent: "space-evenly", width: "100vw"}}>
          <a href="https://styled-components.com/">documentation</a>
          <a href="https://www.npmjs.com/package/styled-components">npm</a>
        </nav>
      </header>

      <section>
        <form>
          <label htmlFor="username" >username: </label>
          <input name="username" type="text" placeholder="JohnDoe55" />
          <br />
          <label htmlFor="pass">password:</label>
          <input name="pass" type="password" placeholder='asdf1234@'/>
          <br />
          <label for="show">show password</label>
          <input type="radio" name="show" />
          <br />
          <button type="button">submit</button>
        </form>
      </section>
      <footer>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex numquam veritatis inventore voluptate ullam cupiditate reprehenderit quos optio. Laborum, nesciunt veritatis dolore temporibus aliquid labore tenetur quaerat laudantium dolores molestiae!
      </footer>
    </div>
  )
}

export default App

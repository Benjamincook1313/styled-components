import { useState } from 'react'
import "./App.css";


function App() {

  const [show, setShow] = useState(false);

  return (
    <>

      <header>
        <h1>Styled-Components</h1>
        <br />
        <nav style={{display: "flex", justifyContent: "space-evenly", width: "100%"}}>
          <a href="https://styled-components.com/">documentation</a>
          <a href="https://www.npmjs.com/package/styled-components">npm</a>
        </nav>
      </header>

      <br />

      <section>
        <form>
          <label htmlFor="username" >username: </label>
          <input name="username" type="text" placeholder="JohnDoe55" />
          <br />
          <label htmlFor="pass">password:</label>
          <input name="pass" type={show? "text": "password"} placeholder='asdf1234@'/>
          <br />
          <label htmlFor="show">show password</label>
          <input type="checkbox" name="show" onChange={e => setShow(!show)}/>
          <br />
          <button type="button">submit</button>
        </form>
      </section>

      <br />

      <footer>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex numquam veritatis inventore voluptate ullam cupiditate reprehenderit quos optio. Laborum, nesciunt veritatis dolore temporibus aliquid labore tenetur quaerat laudantium dolores molestiae!
      </footer>
    </>
  )
}

export default App

import React from 'react'
import './App.css'
import img from './img2.jpg'
const App = () => {
  return (
    <div className='App'>
        <div style={{border:'solid 1px black',maxWidth:'100vw'}}>

<h1 class="titlered">*Youssef*</h1>

<br />

<img src={img} />

<br />

<img src="img1.jpg" />

</div>

<video width="320" height="240" controls>

<source src="vd.mp4" type="video/mp4" />

</video>
    </div>
  )
}

export default App
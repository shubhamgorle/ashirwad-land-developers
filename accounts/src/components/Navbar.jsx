import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">Home</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  {/* <Route path='/' element={<Home/>}/>
        <Route path='/add/mendhepathar' element={<InputForm/>}/>
        <Route path='/show/mendhepathar' element={<ShowData/>}/>
        <Route path='/update/mendhepathar/:id' element={<UpdateForm/>}/> */}
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/add/mendhepathar">M-ADD</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/show/mendhepathar">M-SHOW</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/add/raulgaon">R-ADD</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/show/raulgaon">R-SHOW</a>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Navbar

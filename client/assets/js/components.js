// when page load
$( document ).ready(function() {
    menu()
     });


function menu(){

    var menu = `<nav class="menu navbar navbar-expand-md navbar-purple fixed-top bg-ligh p-4">
      <div class="container">
          <a class="navbar-brand" href="index.html"><b class="c-white">Rad-Kitties</b></a>
          <button class="navbar-toggler collapsed" type="button" data-toggle="collapse"
              data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
  
          <div class="navbar-collapse collapse  justify-content-end" id="navbarsExampleDefault">
  
              <div align="right">
                  <ul class="navbar-nav mr-auto">
  
                      <li class="nav-item">
                          <a class="nav-link" href="index.html"><p>Home</p></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="marketPlace.html"><p>Market Place</p></a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="catalogue.html"><p>Catalogue</p></a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="myCats.html"><p>My kitties</p></a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="factory.html"><p>K-Factory</p></a>
                      </li>
  
                      <li class="nav-item">
                          <button class="btn red-btn ml-4">Start</button>
                      </li>
  
                  </ul>
  
              </div>
  
          </div>
      </div>
  </nav>`  
  $('#menu').html(menu)  

  }

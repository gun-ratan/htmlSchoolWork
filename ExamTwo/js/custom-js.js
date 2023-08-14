// made by gunratan kaur (200551703)  & vani patel(200549486)

// Global header function to create and load the header element
function loadHeader() {
    const headerContainer = document.createElement('header');
    headerContainer.innerHTML = `
    <header class="global-header">
    <!-- Logo -->
    <div class="logo">
    <img src="./images/sample-logo.png" alt="Logo" class="logo">
  </div>
    <nav class="navbar">
    
        <div class="navbar-links">
          <ul>
            <li><a href="#">Home</a>|</li>
            <li><a href="#">About  </a>|</li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div class="search">
            <input type="text" placeholder="Search">
        </div>
      </nav>
</header>
 
    `;
  
    document.body.prepend(headerContainer); // Prepend the header to the body
  }
  
  // Load header when the DOM is ready
  document.addEventListener('DOMContentLoaded', function () {
    loadHeader();
  });
  
  // Function to create and load the footer element
  function loadFooter() {
    const footerContainer = document.createElement('footer');
    footerContainer.innerHTML = `

<footer class="gloobal-footer">
<div class="logo">
    <img src="./images/sample-logo.png" alt="Logo" class="logo">
  </div>
  <div  class="text">
    <h2>Title</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non et autem officiis sit quisquam totam distinctio saepe, laboriosam necessitatibus eaque amet, soluta nobis delectus dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, atque </p>
</div>
</footer>
    `;
  
    document.body.appendChild(footerContainer); // Append the footer to the body
  }
  
  // Load footer when the DOM is ready
  document.addEventListener('DOMContentLoaded', function () {
    loadFooter();
  });
  

  
  
  
  
  
  
  
  
  
  
  
  
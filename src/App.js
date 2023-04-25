import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div className="d-flex topSection bg-white sticky-top border-bottom border-danger border-3 justify-content-between align-items-center p-3">
        <a href="#" className='btn btn-light border-light text-secondary'><i className="fas fa-arrow-left"></i> Overview page</a>
        <div className="d-flex justify-content-between align-items-center gap-3">
          <button className="btn-light btn activeBtn rounded-circle"><i className="fas fa-desktop"></i></button>
          <button className="btn-light btn rounded-circle"><i className="fas fa-tablet"></i></button>
          <button className="btn-light btn rounded-circle"><i className="fas fa-mobile"></i></button>
        </div>
        <div className="d-flex justify-content-between align-items-center gap-3">
          <button className="btn"><i className="fab fa-github"></i></button>
          <button className="btn text-danger bg-light rounded-3"><i className="fas fa-download"></i> Free Download</button>
          <button className="btn btn-outline-light text-secondary  rounded-circle"><i className="fas fa-close"></i></button>
        </div>
      </div>
      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container px-4 px-lg-5">
            <a class="navbar-brand" href="#!">Start Bootstrap</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="#!">About</a></li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#!">All Products</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#!">Popular Items</a></li>
                    <li><a class="dropdown-item" href="#!">New Arrivals</a></li>
                  </ul>
                </li>
              </ul>
              <form class="d-flex">
                <button class="btn btn-outline-dark" type="submit">
                  <i class="bi-cart-fill me-1"></i>
                  Cart
                  <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>
      <main className='mb-5'>
        <div className="bg-dark py-5 text-center mb-5">
          <h1 className='display-4 fw-bolder text-white pt-4'>Shop in style</h1>
          <p className="lead text-white-50 pb-4">With this shop hompeage template</p>
        </div>
        <div className="container">
        <div className="row gx-5 gy-5">
          <div className="col-sm-3">
            <div class="card text-center">
              <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className='w-100 m-auto' class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Fancy Product</h5>
                <p class="card-text mb-4 pb-3">$40.00 - $80.00</p>
                <a href="#" class="btn btn-outline-dark">View options</a>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div class="card position-relative text-center">
              <div className="position-absolute bg-dark text-white px-2 rounded top-0 end-0 mt-1 me-1">sale</div>
              <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className='w-100 m-auto' class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Special Item</h5>
                <div className="text-warning">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p class="card-text"><del>$20.00</del> $18.00</p>
                <a href="#" class="btn btn-outline-dark">Add to cart</a>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div class="card position-relative text-center">
              <div className="position-absolute bg-dark text-white px-2 rounded top-0 end-0 mt-1 me-1">sale</div>
              <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className='w-100 m-auto' class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Sale Item</h5>
                <p class="card-text mb-4 pb-3">$50.00 $25.00</p>
                <a href="#" class="btn btn-outline-dark">Add to cart</a>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div class="card text-center">
              <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className='w-100 m-auto' class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Popular Item</h5>
                <div className="text-warning">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p class="card-text">$40.00</p>
                <a href="#" class="btn btn-outline-dark">Add to cart</a>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div class="card position-relative text-center">
              <div className="position-absolute bg-dark text-white px-2 rounded top-0 end-0 mt-1 me-1">sale</div>
              <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className='w-100 m-auto' class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Sale Item</h5>
                <p class="card-text mb-4 pb-3">$50.00 $25.00</p>
                <a href="#" class="btn btn-outline-dark">Add to cart</a>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div class="card text-center">
              <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className='w-100 m-auto' class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Fancy Product</h5>
                <p class="card-text mb-4 pb-3">$40.00 - $80.00</p>
                <a href="#" class="btn btn-outline-dark">View options</a>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div class="card position-relative text-center">
              <div className="position-absolute bg-dark text-white px-2 rounded top-0 end-0 mt-1 me-1">sale</div>
              <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className='w-100 m-auto' class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Special Item</h5>
                <div className="text-warning">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p class="card-text"><del>$20.00</del> $18.00</p>
                <a href="#" class="btn btn-outline-dark">Add to cart</a>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div class="card text-center">
              <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className='w-100 m-auto' class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Popular Item</h5>
                <div className="text-warning">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p class="card-text">$40.00</p>
                <a href="#" class="btn btn-outline-dark">Add to cart</a>
              </div>
            </div>
          </div>
        </div>
        </div>
      </main>
      <footer>
        <div className="bg-dark py-5 text-center text-white">
          <p>Copyright © Your Website 2023</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

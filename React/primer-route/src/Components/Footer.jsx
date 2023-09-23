import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
            >
              <svg className="bi" width="30" height="24">
                <use xlinkHref="#bootstrap" />
              </svg>
            </a>
            <span className="mb-3 mb-md-0 text-body-secondary">
              &copy; 2023 Company, Inc
            </span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-body-secondary" href="#">
                <svg className="bi" width="24" height="24">
                  <use xlinkHref="#twitter" />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href="#">
                <svg className="bi" width="24" height="24">
                  <use xlinkHref="#instagram" />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href="#">
                <svg className="bi" width="24" height="24">
                  <use xlinkHref="#facebook" />
                </svg>
              </a>
            </li>
          </ul>
        </footer>
      </div>

      <div className="b-example-divider"></div>

      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                About
              </a>
            </li>
          </ul>
          <p className="text-center text-body-secondary">
            &copy; 2023 Company, Inc
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

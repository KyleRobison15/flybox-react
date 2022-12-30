import React, { Component } from "react";
import { Link } from "react-router-dom";

class Flybox extends Component {
  render() {
    const { user } = this.props;

    if (user) {
      return (
        <div className="container mt-3">
          <div className="row row-cols-1 row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-4">
            {user.flies.map((fly) => (
              <div key={fly.name} className="col">
                <div className="card h-100" style={{ width: "15rem" }}>
                  <img
                    src={fly.stockImageUrl}
                    className="card-img-top"
                    alt="Fly"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{fly.name}</h5>
                    <p className="card-text">{fly.description}</p>
                    <Link
                      to={`/flybox/${fly.name}`}
                      fly={fly}
                      className="btn btn-primary"
                      style={{ margin: 3 }}
                    >
                      View
                    </Link>
                    <Link className="btn btn-danger" style={{ margin: 3 }}>
                      Delete
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return;
    }
  }
}

export default Flybox;

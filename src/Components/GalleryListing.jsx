import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import "../Styles/GalleryListing.css";
import { Link } from "react-router-dom";
// import Can from './Can';

function GalleryListing() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  async function deleteOperation(id) {
    // alert(id)
    let result = await fetch("http://localhost:8000/images/" + id, {
      method: "DELETE",
    });
    result = await result.json();
    console.warn(result);
    getData();
  }
  async function getData() {
    let result = await fetch("http://localhost:8000/images");
    result = await result.json();
    setData(result);
  }

  return (
    <div className="listing">
      <div className="col-sm-6 offset-sm-3">
        <h1>Gallery Listing</h1>
        <div className="listing-container">
          {/* <h1>Gallery Listing</h1> */}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Image Url</th>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody>
              {data.map((img) => (
                <tr>
                  <td>{img.id}</td>
                  <td>
                    <img style={{ width: 100 }} src={img.image} alt="" />
                  </td>
                  <td>{img.title}</td>
                  <td>{img.description}</td>
                  <td>{img.price}</td>
                  {/* <Can do="delete" on={this.img.GalleryListing}> */}
                  <td>
                    <span
                      onClick={() => {
                        deleteOperation(img.id);
                      }}
                      className="delete"
                    >
                      Delete
                    </span>
                  </td>
                  {/* </Can> */}
                  {/* <td>
                    <Link to={"update/" + img.id}>
                      <span className="update">Update</span>
                    </Link>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default GalleryListing;

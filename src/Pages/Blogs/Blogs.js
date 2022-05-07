import React from "react";
import { Accordion } from "react-bootstrap";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="questions-accordion">
        <h1 className="text-center mb-5 text-success">Frequently Asked Questions</h1>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Difference between Javascript & Node.js
          </Accordion.Header>
          <Accordion.Body>
            <div className="d-flex justify-content-center align-items-center bg-light p-3">
              <div className="js">
                <h5 className="text-center">Javascript</h5>
                <p>
                  i)Javascript is a programming language that is used for
                  writing scripts on the website.{" "}
                </p>
                <p>ii)Javascript can only be run in the browsers.</p>
                <p>ii)It is basically used on the client-side.</p>
                <p>
                  iv)Javascript is capable enough to add HTML and play with the
                  DOM.
                </p>
              </div>
              <div className="nodejs">
                <h5 className="text-center">NodeJs</h5>
                <p>i)NodeJS is a Javascript runtime environment.</p>
                <p>
                  ii)We can run Javascript outside the browser with the help of
                  NodeJS.
                </p>
                <p>iii)It is mostly used on the server-side.</p>
                <p>iv)Nodejs does not have capability to add HTML tags.</p>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            When should you use Node.js and when should you use Mongodb?
          </Accordion.Header>
          <Accordion.Body>
            <div className="bg-light p-3">
              <h5>Node.js</h5>
              <p>
                Node.js is an open source, a server-side script which runs on
                the top of Google's open-source scripting engine V8. Node.js is
                fast, lightweight and efficient.
                <br />
                Node. js is a platform built on Chrome's JavaScript runtime for
                easily building fast and scalable network applications. Node. js
                uses an event-driven, non-blocking I/O model that makes it
                lightweight and efficient, perfect for data-intensive real-time
                applications that run across distributed devices.
              </p>

              <h5>Mongodb</h5>
              <p>
                MongoDB is the most popular of the new breed of non-relational
                NoSQL databases. Specifically, it's a document database, also
                called a document-oriented database or a document store.
                <br />
                <ul>
                  <li>
                    Documents hold semistructured data, usually represented in a
                    format like JSON or XML, and each document is associated
                    with a unique key.
                  </li>
                  <li>
                    Key values are typically a path or a URI that can be used to
                    retrieve the associated document from the database.
                  </li>
                  <li>
                    The keys are indexed, making it efficient to retrieve the
                    associated documents.
                  </li>
                </ul>
              </p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Difference between sql and nosql database
          </Accordion.Header>
          <Accordion.Body>
          <div className="d-flex justify-content-center align-items-center bg-light p-3">
              <div className="js">
                <h5 className="text-center">SQL</h5>
                <p>
                  i)RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).
                </p>
                <p>ii)These databases have fixed or static or predefined schema.</p>
                <p>ii)These databases are not suited for hierarchical data storage.</p>
                <p>
                  iv)These databases are best suited for complex queries.
                </p>
                <p>
                  v)Vertically Scalable.
                </p>
              </div>
              <div className="nodejs">
                <h5 className="text-center">NoSQL</h5>
                <p>i)Non-relational or distributed database system.</p>
                <p>
                  ii)They have dynamic schema.
                </p>
                <p>iii)These databases are best suited for hierarchical data storage.</p>
                <p>iv)These databases are not so good for complex queries.</p>
                <p>v)Horizontally scalable.</p>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blogs;

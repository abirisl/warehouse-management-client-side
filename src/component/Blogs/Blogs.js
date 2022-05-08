import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <div className='p-5 shadow-lg rounded-lg mt-3 mb-3'>
                <h2>1. Difference between javascript and nodejs.</h2>
                <div className='d-flex p-3'>
                    <Row>
                        <Col>
                            <div className='p-2'>
                                <h4 className='text-success ms-5'>Javascript</h4>
                                <hr className='w-50 ms-4' />
                                <p>#. Javascript is a programming language that is used for writing scripts on the website. </p>
                                <p>#. Javascript can only be run in the browsers.</p>
                                <p>#. Javascript is capable enough to add HTML and play with the DOM.  </p>
                                <p>#. Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. </p>
                                <p>#. Javascript is used in frontend development.</p>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <h4 className='text-success ms-5'>Nodejs</h4>
                                <hr className='w-50 ms-4' />
                                <p>#. NodeJS is a Javascript runtime environment.</p>
                                <p>#. We can run Javascript outside the browser with the help of NodeJS.</p>
                                <p>#. Nodejs does not have capability to add HTML tags.</p>
                                <p>#. V8 is the Javascript engine inside of node.js that parses and runs Javascript. </p>
                                <p>#. Nodejs is used in server-side development.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
                <h2>2. When should you use nodejs and when should you use mongodb ?</h2>
                <p>#.  MongoDB is the Document Oriented Database. MongoDB stores a lot of data in JSON format. MongoDB's performance is much faster than any RDBMS. MongoDB is designed to work with Large Scale Data. MongoDB can work on multiple servers. MongoDB can handle a large number of access requests easily.There are 2 design patterns in programming. One is asynchronous programming and the other is synchronous programming. Node JS by default follows the Asynchronous pattern. That is, it does not wait for a task to be completed. In the meantime, NodeJS started another job. That’s why we use nodeJS.</p>
                <h2>3. What is the purpose of jwt and how does it work </h2>
                <p>#. JWT, or JSON Web Token, is an open standard used to share security information between two parties a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                    A JWT is a string made up of three parts, separated by dots , and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                    Once decoded, you will get two JSON strings:
                    The header and the payload.
                    The signature. </p>
            </div>

        </div>
    );
};

export default Blogs;
import React from 'react';
import { Button } from 'react-bootstrap';
import ReactToPdf from 'react-to-pdf';

const Blog = () => {
    const ref = React.createRef();


    return (
        <div className='my-md-5 py-5'>
            <div className='' ref={ref}>
                <div className='mb-5'>
                    <h2 className='fw-bold mb-4'>1. Tell us the differences between uncontrolled and controlled components?
                    </h2>
                    <h4 className='fw-normal fs-5'>Ans: A controlled component, form data is handled by a React component. Whereas in uncontrolled components, form data is handled by the DOM itself. </h4>
                </div>
                <div className='mb-5'>
                    <h2 className='fw-bold mb-4'>2. How to validate React props using PropTypes?
                    </h2>
                    <h4 className='fw-normal fs-5'>Ans: propTypes is used for props validation. If some of the props aren't using the correct type that we assigned, we will get a console warning. After we specify validation patterns, we will set App.defaultProps. </h4>
                </div>
                <div className='mb-5'>
                    <h2 className='fw-bold mb-4'>3. Tell us the difference between nodejs and express js?
                    </h2>
                    <h4 className='fw-normal fs-5'>Ans: NodeJS is the package, which provides the JavaScript run-time environment,
                        and Express.js is a web framework built on top of Node.js for server-side web development.</h4>
                </div>
                <div className='mb-5'>
                    <h2 className='fw-bold mb-4'>4. What is a custom hook, and why will you create a custom hook?
                    </h2>
                    <h4 className='fw-normal fs-5'>Ans: Custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks. when you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.</h4>
                </div>
            </div>
            <ReactToPdf targetRef={ref} filename="blog.pdf" x={10} y={10} scale={.5}>
                {({ toPdf }) => (
                    <Button variant="success" onClick={toPdf}>Download Blog PDF</Button>
                )}
            </ReactToPdf>
        </div>
    );
};

export default Blog;
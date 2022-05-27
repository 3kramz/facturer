import React from 'react';


const Blogs = () => {
    return (
        <div className="p-10">
            <div className="card lg:card-side bg-base-200 shadow-xl">
                <figure>
                    <img  className="lg:w-[400px]" src="logo192.png" alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title"> How will you improve the performance of a React Application?</h2>
                    <p>Theree are several way to improve react application performance. re-rendering a component only happens when necessary, we can extract the part of code that cares about the component state, making it local to that part of the code.</p>
                    <p>By default when a react component rendured, a bundle file contaile the whole code. when we create multiple component instead of a single large file, it need less time to compile to the browser. so that we can create multiple component to optimize time complexity </p>
                    <p>If we have an application where we render several rows of items on a page. Whether or not any of the items display in the browser viewport, they render in the DOM and may affect the performance of our app</p>
                    <p>To optimize an application that consists of several images, we can avoid rendering all of the images at once to improve the page load time. With lazy loading, we can wait until each of the images is about to appear in the viewport before we render them in the DOM.</p>

                </div>

            </div>

            <div className="card lg:card-side bg-base-200 shadow-xl my-10">

                <div className="card-body lg:w-1/2">
                    <h2 className="card-title">What are the different ways to manage a state in a React application?</h2>
                    <p>There are four main types of state you need to properly manage in your React apps:

                       <li> Local state</li>
                       <li> Global state</li>
                       <li> Server state</li>
                       <li> URL state</li>
                       </p>


                </div>

                <div className="card-body lg:w-1/2">
                    <h2 className="card-title"> Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>

                    <p> useState and using Spread operator are use for state management.
                        But there is a different between them. if we use Spread operator to change state,it needed re-rendur mnually.it cant re-rendure automatically.
                    </p>
                    <p>On the other hand , when we use useState , after any  change of related state it re-rendure automatically. thats why we dont use state directly</p>
                   

                </div>

            </div>
            <div className="card lg:card-side bg-base-200 shadow-xl my-10">

                <div className="card-body ">
                    <h2 className="card-title">What is a unit test? Why should write unit tests?</h2>
                    <p>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.
                       </p>


                </div>


            </div>
            <div className="card lg:card-side bg-base-200 shadow-xl my-10">

                <div className="card-body ">
                    <h2 className="card-title">How does prototypical inheritance work?</h2>
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>


                </div>


            </div>
        </div>
    );
};

export default Blogs;
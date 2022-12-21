import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Bloge');
    return (
        <section data-theme="valentine" className="bg-blue-100 ">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 text-black xl:px-32">
                    <div>
                        <h3 className="font-bold text-xl">What difference between SQL and NoSQL?</h3>
                        <p className="mt-1 dark:text-gray-400"><span className='font-bold'>Ans:</span>From analysts and engineers to IT decision makers, many are familiar with Relational Database Management Systems (RDBMS) and the Structured Query Language (SQL) used to interact with them. While these terms refer to a decades-old paradigm which remains a wide standard, today the sheer variety and depth of database systems can be dizzying. What’s more, rising volumes of unstructured data, availability of storage and processing power, and evolving analytic requirements have generated interest in fundamentally different technologies.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl">What is JWT, and how does it work?</h3>
                        <p className="mt-1 dark:text-gray-400"> <span className='font-bold'>Ans:</span>JWT, or JSON Web Token, is an open standard(RFC 7519) set of claims to share security information or authorization/authentication requests between a client and a server. Each JWT contains encoded JSON objects. JWTs are signed using a cryptographic algorithm by the token’s issuer to ensure that No one could alter the claims after the token is issued and later can be used by the receiving party to verify the token.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl">What is the difference between javascript and NodeJS?</h3>
                        <p className="mt-1 dark:text-gray-400"><span className='font-bold'>Ans:</span><span className='underline text-green-500'>1. NodeJS :</span>
                            NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.

                            <span className='underline text-green-500' > 2. JavaScript :</span>
                            Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl">How does NodeJS handle multiple requests at the same time?</h3>
                        <p className="mt-1 dark:text-gray-400"><span className='font-bold'>Ans:</span>I bet that you are familiar with JavaScript concurrency in Node.js. Also, most probably you have already heard that Node excels at handling multiple asynchronous I/O operations. But have you ever wondered what does it really mean? There are lots of potential questions. How exactly it’s done in Node.js? Isn’t it single-threaded? What about operations other than I/O? Is there any way you can handle them without making your app unresponsive? In the article, I’m hoping to clarify how Node deals with asynchronicity under the hood.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
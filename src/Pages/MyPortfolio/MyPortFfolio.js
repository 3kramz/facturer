import React from 'react';

const MyPortFfolio = () => {
    return (
        <div  className="p-10">
            <div className="card p-5 bg-base-100 shadow-xl">
                <div className="avatar card-body items-center text-center">
                    <div className="w-60  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://i.ibb.co/B6yF332/msg1376083639-323.jpg" alt="" />
                    </div>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl">Sultan Mahmud Ekram</h2>
                    <p> I have just over a year of experience as a junior software engineer with First Technology. In my short time there, I've already contributed to over a dozen projects and assisted with managing one project for one of the firm's long-time clients</p>
                    <table className="table w-full mx-auto">
                        <tbody>

                            <tr>
                                <th>Email</th>
                                <td><p>smahmud1098@gmail.com</p></td>
                            </tr>
                            <tr>
                                <th>Educaton</th>
                                <td><p>Computer Science And Engineering, <br />
                                    Univarsity of Brahmanbaria</p>
                                </td>
                            </tr>
                            <tr>
                                <th>List of Technologies</th>
                                <td>
                                    <ul>
                                        <li>HTML</li>
                                        <li>css</li>
                                        <li>Javascriot</li>
                                        <li>React JS</li>
                                        <li>Node JS</li>
                                        <li>MongoDB</li>
                                        <li>Bootstrap</li>
                                        <li>Tailwind css</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <th>Best</th>
                                <td>
                                <ul>
                                        <li><a  href="https://riven-driven.web.app/"> Riven Driven</a></li>
                                        <li><a  href="https://klub-fit.web.app/">Klub fit</a></li>
                                        <li><a  href="https://tesla-s-review.netlify.app/">Tesla Car Review </a></li>
                                        
                                    </ul>
                                </td>
                            </tr>

                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
};

export default MyPortFfolio;
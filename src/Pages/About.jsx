import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function About() {
    return (
        <>
            <Navbar />
            <div className="d-flex flex-column align-items-center" style={{height: "80vh"}}>
                <h1 className="text-center">About Us</h1>
                <hr className='container' />
                <p className='container text-center lead'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ea nemo illum unde, dicta earum praesentium,
                    error aliquam reiciendis vel delectus natus? Magnam voluptate consectetur enim nostrum officiis esse atque!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, voluptas, labore dignissimos hic provident amet
                    perferendis laborum repellendus quidem consequatur ad dolore veniam! Cum, quam dignissimos. Similique labore cumque fuga.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eaque eius ea porro tempora, eveniet eum minima
                    nesciunt, tenetur quod fugit. Iusto, corporis nesciunt? Voluptas nihil consequatur debitis officiis incidunt.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, magni nihil. Veritatis ullam magnam, quasi nostrum
                    iste quaerat deleniti magni cum repellendus illum aperiam deserunt omnis sapiente recusandae quod nisi?
                </p>
                <h2 className="text-center">Our Products</h2> <br />
                <div className=" container row">
                    <div className="col-md-3 col-sm-6 mb-3 px-3">
                        <div className="card h-100">
                            <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
                            <div className="card-body">
                                <h5 className="card-title text-center">Electronics</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-3 px-3">
                        <div className="card h-100">
                            <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
                            <div className="card-body">
                                <h5 className="card-title text-center">Mens's Clothing</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-3 px-3">
                        <div className="card h-100">
                            <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
                            <div className="card-body">
                                <h5 className="card-title text-center">Women's Clothing</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-3 px-3">
                        <div className="card h-100">
                            <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
                            <div className="card-body">
                                <h5 className="card-title text-center">Jewelery</h5>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default About
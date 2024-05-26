import { useState } from 'react'

function RegisterForm() {

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        cPassword: ""
    })

    const handelInput = (event) => {
        const name = event.target.name
        const value = event.target.value

        setFormData((prev) => ({...prev, [name]: value}))        
    }

    return (

        <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
                <div className="card text-black" style={{ borderRadius: "25px" }}>
                    <div className="card-body">
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                <form className="mx-1">

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                            <input type="text" id="form3Example1c" className="form-control"
                                            name='username'
                                            value={formData.username}
                                            onChange={handelInput} />
                                            
                                            <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                            <input type="email" id="form3Example3c" className="form-control"
                                            name='email'
                                            value={formData.email}
                                            onChange={handelInput} />
                                            <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                            <input type="password" id="form3Example4c" className="form-control"
                                            name='password'
                                            value={formData.password}
                                            onChange={handelInput} />
                                            <label className="form-label" htmlFor="form3Example4c">Password</label>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                            <input type="password" id="form3Example4cd" className="form-control"
                                            name='cPassword'
                                            value={formData.cPassword}
                                            onChange={handelInput} />
                                            <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                                        </div>
                                    </div>

                                    <h4>My name is: {formData.username} and email is: {formData.email}</h4>
                                    

                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg">Register</button>
                                    </div>

                                </form>

                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm
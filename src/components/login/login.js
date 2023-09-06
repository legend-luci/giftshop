import './login.css'

function Login(){
    return(
        <div id='main'>
            <div className="container-fluld">
                <div className="row ">
                    <div className='col-lg-12 '>
                        <div className='container-xxl'>
                            <div className="row" id='box1'>
                                <div className='col-lg-6' id='small1'>
                                    <div id='bk'>
                                        <h1>OverRecipes</h1>
                                        <h2>Welcome To </h2>
                                        <h3>All Recipes web</h3>
                                        <div id="imge">
                                            <img src='https://th.bing.com/th/id/R.ac600fda6624aa996c269fd4d5d8eefe?rik=ukcyXhmR9uPJbg&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f5%2fIndian-Food-PNG-HD-420x205.png&ehk=g5T9Xe%2fF6JPC9Nz71CEGI%2fxl8oAIjSk%2fp0M6pZzWr3k%3d&risl=&pid=ImgRaw&r=0' className='img-fluid'></img>
                                            {/* <img src='https://i.pinimg.com/originals/ac/e2/18/ace218a4f4b81019717b67dffe6dfa45.png' className='img-fluid'></img> */}
                                        </div>
                                    </div>
                                </div>

                                <div className='col-lg-6' id='small2'>
                                    <div id='bk1'>
                                        <h2>Login</h2>
                                        <p>Welcome! Login to get amzing Recipes </p>
                                        {/* input find */}
                                        <div id='inputfile'>
                                            <h6>Username</h6>
                                            <input type="text" class="form-control" placeholder="Enter the username" />
                                        </div>
                                        <div id='inputfile'>
                                            <h6>Password</h6>
                                            <input type="text" class="form-control" placeholder="Enter the Password" />
                                        </div>

                                        {/* check box*/}
                                            <div id='check'>
                                            <input type="checkbox" />
                                            <span class="checkmark"></span>  
                                            <p>Remember Me</p>   
                                            </div>   
                                            
                                            <button type="button" class="btn btn-secondary" id='btn1'>Login</button>                                
                                    </div>
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
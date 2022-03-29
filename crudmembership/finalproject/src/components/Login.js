import {useRef, useState, useEffect } from "react";

const Login = () =>{
    const userRef = useRef();
    const errRef = useRef();
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
   

    useEffect(() => {
        userRef.current.focus();
    },[])
    useEffect(() => {
        setErrMsg('');
    }, [user,pwd])
     
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, pwd);
        setUser('');
        setPwd('');
        setSuccess(true);
    }
    return(
      <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1><br/>
                    <p>
                        <a href="/home">Go to Home</a>
                    </p>
                   <div>
                       <h1 className="bill">Success is a lousy teacher. <br/> It seduces smart people into thinking they can't lose.</h1>
                       <h5>Bill Gates</h5>
                   </div>
                </section>
            ):(

            
        <div className="container">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Sign In</h1>
            <form className="mb-3" onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <br/><br/>
                    <input
                        type="text"
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                    />
                    <br/><br/>
                <label htmlFor="password"> Password  :</label>
                <br/><br/>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                    />
                    <br/><br/>
                <button className="btn btn-primary">Log In</button>
            </form>
            <p>
                Don't have an Account?<br />
                <span className="line">
                    {/*put router link here*/}
                    <a href="/register">Sign Up</a>
                </span>
            </p>
        </div>
            )}
      </>
    );
}
export default Login;
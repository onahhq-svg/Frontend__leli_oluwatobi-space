import { AppleIcon, FacebookIcon, GoogleIcon } from "../../assets";
import SignupinHeader from "../../components/auth-screens-components";
import { FinalAuthScreenElement, InputField, IntroduceOtherAuthOptions, SignupOptions, SubmitButton } from "../../components/auth-screens-components";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [errors, setErrors] = useState({email: "", password: ""});
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!password || !email) {
      setErrors({email: !email ? "Email field is required" : "", password: !password ? "Password field is required": ""});
    } else if (email !== "test@gmail.com" || password !== "test123") {
      setErrors({email: "", password: "Incorrect email or password"});
    } else {
      alert("Login successfully!");
    }

  }
    return (
      <section className="bg-linear-to-tr from-[#B6D6DC] to-[#0072CE] w-full min-h-screen grid grid-cols-2 gap-20 px-25 py-16">
        <section className="bg-hero bg-cover bg-center rounded-tl-[100px] -223.25 rounded-br-[100px] shadow-signup px-6 pb-38.5 relative">
          <div className="bg-[#44546266]/80 inset-0 absolute rounded-tl-[100px] rounded-br-[100px]"></div>
          <div className="font-semibold text-[#FFFFFFCC] mt-120 mx-auto text-center relative z-10">
            <h2 className="text-[48px]">Welcome Back</h2>
            <p className="text-2xl mt-4 leading-[100%]">
              Sign In to continue tracking, understanding, and improving your
              well being.
            </p>
          </div>
        </section>
        <section className="bg-[#F7F9FC] relative overflow-hidden rounded-tl-[100px] rounded-br-[60px] py-22.5 px-12.5">
          <div className="bg-[#0072CE] absolute blur-[120px] -top-45 left-1/2 -translate-x-1/3 h-67.25 w-125 rounded-full"></div>

          <SignupinHeader />
          <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-tl-[40px] rounded-br-[100px] mt-5 py-25">
            <form
              action=""
              className="px-4 text-sm text-[#0F172A] font-medium flex flex-col gap-5"
            >
              <div>
                <InputField
                  htmlFor="email-phonenumber"
                  labelname="Email/Phone Number"
                  inputType="text"
                  inputName="email-phonenumber"
                  inputID="email-phonenumber"
                  placeholder="Enter your email or phone number"
                  hasError={errors.email}
                  onChange={(e) => { setEmail(e.target.value); setErrors((prev) => ({...prev, email: ""})) }}
                />
                {errors.email && <p className="text-[#DC2626] text-xs mt-2">{errors.email}</p>}
              </div>
              <div>
                <InputField
                  htmlFor="password"
                  labelname="Password"
                  inputType="password"
                  inputName="password"
                  inputID="password"
                  placeholder="********"
                  hasError={errors.password}
                  onChange={(e) => { setPassword(e.target.value); setErrors((prev) => ({...prev, password: ""})) }}
                />
                <div className="flex justify-between items-center text-xs mt-2.5">
                  {errors && <p className="text-[#DC2626]">{errors.password}</p>}
                  <p className="text-[#0F172A] text-right">
                    Forgot Password?{" "}
                    <Link to="" className="text-[#0072CE]">
                      Click here
                    </Link>
                  </p>
                </div>
              </div>

              <SubmitButton text="Login" onClick={handleSubmit} />
            </form>
            <IntroduceOtherAuthOptions text="Or Login with" />
            <SignupOptions />
            <FinalAuthScreenElement
              text={
                <>
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-[#0072CE]">
                    Create one
                  </Link>
                </>
              }
            />
          </div>
        </section>
      </section>
    );
}

export default Login;
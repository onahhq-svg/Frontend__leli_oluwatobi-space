import { AppleIcon, FacebookIcon, GoogleIcon } from "../../assets";
import SignupinHeader from "../../components/auth-screen-components";
import { FinalAuthScreenElement, InputField, IntroduceOtherAuthOptions, SignupOptions, SubmitButton } from "../../components/auth-screen-components";
import { Link } from "react-router-dom";

function Login() {
    return (
      <section className="bg-[#F7F9FC] w-full min-h-screen grid grid-cols-2 gap-20 px-25 py-16">
        <section className="bg-hero bg-cover bg-no-repeat bg-center rounded-tl-[100px] -223.25 rounded-br-[100px] shadow-signup px-6 pb-38.5 relative">
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
              <InputField
                htmlFor="email-phonenumber"
                labelname="Email/Phone Number"
                inputType="text"
                inputName="email-phonenumber"
                inputID="email-phonenumber"
                placeholder="Enter your email or phone number"
              />
              <InputField
                htmlFor="password"
                labelname="Password"
                inputType="password"
                inputName="password"
                inputID="password"
                placeholder="********"
              />
              <SubmitButton text="Login" />
            </form>
            <IntroduceOtherAuthOptions text="Or Login with" />
            <SignupOptions />
            <FinalAuthScreenElement
              text={
                <>
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-[#0072CE]">Create one</Link>
                </>
              }
            />
          </div>
        </section>
      </section>
    );
}

export default Login;
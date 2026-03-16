import { AppleIcon, CloseEye, FacebookIcon, GoogleIcon, Logo } from "../../assets"
import { Link } from "react-router-dom"

function InputField({ htmlFor, labelname, inputType, inputName, inputID, placeholder }) {
  return (
    <div className="w-105.25 flex flex-col gap-2 placeholder:text-sm relative">
      <label htmlFor={htmlFor}>{labelname}</label>
        <input
          type={inputType}
          name={inputName}
          id={inputID}
          placeholder={placeholder}
          className="rounded-md border border-[#E2E8F0] p-2.5 focus:outline-[#E2E8F0] placeholder:text-[#475569] placeholder:font-semibold"
        />
        {inputType === "password" && 
          (
          <img src={CloseEye} alt="A close eye symbol" className="w-5.5 absolute cursor-pointer -translate-y-1/2 top-3/4 left-7/8" />
        )} 
    </div>
  );
}

function SignupOption({image}) {
  return (
    <div className="border-[0.7px] border-[#E2E8F0] shadow-[0_0.7_1.41_0_#1018280D] rounded-[5.63px] w-17.5 py-[11.55px]">
      <img src={image} alt="A google display icon" className="mx-auto" />
    </div>
  );
}

function SignUp() {
    return (
      <section className="bg-linear-to-tr from-[#B6D6DC] to-[#0072CE] w-full flex items-center justify-between gap-15 px-15 py-16.25">
        <section className="bg-hero bg-cover bg-center rounded-tl-[100px] rounded-br-[100px] h-223.25 w-[50%] text-center text-[#FFFFFF] font-semibold relative shadow-signup px-6 pb-38.5">
          <div className="bg-[#44546266] inset-0 rounded-br-[100px] rounded-tl-[100px] absolute"></div>
          <div className="mt-127 relative z-10">
            <h2 className="text-[48px] leading-[100%]">New Here?</h2>
            <p className="text-2xl leading-[] mt-6">
              Create an account to track, understand, and improve your wellbeing
              with daily insights.
            </p>
          </div>
        </section>

        <section className="rounded-tl-[100px] rounded-br-[100px] bg-[#F7F9FC] h-223.25 w-[50%] px-10 -13">
          <div className="flex flex-col items-center justify-center">
            <img src={Logo} alt="HealTek lgoo icon" />
            <h3 className="text-[#0F172A] font-semibold text-2xl mt-4 mb-2">
              Create an Account
            </h3>
            <p className="text-base text-[#475569]">
              Start your journey to better health
            </p>
          </div>
          <div className="bg-[#FFFFFF] rounded-tl-[40px] py-[36.5px] rounded-br-[100px] mt-5">
            <form
              action=""
              className="flex flex-col gap-5 px-4 text-[#0F172A] text-sm font-medium"
            >
              <InputField
                htmlFor="full-name"
                labelname="Full Name"
                inputType="text"
                inputName="full-name"
                inputID="full-name"
                placeholder="Enter your name"
              />
              <InputField
                htmlFor="email/phone-number"
                labelname="Email/Phone number"
                inputType="text"
                inputName="email/phone-number"
                inputID="email/phone-number"
                placeholder="Enter your email/phone number"
              />
              <InputField
                htmlFor="password"
                labelname="Password"
                inputType="password"
                inputName="password"
                inputID="password"
                placeholder="********"
              />
              <InputField
                htmlFor="confirm-password"
                labelname="Confirm Password"
                inputType="password"
                inputName="confirm-password"
                inputID="confirm-password"
                placeholder="********"
              />
              <div className="flex items-center-safe gap-2">
                <input
                  type="checkbox"
                  name="terms&service"
                  id="terms&service"
                  className="rounded-sm w-5.5 h-5 bg-[#E2E8F0] checked:bg-[#0072CE] appearance-none"
                />
                <label
                  htmlFor="terms&service"
                  className="text-[#A9A9A9] font-semibold text-[12px] leading-3.5"
                >
                  I agree to the Leli
                  <span className="text-[#0072CE]"> Terms of Service</span> and
                  <span className="text-[#0072CE]"> Privacy Policy</span>
                </label>
              </div>
              <button
                type="submit"
                className="bg-[#E6F1FA] border border-[#E2E8F0] rounded-[10px] py-2.5 font-semibold text-base"
              >
                Create account
              </button>
            </form>
            <div className="flex items-center mx-12.5 mt-5">
              <div className="grow border-t border-[#E2E8F0]"></div>
              <p className="text-[#475569] mx-3 font-medium">Or Sign Up With</p>
              <div className="grow border-t border-[#E2E8F0]"></div>
            </div>
            <div className="w-[234.54px] flex items-center mx-auto gap-[11.27px] mt-5">
              <SignupOption image={GoogleIcon} />
              <SignupOption image={AppleIcon} />
              <SignupOption image={FacebookIcon} />
            </div>
            <p className="text-center text-[#475569] text-[12px] mt-2.25">
              Already have an account?{" "}
              <Link to="/login" className="text-[#0072CE]">
                Login
              </Link>
            </p>
          </div>
        </section>
      </section>
    );
}

export default SignUp;
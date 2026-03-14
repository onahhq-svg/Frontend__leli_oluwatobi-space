import { CloseEye, Logo } from "../../assets"

function InputField({ htmlFor, labelname, inputType, inputName, inputID, placeholder }) {
  return (
    <div className="w-105.25 flex flex-col gap-2 placeholder:text-sm placeholder:text-[#475569] placeholder:font-semibold">
      <label htmlFor={htmlFor}>{labelname}</label>
        <input
          type={inputType}
          name={inputName}
          id={inputID}
          placeholder={placeholder}
          className="rounded-md border border-[#E2E8F0] p-2.5 focus:outline-[#E2E8F0] relative"
        />
        {inputType === "password" && 
          (
          <img src={CloseEye} alt="A close eye symbol" className="w-5.5 absolute  cursor-pointer" />
        )} 
    </div>
  );
}

function SignUp() {
    return (
      <section className="bg-linear-to-r from-[#B6D6DC] to-[#0072CE] h- w-full flex items-center gap-31.75 px-25 -16.25">
        <section className="bg-hero bg-cover bg-center rounded-tl-[100px] rounded-br-[100px] min-h-screen w-[50%] text-center text-[#FFFFFF] font-semibold relative shadow-signup px-6">
          <div className="bg-[#44546266] inset-0 rounded-br-[100px] rounded-tl-[100px] absolute"></div>
          <div className="mt-100 relative z-10">
            <h2 className="text-[48px] leading-[100%]">New Here?</h2>
            <p className="text-2xl leading-[] mt-6">
              Create an account to track, understand, and improve your wellbeing
              with daily insights.
            </p>
          </div>
        </section>

        <section className="rounded-tl-[100px] rounded-br-[60px] bg-[#F7F9FC] min-h-screen w-[50%] px-12.5">
          <div className="flex flex-col items-center justify-center">
            <img src={Logo} alt="HealTek lgoo icon" />
            <h3 className="text-[#0F172A] font-semibold text-2xl mt-4 mb-2">
              Create an Account
            </h3>
            <p className="text-base text-[#475569]">
              Start your journey to better health
            </p>
          </div>
          <form
            action=""
            className="bg-[#FFFFFF] rounded-tl-[40px] rounded-br-[100px] mt-5 flex flex-col gap-5 px-4 text-[#0F172A] py-[36.5px] text-sm font-medium"
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
                className="border-0 bg-[#E2E8F0]"
              />
              <label htmlFor="terms&service">
                I agree to the Leli Terms of Service and Privacy Policy
              </label>
            </div>
            <button
              type="submit"
              className="bg-[#E6F1FA] border border-[#E2E8F0] rounded-[10px] py-2.5 font-semibold text-base"
            >
              Create account
            </button>
            <div className="flex items-center mx-12.5">
              <div className="grow border-t border-[#E2E8F0]"></div>
              <p className="text-[#475569] mx-3">
                Or Sign Up With
              </p>
              <div className="grow border-t border-[#E2E8F0]"></div>
            </div>
          </form>
        </section>
      </section>
    );
}

export default SignUp;
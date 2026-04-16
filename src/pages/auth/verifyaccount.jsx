import { CheckedMarkIcon } from "../../assets";
import { VerificationCodeInput } from "../../components/auth-screens-components";

function VerifyAccount(params) {
    return (
      <section className="bg-[#F7F9FC] w-full h-full -31">
        <div className="w-272.5 border-3 border-[#E2E8F0] rounded-xl mx-auto text-center pt-10 pb-12">
          <h3 className="text-[#0F172A] font-semibold text-3xl leading-11.5">
            Verify Your Account
          </h3>
          <p className="mt-6 text-xl text-[#475569]">
            Enter the 6-digit code sent to your email
          </p>
          <p className="text-lg mt-5 leading-[150%] text-[#475569]">
            We sent verification code to your email meeee.en@gmail.com. <br />
            You can check your inbox and enter number in the boxes below.
          </p>
          <div className="-[616.67px] gap-[12.33px] mt-14 flex items-center justify-center">
            <VerificationCodeInput />
            <VerificationCodeInput />
            <VerificationCodeInput />
            <VerificationCodeInput />
            <VerificationCodeInput />
            <VerificationCodeInput />
          </div>
          <p className="mt-8">Didn’t received the code? Resend</p>
          <button
            type="submit"
            className="bg-[#E6F1FA] border border-[#E2E8F0] rounded-[10px] w-109.25 py-2.75 text-[#0F172A] mt-15"
          >
            Verify and Login
          </button>
          <p className="text-[#4DA3E6] -tracking-[1.1%] mt-6">Back to Login</p>
        </div>
        <div className="fixed inset-0 w-full bg-[#FFFFFF80] backdrop-blur-md overflow-hidden flex justify-center items-center hidden">
          <div className="bg-[#0072CE] w-125.75 rounded-xl flex flex-col gap-5 justify-center items-center text-[#FFFFFF] py-12.75 px-24.75 text-lg">
            <img
              src={CheckedMarkIcon}
              alt="A mark icon describing a completed action"
            />
            <p>Account created successfully</p>
            <button
              type="submit"
              className="bg-[#E6F1FA] w-full border-[#E2E8F0] border text-base text-[#0F172A] rounded-[10px] py-2.75 cursor-pointer"
            >
              Continue
            </button>
          </div>
        </div>
      </section>
    );
}

export default VerifyAccount;
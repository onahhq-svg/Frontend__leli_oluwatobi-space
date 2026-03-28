import { Link } from "react-router-dom";
import { BioOptionsDiv } from "../../components/auth-screens-components";

function SignupBio() {
    return (
      <section className="bg-[#F7F9FC] w-full flex flex-col items-center justify-center py-21.75 font-semibold">
        <h3 className="text text-center-[#0F172A] text-[32px] leading-5.25">
          Tell us a bit about yourself
        </h3>
        <div className="mb-8 text-center mt-14">
          <h5 className="text-xl">What's your age range?</h5>
          <p className="font-normal text-[#475569] mb-5 mt-1">
            This helps us personalize recommendations
          </p>
          <BioOptionsDiv />
        </div>

        <div className="text-center">
          <h5 className="text-xl">How do you identify?</h5>
          <p className=" text-[#475569] font-normal mb-5 italic mt-1">
            You can skip this if you prefer.
          </p>
          <BioOptionsDiv />
        </div>

        <div className="w-130.75">
          <button
            type="submit"
            className="bg-[#0057A3] border border-[#E2E8F0] mt-12 w-full py-2.5 text-[#FFFFFF] rounded-[10px]"
          >
            Get Started
          </button>
          <p className="text-[#475569] font-normal w-full text-right pt-1 text-[12px]">
            Already have an account?{" "}
            <Link to='/login' className="text-[#0072CE] text-[12px]">Login</Link>
          </p>
        </div>
      </section>
    );
}


export default SignupBio;
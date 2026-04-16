import { Link } from "react-router-dom";
import { useState } from "react";


function SignupBio() {
  const [activeIdAge, setActiveIdAge] = useState(null);
  const [activeIdSex, setActiveIdSex] = useState(null);

  const ageRange = [{ age: "18-24" }, { age: "25-34" }, { age: "35-44" }, { age: "45-54" }, { age: "55+" }]
  const sexIdentity = [{ sex: "Female" }, { sex: "Male" }, { sex: "Non-binary" }, { sex: "Prefer not to say" }]
  
    return (
      <section className="bg-[#F7F9FC] w-full flex flex-col items-center justify-center py-21.75 font-semibold text-[#0F172A]">
        <h3 className="text text-center text-[32px] leading-5.25">
          Tell us a bit about yourself
        </h3>
        <div className="mb-8 text-center mt-14">
          <h5 className="text-xl">What's your age range?</h5>
          <p className="font-normal text-[#475569] mb-5 mt-1">
            This helps us personalize recommendations
          </p>
          <div className="grid grid-rows-5 gap-2">
            {ageRange.map((range, index) => (
              <button key={index}
                className={` ${activeIdAge === index ? "bg-[#0057A3] text-[#FFFFFF]" : "bg-[#E6F1FA]"} rounded-[10px] border border-[#E2E8F0] py-2.5 w-130.75`}
                onClick={() => {
                  setActiveIdAge(index);
                }}
              >
                {range.age}
              </button>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h5 className="text-xl">How do you identify?</h5>
          <p className=" text-[#475569] font-normal mb-5 italic mt-1">
            You can skip this if you prefer.
          </p>
          <div className="grid grid-rows-4 gap-2">
            {sexIdentity.map((option, index) => (
              <button key={index}
                className={` ${activeIdSex === index ? "bg-[#0057A3] text-[#FFFFFF]" : "bg-[#E6F1FA]"} rounded-[10px] border border-[#E2E8F0] py-2.5 w-130.75`}
                onClick={() => {
                  setActiveIdSex(index);
                }}
              >
                {option.sex}
              </button>
            ))}
          </div>
        </div>

        <div className="w-130.75">
          <button
            type="submit"
            className="bg-[#0057A3] border border-[#E2E8F0] mt-12 w-full py-2.5 text-[#FFFFFF] rounded-[10px] cursor-pointer"
          >
            Get Started
          </button>
          <p className="text-[#475569] font-normal w-full text-right pt-1 text-[12px]">
            Already have an account?{" "}
            <Link to="/login" className="text-[#0072CE] text-[12px]">
              Login
            </Link>
          </p>
        </div>
      </section>
    );
}


export default SignupBio;
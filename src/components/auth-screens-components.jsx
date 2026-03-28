import { Logo, CloseEye, OpenEye, GoogleIcon, FacebookIcon, AppleIcon } from "../assets";
import { useState } from "react";

function SignupinHeader() {
  return (
    <div className="flex flex-col items-center justify-center relative z-10">
      <img src={Logo} alt="HealTek logo icon" />
      <h3 className="text-[#0F172A] font-semibold text-2xl mt-4 mb-2">
        Create an Account
      </h3>
      <p className="text-base text-[#475569]">
        Start your journey to better health
      </p>
    </div>
  );
}
export default SignupinHeader;

export function InputField({
  htmlFor,
  labelname,
  inputType,
  inputName,
  inputID,
  placeholder,
}) {
  const [currentType, setCurrentType] = useState(inputType);
  function togglePassword(params) {
    setCurrentType(currentType === "password" ? "text" : "password");
  }
  return (
    <div className="flex flex-col gap-2 relative">
      <label htmlFor={htmlFor}>{labelname}</label>
      <input
        type={currentType}
        name={inputName}
        id={inputID}
        placeholder={placeholder}
        className={`rounded-md border p-2.5 focus:outline-[#E2E8F0] placeholder:text-[#475569] placeholder:font-medium placeholder:text-sm placeholder:leading-5.25`}
      />
      {inputType === "password" && (
        <img
          src={currentType === "text" ? OpenEye : CloseEye}
          alt="A close eye symbol"
          className="w-5.5 absolute cursor-pointer -translate-y-1/2 top-3/4 left-7/8"
          onClick={togglePassword}
        />
      )}
    </div>
  );
}


export function SubmitButton({ text }) {
  return (
    <button
      type="submit"
      className="bg-[#E6F1FA] border border-[#E2E8F0] rounded-[10px] py-2.5 font-semibold text-base"
    >
      {text}
    </button>
  );
}

export function IntroduceOtherAuthOptions({ text }) {
  return (
    <div className="flex items-center mx-12.5 mt-5">
      <div className="grow border-t border-[#E2E8F0]"></div>
      <p className="text-[#475569] mx-3 font-medium">{text}</p>
      <div className="grow border-t border-[#E2E8F0]"></div>
    </div>
  );
}

export function SignupOption({ image }) {
  return (
    <div className="border-[0.7px] border-[#E2E8F0] shadow-[0_0.7_1.41_0_#1018280D] rounded-[5.63px] w-17.5 py-[11.55px]">
      <img src={image} alt="A google display icon" className="mx-auto" />
    </div>
  );
}

export function SignupOptions() {
  return (
    <div className="w-[234.54px] flex items-center mx-auto gap-[11.27px] mt-5">
      <SignupOption image={GoogleIcon} />
      <SignupOption image={AppleIcon} />
      <SignupOption image={FacebookIcon} />
    </div>
  );
}
export function FinalAuthScreenElement({ text }) {
  return (
    <p className="text-center text-[#475569] text-[12px] mt-2.25">{text}</p>
  );
}

export function VerificationCodeInput() {
  return (
    <input
      type="text"
      name="verfication-code"
      id="verfication-code"
      className="bg-[#FEFEFE] border-[1.54px] rounded-xl border-[#E2E8F0] w-21.25 h-16.75 text-center focus:outline-[#E2E8F0]"
    />
  );
}

export function BioOptionsButton({content}) {
  return (
    <button className="bg-[#E6F1FA] rounded-[10px] border border-[#E2E8F0] py-2.5 w-130.75">
      {content}
    </button>
  );
}

export function BioOptionsDiv() {
  return (
    <div className="grid grid-rows-5 gap-2">
      <BioOptionsButton content="18-24" />
      <BioOptionsButton content="25-34" />
      <BioOptionsButton content="35-44" />
      <BioOptionsButton content="45-54" />
      <BioOptionsButton content="55+" />
    </div>
  );  
}
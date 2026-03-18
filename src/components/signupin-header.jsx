import { Logo } from "../assets";
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
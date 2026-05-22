import { AppleIcon, CloseEye, FacebookIcon, GoogleIcon, Logo } from "../../assets"
import { Link } from "react-router-dom"
import { useState } from "react";
import SignupinHeader from "../../components/auth-screens-components";
import { InputField, SubmitButton, IntroduceOtherAuthOptions, SignupOptions, FinalAuthScreenElement } from "../../components/auth-screens-components";



function SignUp() {
  const [errors, setErrors] = useState({
    fullName: "", email: "", password: {
      minLength: false,
      hasUpper: false,
      hasSpecialChar: false
    },
    confirmPassword: false
  })
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const validatePassword = (password) => {
    return {
      minLength: password.length >= 8,
      hasUpper: /[A-Z]/.test(password),
      hasSpecialChar: /[!@#$%^&*]/.test(password),
    };
  };
  function handleSubmit(e) {
    e.preventDefault()

    const passwordCheck = validatePassword(password)

    if (!email || !fullName || !password) {
      setErrors({ fullName: !fullName ? "All field is required" : "", email: !email ? "All field is required" : "", password: { minLength: false, hasUpper: false, hasSpecialChar: false } });
      return;
    } else if (!email.includes("@")) {
      setErrors((prev) => ({ ...prev, email: "Invalid email" }));
      return;
    } else if (!passwordCheck.minLength || !passwordCheck.hasUpper || !passwordCheck.hasSpecialChar) {
      setErrors((prev) => ({ ...prev, password: passwordCheck, }));
      return;
    } else if (password !== confirmPassword) {
      setErrors((prev) => ({...prev, confirmPassword: password !== confirmPassword }))
    }

    alert("Account successfully created!")
    setFullName("");
    setEmail("");
    setPassword("");
    setErrors({
      fullName: "",
      email: "",
      password: {
        minLength: false,
        hasUpper: false,
        hasSpecialChar: false,
      },
      confirmPassword: false
    });
  }

    return (
      <section className="bg-linear-to-tr from-[#B6D6DC] to-[#0072CE] w-full min-h-screen grid grid-cols-2 justify-between gap-15 px-15 py-16.25">
        <section className="bg-hero bg-cover bg-center rounded-tl-[100px] rounded-br-[100px] text-center text-[#FFFFFF] font-semibold relative shadow-signup px-6 pb-38.5">
          <div className="bg-[#44546266] inset-0 rounded-br-[100px] rounded-tl-[100px] absolute"></div>
          <div className="mt-127 relative z-10">
            <h2 className="text-[48px] leading-[100%]">New Here?</h2>
            <p className="text-2xl leading-[] mt-6">
              Create an account to track, understand, and improve your wellbeing
              with daily insights.
            </p>
          </div>
        </section>

        <section className="rounded-tl-[100px] rounded-br-[100px] bg-[#F7F9FC] px-10 py-12">
          <SignupinHeader />
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
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
                hasError={errors.fullName}
              />
              {errors.fullName && (
                <p className="text-[#DC2626] text-xs mt-2">{errors.fullName}</p>
              )}

              <InputField
                htmlFor="email/phone-number"
                labelname="Email/Phone number"
                inputType="text"
                inputName="email/phone-number"
                inputID="email/phone-number"
                placeholder="Enter your email/phone number"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                hasError={errors.email}
              />
              {errors.email && (
                <p className="text-[#DC2626] text-xs mt-2">{errors.email}</p>
              )}

              <InputField
                htmlFor="password"
                labelname="Password"
                inputType="password"
                inputName="password"
                inputID="password"
                placeholder="********"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                hasError={!errors.password.minLength || !errors.password.hasSpecialChar || !errors.password.hasUpper}
              />
              <div>
                <InputField
                  htmlFor="confirm-password"
                  labelname="Confirm Password"
                  inputType="password"
                  inputName="confirm-password"
                  inputID="confirm-password"
                  placeholder="********"
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  hasError={errors.confirmPassword}
                />
                {errors && <p className="text-[#DC2626] mt-2.5">{errors.fullName}</p>}
              </div>

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
                  <a className="text-[#0072CE]"> Terms of Service</a> and
                  <a className="text-[#0072CE]"> Privacy Policy</a>
                </label>
              </div>
              <SubmitButton text="Create Account" onClick={handleSubmit} />
            </form>
            <IntroduceOtherAuthOptions text="Or Sign Up With" />
            <SignupOptions />
            <FinalAuthScreenElement
              text={
                <>
                  Already have an account?{" "}
                  <Link to="/login" className="text-[#0072CE]">
                    Login
                  </Link>
                </>
              }
            />
          </div>
        </section>
      </section>
    );
}

export default SignUp;
import React from "react";
import { useState } from "react";
import Header from "../components/header";
import { Bluecircle, Ldpimage1, Ldpgimage2, Ldpgimage3, Malesmiling, Playvideoicon, Ellipse, Signup, BrowseExplore, Personalised, HealthFeed, ConnectProf, SocialExp, PersonalisedExp, Checkbox, HandsTogether, DownloadIOS, DownloadAndroid } from "../assets";

function DivComponent({description}) {
  return (
    <div className="flex items-center bg-[#FFFFFF] rounded-[10px] m-auto text-[24px] font-medium text-[#0F172A} mt-6 gap-4.5 px-[6.53rem] py-2 -tracking-[1.1%] text-[#0F172A]">
      <img src={Playvideoicon} alt="A play-video icon" />
      <p>{description}</p>
    </div>
  );
}

const DivComponent2 = ({image, title, description, animationType }) => {
  return (
    <div className="bg-[#FFFFFF] rounded-[20px] px-3.5 w-78.75 pt-5 pb-12.5 text-center -tracking-[1.1%]" data-aos={animationType}>
      <img src={image} alt="An image that visualise the text description" className="w-fit h-fit mb-3.5" />
      <h6 className="mb-2.5 text-base font-semibold leading-[136%]">{title}</h6>
      <p className="text-sm">{description}</p>
    </div>
  );
}

function DivComponent3({description}) {
  return (
    <div className="text-6 text-[#475569] flex items-center gap-2.75 mb-5">
      <img src={Checkbox} alt="A checked-box icon" />
      <p className="text-[#475569] text-6 leading-5">{description}</p>
    </div>
  );
}

function LandingPage() {
    return (
      <>
        <Header />

        <section className="my-18 mx-16 bg-[#E5F1FA] rounded-[20px] px-3.75 flex items-end gap-11.75">
          <div className="my-23.25 -[100%] -tracking-[1.1%] w-138.5" data-aos="zoom-in">
            <h1 className="font-bold text-[56px] text-[#0F172A] leading-15.5">
              Your Health, Connected In One Place
            </h1>
            <p className="text-[#475569] mt-4 text-[24px] font-medium">
              Discover trusted health information, connect with verified
              professionals, and explore wellness in a simple, human, and
              unified platform.
            </p>
            <button className="bg-[#0072CE] p-2.5 border border-[#E2E8F0] rounded-[10px] mt-8 w-103.75 text-[#FFFFFF] text-lg">
              Get Started
            </button>
            <p className="text-[#475569] text-sm mt-6">
              Available on Web and mobile
            </p>
          </div>
          <div className="relative w-170.25 px-3.5 right-2" data-aos="zoom-in">
            <div className="relative">
              <img src={Bluecircle} alt="" className="m-auto" />
              <img
                src={Malesmiling}
                alt="The hero image of a young male smiling while with his phone "
                className="absolute inset-0 -translate-y-1/3 bottom-1/2"
              />
            </div>

            <img
              src={Ldpimage1}
              alt="Image of a lady during workout session"
              className="absolute w-62.75 bottom-3/5 left-2"
            />
            <img
              src={Ldpgimage2}
              alt="Image of a doctor in a session with her client"
              className="absolute w-62.75 bottom-3/5 translate-x-1/3 right-1/6"
            />
            <img
              src={Ldpgimage3}
              alt="Image of lady in an online session an health expert"
              className="absolute w-62.75 bottom-1/13 left-2"
            />
          </div>
        </section>

        <section className="bg-[#0072CE] py-[136.5px] text-2xl -tracking-[1.1%]">
          <div className="w-[61.1rem] mx-auto" data-aos="zoom-in">
            <h2 className="text-[#FFFFFF] text-[48px] font-semibold text-center -tracking-[1.1%]">
              Health Information Is Scattered and Overwhelming
            </h2>
            {
              <DivComponent description="Different apps for medication, fitness, therapy, and wellness" />
            }
            {
              <DivComponent description="Conflicting information with no clear source of truth" />
            }
            {<DivComponent description="Hard to know what applies to you" />}
            <p className="text-[#FFFFFF] text-[16px] text-center mt-8">
              Managing your health shouldn’t feel this complicated.
            </p>
          </div>
        </section>

        <section className="px-16 py-18 flex items-center gap-9.25">
          <img
            src={Ellipse}
            alt="A diagram with infos of healthcare knowledge"
            className="w-[34.8rem] -[33.94rem]" data-aos="fade-right-down"
          />

          <div data-aos="zoom-out" data-aos-duration="600">
            <h2 className="font- text-[#0F172A] text-[48px] font-semibold leading-[120%]  mb-6 tracking-wide">
              Knowledge First. <br /> Care When You’re Ready.
            </h2>
            <p className="font-medium text-2xl text-[#475569] tracking-tight leading-[140%]">
              We bring health information, wellness tools, and professional
              guidance into one connected experience designed to feel familiar,
              calm, and easy to use.
            </p>
          </div>
        </section>

        <section className="bg-[#f7f9fc] p-16">
          <h2 className="text-[#0F172A] text-[48px] font-semibold text-center -tracking-[1.1%]">
            HOW IT WORKS
          </h2>
          <div
            className="mt-8 flex gap-12.75"
            data-aos="fade-down"
            data-aos-duration="600"
          >
            <div className="bg-[#FFFFFF] rounded-[17.65px] flex flex-col gap-[2.9rem] w-100 h-[246.6px] p-auto justify-center items-center shadow-custom text-[30px] text-[#475569] font-medium">
              <img
                src={Signup}
                alt="An icon to describe the signup action"
                className="w-[63.25px]"
              />
              <p>Sign Up</p>
            </div>
            <div className="bg-[#FFFFFF] rounded-[17.65px] flex flex-col gap-[2.9rem] w-100 h-[246.6px] p-auto justify-center items-center shadow-custom text-[30px] text-[#475569] font-medium">
              <img
                src={BrowseExplore}
                alt="An icon to describe the browse and explore action"
                className="w-[63.25px]"
              />
              <p>Browse & Explore</p>
            </div>
            <div className="bg-[#FFFFFF] rounded-[17.65px] flex flex-col gap-[2.9rem] w-100 h-[246.6px] p-auto justify-center items-center shadow-custom text-[30px] text-[#475569] font-medium">
              <img
                src={Personalised}
                alt="An icon to describe the personalised user's experience"
                className="w-[63.25px]"
              />
              <p>Personalised</p>
            </div>
          </div>
          <p className="text-4 text-[#0072CE] text-center mt-8 -tracking-[1.1%]">
            No medical jargon. No confusing navigation.
          </p>
        </section>

        <section className="bg-[#E5F1FA] pt-18 text-[#0F172A] pb-9">
          <h2 className="text-[48px] font-semibold mb-8 -tracking-[1.1%] text-center">
            Key Features
          </h2>
          <div className="flex items-center justify-center gap-4">
            <DivComponent2
              image={HealthFeed}
              title="A Unified Health Feed"
              description="Explore wellness tips, health content, and updates in one place."
              animationType="flip-right"
            />
            <DivComponent2
              image={ConnectProf}
              title="Connect With Trusted Professionals"
              description="Follow verified doctors, therapists, and wellness experts."
              animationType="flip-left"
            />
            <DivComponent2
              image={PersonalisedExp}
              title="Personalised Experience"
              description="Your feed adapts to your interests, needs, and location."
              animationType="flip-right"
            />
            <DivComponent2
              image={SocialExp}
              title="Calm, Social Experience"
              description="Engage with health content in a supportive, distraction-free environment."
              animationType="flip-left"
            />
          </div>
        </section>

        <section className="bg-[#f7f9fc] px-16 flex items-center py-18">
          <div data-aos="fade-down" data-aos-duration="800">
            <h3 className="text-[48px] font-semibold text-[#0F172A] mb-8 leading-[120%] tracking-[1.1%]">
              Built with trust at the core
            </h3>
            <DivComponent3 description="Verified health professionals" />
            <DivComponent3 description="Privacy-first approach" />
            <DivComponent3 description="Designed to grow witth your health journey" />
            <p className="text-base text-[#475569] leading-5 mt-1">
              Your data stays yours
            </p>
          </div>
          <img
            src={HandsTogether}
            alt="An image of hands joined together to symbolise a built trust"
            className="w-188.75" data-aos="fade-down" data-aos-duration="800"
          />
        </section>

        <section className="text-center pt-33 pb-27.75 bg-[#0072CE] text-[#FFFFFF] text-6">
          <div data-aos="fade-up" data-aos-duration="800">
            <h3 className="text-[40px] font-bold mb-4">
              Start your health journey today
            </h3>
            <p>
              Join a growing community focused on clarity, connection and
              wellbeing.
            </p>
            <a href="#">
              <button className="mt-6 text-4 bg-[#0057A3] border border-[#E2E8F0] rounded-[10px] w-90.75 py-[17.5px] transition-transform duration-300 hover:scale-110">
                Get Started
              </button>
            </a>
          </div>
        </section>

        <footer className="bg-[#0F172A] px-16 text-[#FFFFFF] font-semibold flex justify-between items-start pt-4.25 pb-27.25">
          <div>
            <h5 className="text-6 mb-4 mt-3">Download Our Mobile App</h5>
            <div className="flex items-center gap-6">
              <img
                src={DownloadIOS}
                alt="A prompt to download the app for an IOS device"
              />
              <img
                src={DownloadAndroid}
                alt="A prompt to download the app for an Android device"
              />
            </div>
          </div>
          <ul className="flex items-center gap-8 text-lg ">
            <li>About</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </footer>
      </>
    );
}

export default LandingPage;

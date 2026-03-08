import React from "react";
import { useState } from "react";
import Header from "../components/header";
import { Bluecircle, Ldpimage1, Ldpgimage2, Ldpgimage3, Malesmiling, Playvideoicon } from "../assets";

function DivComponent({description}) {
  return (
    <div className="flex items-center justify-center bg-[#FFFFFF] rounded-[10px] m-auto text-[24px] text-[#0F172A] mt-[24px] w-[978px] py-[8px] -[16px] gap-[18px]">
      <img src={Playvideoicon} alt="" />
      <p>{description}</p>
    </div>
  );
}

function LandingPage() {
    return (
      <>
        <Header />

        <section className="my-[72px] mx-[64px] bg-[#E5F1FA] rounded-[20px] px-[15px] flex items-end gap-[47px] font-[DM Sans">
          <div className="my-[93px] -[100%] -tracking-[1.1%] w-[554px]">
            <h1 className="font-bold text-[56px] text-[#0F172A] leading-[62px]">
              Your Health, Connected In One Place
            </h1>
            <p className="text-[#475569] mt-[16px] text-[24px] font-medium">
              Discover trusted health information, connect with verified
              professionals, and explore wellness in a simple, human, and
              unified platform.
            </p>
            <button className="bg-[#0072CE] p-[10px] border border-[#E2E8F0] rounded-[10px] mt-[32px] w-[415px] text-[#FFFFFF] text-lg">
              Get Started
            </button>
            <p className="text-[#475569] text-sm mt-[24px]">
              Available on Web and mobile
            </p>
          </div>
          <div className="relative w-[681px] px-[14px] right-2">
            <div className="relative">
              <img src={Bluecircle} alt="" className="m-auto" />
              <img
                src={Malesmiling}
                alt="Image of "
                className="absolute inset-0 -translate-y-1/3 bottom-1/2"
              />
            </div>

            <img
              src={Ldpimage1}
              alt="Image of a lady during workout session"
              className="absolute w-[251px] bottom-3/5 left-2"
            />
            <img
              src={Ldpgimage2}
              alt="Image of a doctor in a session with her client"
              className="absolute w-[251px] bottom-3/5 translate-x-1/3 right-1/6"
            />
            <img
              src={Ldpgimage3}
              alt="Image of lady in an online session an health expert"
              className="absolute w-[251px] bottom-1/13 left-2"
            />
          </div>
        </section>

        <section className="font-[DM Sans] bg-[#0072CE] m-auto py-[136.5px]">
          <h2 className="text-[#FFFFFF] text-[48px] font-semibold text-center">
            Health Information Is Scattered and Overwhelming
          </h2>
          {
            <DivComponent description="Different apps for medication, fitness, therapy, and wellness" />
          }
          {
            <DivComponent description="Conflicting information with no clear source of truth" />
          }
          {<DivComponent description="Hard to know what applies to you" />}
          <p className="text-[#FFFFFF] text-[16px] text-center mt-[32px]">
            Managing your health shouldn’t feel this complicated.
          </p>
        </section>
      </>
    );
}

export default LandingPage;

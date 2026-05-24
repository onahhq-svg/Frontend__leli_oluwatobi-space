import { useState } from "react";
import { FitnessFeatureIcon, HealthContent, LandingPageImg1, LandingPageImg2, LandingPageImg3, LandingPageImg4, MedicationsFeatureIcon, NutritionFeatureIcon, Playvideoicon, ProfessionalFeatureIcon, Professionals2, ProfessionalsFrame, SearchIcon, Stethoscope, WellnessFeatureIcon} from "../assets";
import Header from "../components/header";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoFitness } from "react-icons/io5";


function WellnessNeeds({icon, description, title, iconDesc}) {
  return (
    <div className="bg-white rounded-[20px] py-8.5 px-8 flex flex-col gap-4 w-100 text-left shadow-featurecard">
      <img src={icon} alt={iconDesc} className="w-22.5 h-19.5" />
      <h6 className="text-lg font-medium text-title">{title}</h6>
      <p className="text-base text-description leading-[150%]">{description}</p>
    </div>
  );
}

function LeliFeaturesCard({ title, description }) {
  return (
    <div className="w-200.25 mx-auto">
      <div className="flex items-center bg-white gap- rounded-[10px] py-3 gap-4 pl-4 text-title text-titlesize font-semibold">
        <img src={Playvideoicon} alt="A play video icon to format a list" />
        <h6>{title}</h6>
      </div>
      <p className="text-lg text-description mt-2 px-4.75">{description}</p>
    </div>
  );
}

function ProfessionalOptionsCard({icon, iconDesc, title, description, buttonText }) {
  return (
    <div className="px-6 py-5 gap-5 flex flex-col flex-wrap text-base rounded-lg bg-[#FFFFFF] w-100 text-right">
      <img src={icon} alt={iconDesc} className="w-11" />
      <h6 className="text-lg text-title font-medium -tracking-[1.1%]">
        {title}
      </h6>
      <p className="text-description leading-[150%]">{description}</p>
      <button className="rounded-[10px] border border-primary text-primary w-full py-2.5 font-semibold">
        {buttonText}
      </button>
    </div>
  );
}

function ProcessFeatureCard({title, description, icon, iconDesc}) {
  return (
    <div className="flex flex-col text-title text-titlesize font-semibold text-center shadow-processcard py-7.5 px-8 rounded-[17px] w-100 h-61 lea-[100%]">
      <img src={icon} alt={iconDesc} className="mb-4 w-15 mx-auto" />
      <h6 className="tracking-tighter">{title}</h6>
      <p className="text-lg text-description font-normal mt-2 tracking-tight">{description}</p>
    </div>
  )
}

function ExpertComponent() {
  return (
    <div>
      <video src=""></video>
      <title></title>
    </div>
  )
}

function Testimonials() {
  return (
    <div className="bg-[#E5F1FA] p-6 rounded-[14px]">
      <div></div>
      <p className="text-base text-description mt-4">{ text }</p>
      <div>
        <img src={ } alt="" />
        <div>
          <p></p>
        </div>
      </div>
    </div>
  )
}


function LandingPage() {
  const [selectedOption, setSelectedOption] = useState("users");
    return (
      <>
        <Header />
        <section className="px-16 text-center py-16">
          <h1 className="text-[56px] font-bold text-title whitespace-pre-wrap">
            Feel better.  
            <span className="text-primary"> Live healthier. </span> Every day.
          </h1>
          <p className="text-2xl text-description leading-8 ">
            Access fitness, nutrition, mental wellness, and trusted
            professionals in one place. <br /> Your journey to a healthier
            lifestyle starts here.
          </p>
          <div className="mt-8 text-lg font-semibold w-[29.82rem] flex items-center justify-center mx-auto gap-2">
            <button className="bg-primary text-white rounded-[10px] w-full h-14 cursor-pointer hover:scale-90 transition-transform duration-300">
              Start Exploring{" "}
            </button>
            <button className="border border-primary rounded-[10px] w-full h-14 text-primary cursor-pointer hover:scale-90 transition-transform duration-300">
              Join as a Professional
            </button>
          </div>
          <div className="relative mb-">
            <div className="mt-10 flex items- gap-4 overflow-hidden">
              <img
                src={LandingPageImg1}
                alt="Image of a patient on a virtual consultation with her doctor"
              />
              <img
                src={LandingPageImg2}
                alt="An image of a female patient having a conversaton with her doctor in his office."
              />
              <img
                src={LandingPageImg3}
                alt="Iage of five ladies in a workout session"
              />
              <img
                src={LandingPageImg4}
                alt="Image of a table with a doctor's hand recommending some presented fruits for his patient"
              />
            </div>
            <div
              className="w-full h-15 absolute bottom-0 left-0 bg-white"
              style={{ clipPath: "ellipse(50% 100% at 50% 100%)" }}
            ></div>
            <div className="absolute flex items-center z-10 gap-12 left-1/2 -translate-x-1/2 text-title font-semibold text-2xl">
              <div className="border-r border-r-black p-3">
                <p>50K+</p>
                <p className="text-[14px] text-description font-normal">
                  Active Users
                </p>
              </div>
              <div className="border-r border-r-black p-3">
                <p>500+</p>
                <p className="text-[14px] text-description font-normal">
                  Professionals
                </p>
              </div>
              <div className="border-r border-r-black p-3">
                <p>4.9/5</p>
                <p className="text-[14px] text-description font-normal">
                  User Rating
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-16 py-25 text-center bg-[#F7F9FC]">
          <h3 className="font-semibold text-[40px] text-title">
            Everything you need for{" "}
            <span className="text-primary">holistic wellness</span>
          </h3>
          <p className="mt-2 text-description text-2xl leading-8 w-182.5 mx-auto">
            Leli brings together all aspects of health and wellness in one
            simple, accessible platform
          </p>

          <div className="flex flex-wrap items-center gap-6.25 mt-20">
            <WellnessNeeds
              icon={WellnessFeatureIcon}
              iconDesc="An icon displayed on the wellness feature card"
              title="Mental Wellness"
              description="Guided meditation, stress relief, and mental health resources for a peaceful mind."
            />
            <WellnessNeeds
              icon={NutritionFeatureIcon}
              iconDesc="An apple icon displayed on the nutrition feature card"
              title="Nutrition"
              description="Healthy recipes, meal plans, and nutrition tips for balanced eating."
            />
            <WellnessNeeds
              icon={FitnessFeatureIcon}
              iconDesc="A weight metal icon representing the fitness feature card"
              title="Fitness"
              description="Custom workout plans, exercise guides, and fitness tracking to stay active.."
            />
            <WellnessNeeds
              icon={MedicationsFeatureIcon}
              iconDesc="A pill icon representing the medication feature card"
              title="Medications"
              description="Medication information, reminders, and safety guidelines at your fingertips."
            />
            <WellnessNeeds
              icon={ProfessionalFeatureIcon}
              iconDesc="A human head icon representing the professional-care feature card"
              title="Professional"
              description="Connect with verified doctors, trainers, nutritionists, and wellness coaches."
            />
          </div>
        </section>

        <section className="px-16 py-23.5 bg-[#F7F9FC]">
          <h3 className="text-title text-[40px] font-semibold text-center">
            Why choose Leli?
          </h3>
          <h3 className="text-2xl text-description text-center mt-4">
            A comprehensive platform designed to make health and wellness
            simple, accessible, and effective.
          </h3>
          <div className="flex flex-col gap-4 mt-20 mx-auto">
            <LeliFeaturesCard
              title="Get trusted health information"
              description="Access verified content from healthcare professionals and wellness experts you can rely on."
            />
            <LeliFeaturesCard
              title="Improve your lifestyle daily"
              description="Small, actionable steps in fitness, nutrition, and mental wellness that fit into your routine."
            />
            <LeliFeaturesCard
              title="Connect with verified professionals"
              description="Book sessions with certified doctors, trainers, nutritionists, and mental health coaches."
            />
            <LeliFeaturesCard
              title="All-in-one health experience"
              description="No more juggling multiple apps. Everything you need for wellness in a single platform."
            />
          </div>
        </section>

        <section
          className="py-20.25 px-16 text-description text-titlesize text-center
        "
        >
          <h3 className="text-[40px] text-title font-semibold">How it works</h3>
          <p>Simple steps to start your health journey or grow your practice</p>
          <div className="flex gap-4 items-center justify-center rounded-md mt-20 mb-8 text-base text-center">
            <button
              className={`${selectedOption === "users" ? "bg-[#DBE5FF] text-[#0072CE]" : "bg-[#FFFFFF] text-[#000000]"} rounded-lg border border-[#DBE5FF] px-5.75 py-[9.5px]  `}
              onClick={() => setSelectedOption("users")}
            >
              For users
            </button>
            <button
              className={`${selectedOption === "professionals" ? "bg-[#DBE5FF] text-[#0072CE]" : "bg-[#FFFFFF] text-[#000000]"} rounded-lg border border-[#DBE5FF] px-5.75 py-[9.5px]  `}
              onClick={() => setSelectedOption("professionals")}
            >
              For professionals
            </button>
          </div>

          <div className="flex items-center gap-14">
            <ProcessFeatureCard
              icon={SearchIcon}
              iconDesc="A search icon representing topic exploration feature card"
              title={
                selectedOption === "users"
                  ? "Explore out topics"
                  : "Create a profile"
              }
              description={
                selectedOption === "users"
                  ? "Browse fitness, nutrition, mental wellness, and medication information"
                  : "Set up your professional profile with credentials and specializations"
              }
            />
            <ProcessFeatureCard
              icon={HealthContent}
              iconDesc="A book icon representing health-content featture card"
              title={
                selectedOption === "users"
                  ? "Learn from health content"
                  : "Share expertise"
              }
              description={
                selectedOption === "users"
                  ? "Access expert articles, videos, workout plans, and health trackers"
                  : "Post content, offer sessions, and provide guidance to users"
              }
            />
            <ProcessFeatureCard
              icon={Professionals2}
              iconDesc="Human heads icon displayed on the connect-with-professionals feature card"
              title={
                selectedOption === "users"
                  ? "Connect with professionals"
                  : "Connect and grow"
              }
              description={
                selectedOption === "users"
                  ? "Book sessions with verified healthcare and wellness experts"
                  : "Build your practice and reach thousands of health conscious users"
              }
            />
          </div>
          <button className="bg-[#0072CE] mt-14 text-[#FFFFFF] rounded-[10px] w-110.75 py-4.25 flex items-center justify-center gap-2 mx-auto cursor-pointer hover:scale-90 transition-transform duration-300 ease-in-out">
            {selectedOption === "users" ? (
              <>
                Start Exploring <IoMdArrowRoundForward color="#FFFFFF" />
              </>
            ) : (
              <>Join as a Professional</>
            )}
          </button>
        </section>

        <section className="bg-linear-to-bl from-primary to-[#B6D6DC] py-25 px-16 text-center text-primary">
          <p className="text-base leading-[100%]">
            For Healthcare & Wellness as Professionals
          </p>
          <h2 className="text-[40px] font-bold mt-2 mb-5 leading-[100%]">
            Grow your impact in{" "}
            <span className="text-primary">healthcare and wellness</span>
          </h2>
          <p className="text-description text-2xl leading-9 w-204.5 mb-20 mx-auto">
            Join thousands of professionals who are making healthcare more
            accessible, personal, and impact through LELI
          </p>
          <img
            src={ProfessionalsFrame}
            alt="A lineup of five medical professionals"
          />

          <div className="grid grid-row-2 grid-cols-3  gap-14 ">
            <ProfessionalOptionsCard
              icon={Stethoscope}
              iconDesc="A sthethoscope representing the doctor profession"
              description="Expand your practice and provide virtual consultations to thousands of users"
              title="Doctor/Pysician"
              buttonText="Join as a Doctor"
            />
            <ProfessionalOptionsCard
              icon={FitnessFeatureIcon}
              iconDesc="A metal wieght icon representing a fitness trainer"
              title="Fitness Trainer"
              description="Share workout plans, conduct online sessions, and build your fitness community"
              buttonText="Join as a Trainer"
            />
            <ProfessionalOptionsCard
              icon={NutritionFeatureIcon}
              iconDesc="An apple icon representing the nutritionist profession"
              title="Nutritionist"
              description="Expand your practice and provide virtual consultations to thousands of users"
              buttonText="Join as a Nutritionist"
            />
            <ProfessionalOptionsCard
              icon={WellnessFeatureIcon}
              iconDesc="A wellness icon representing the mental coach profession"
              title="Mental Health Coaches"
              description="Provide therapy sessions, mindfulness coaching, and mental wellness support."
              buttonText="Join as a Coach"
            />
            <ProfessionalOptionsCard
              icon={FitnessFeatureIcon}
              iconDesc=""
              title="Health Organizations"
              description="Partner with us to reach a wider audience and provide comprehensive care."
              buttonText="Request Demo"
            />
          </div>
        </section>

        <section className="p-16 bg-[#F7F9FC]">
          <h2 className="text-[40px] font-semibold text-title mb-4">
            Explore expert Content
          </h2>
          <p className="text-2xl text-description mb-20">
            Simple steps to start your health journey or grow your practice
          </p>
        </section>

        <section className="bg-[#F7F9FC] py-24 px-16">
          <h2>Loved by users and professionals</h2>
          <p>See what our community has to say about their LELI experience</p>
          <div className="mt-20">

          </div>
        </section>
      </>
    );
}

export default LandingPage;
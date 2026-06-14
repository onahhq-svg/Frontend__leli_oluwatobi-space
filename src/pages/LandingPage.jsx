import { useState } from "react";
import { DietDish, Facebook, FitnessFeatureIcon, FooterAndroidDownload, FooterIOSDownload, HealthContent, HumanHeads, InstagramIcon, LandingPageImg1, LandingPageImg2, LandingPageImg3, LandingPageImg4, Logo, LoveSymbol, MedicationsFeatureIcon, MichealHeadShot, NutritionFeatureIcon, Playvideoicon, ProfessionalFeatureIcon, Professionals2, ProfessionalsFrame, RollPrint, SearchIcon, StarRate, Stethoscope, TikTok, TwitterIcon, WellnessFeatureIcon, YogaFlowCover} from "../assets";
import Header from "../components/header";
import { IoMdArrowRoundForward } from "react-icons/io";
import { FaPlay } from 'react-icons/fa6';



function WellnessNeeds({icon, description, title, iconDesc}) {
  return (
    <div className="bg-white rounded-[20px] lg:py-8.5 py-7.5 lg:px-8 px-6 flex flex-col sm:gap-4 gap-3 flex-1 basis-[31%] text-left shadow-featurecard">
      <img src={icon} alt={iconDesc} className="lg:w-[90px] w-[56px] lg:h-[78px] h-[50px]" />
      <h6 className="lg:text-lg sm:text-base font-medium text-title">{title}</h6>
      <p className="lg:text-base text-xs text-description leading-[150%]">{description}</p>
    </div>
  );
}

function LeliFeaturesCard({ title, description }) {
  return (
    <div className="lg:w-200.25 mx-auto">
      <div className="flex items-center bg-white gap- rounded-[10px] lg:py-3 py-1.75 lg:gap-4 gap-3 pl-4 text-title lg:text-titlesize sm:text-xl text-base font-semibold">
        <img src={Playvideoicon} alt="A play video icon to format a list" className="lg:w-6 w-3 " />
        <h6>{title}</h6>
      </div>
      <p className="lg:text-lg sm:text-sm text-xs text-description sm:mt-2 mt-1 px-4.75">{description}</p>
    </div>
  );
}

function ProfessionalOptionsCard({icon, iconDesc, title, description, buttonText }) {
  return (
    <div className="px-6 py-5 lg:gap-5 gap-2.5 flex flex-col sm:text-base text-xs rounded-lg bg-[#FFFFFF] flex-1 basis-[30%] text-left">
      <img src={icon} alt={iconDesc} className="w-11" />
      <h6 className="lg:text-lg sm:text-base text-sm text-title font-medium -tracking-[1.1%]">
        {title}
      </h6>
      <p className="text-description leading-[150%]">{description}</p>
      <button className="rounded-[10px] border border-primary text-primary w-full py-2.5 font-semibold lg:mt-0 mt-5">
        {buttonText}
      </button>
    </div>
  );
}

function ProcessFeatureCard({title, description, icon, iconDesc}) {
  return (
    <div className="flex flex-col text-title lg:text-titlesize sm:text-base text-sm font-semibold text-center shadow-processcard sm:py-7.5 py-5.25 px-8 rounded-[17px] sm:w-100 sm:h-61 lea-[100%]">
      <img src={icon} alt={iconDesc} className="mb-4 lg:w-15 w-10 mx-auto" />
      <h6 className="tracking-tighter">{title}</h6>
      <p className="lg:text-lg sm:text-sm text-xs text-description font-normal mt-2 tracking-tight">{description}</p>
    </div>
  )
}

function ExpertComponent({img, imgDesc}) {
  return (
    <div className="rounded-[9.5px] bg-white lg:w-100 w-75 overflow-hidden">
      <div className="relative">
        <img src={img} alt={imgDesc} className="w-full lg:h-51 h-34.5" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white rounded-full lg:w-15 w-12.5 lg:h-15 h-12.5 flex justify-center items-center cursor-pointer">
            <FaPlay color="black/40" className="ml-0.5" />
          </div>
        </div>
      </div>
      <div className="lg:px-4 px-2 py-2">
        <h6 className="lg:text-2xl sm:text-base text-sm text-title font-semibold">
          5-Minute Morning Yoga flow
        </h6>
        <div className="lg:text-base text-xs text-description flex items-center justify-between lg:mt-6 mt-3.5">
          <p>Dr Sarah Mitchell</p>
          <p>12.5k views</p>
        </div>
      </div>
    </div>
  );
}

function AboutLeli({icon, title, description, iconDesc}) {
  return (
    <div className="flex lg:py-4 py-2 gap-3 rounded-lg lg:items-start items-center bg-[#E5F1FA80] lg:px-[77.5px] px-2.5">
      <img src={icon} alt={iconDesc} className="lg:w-11 sm:w-7" />
      <div className="lg:text-base text-xs text-description">
        <h6 className="lg:text-titlesize text-base text-[#000000] font-semibold leading-[100%] mb-1">{title}</h6>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Testimonials({text}) {
  return (
    <div className="bg-[#E5F1FA] p-4 rounded-[14px] lg:text-base text-sm lg:w-105 w-75 lg:h-77.75 -50">
      <div className="flex items-center max-w-36">
        <img
          src={StarRate}
          alt="A gold star representing the users rating of Leli"
        />
        <img
          src={StarRate}
          alt="A gold star representing the users rating of Leli"
        />
        <img
          src={StarRate}
          alt="A gold star representing the users rating of Leli"
        />
        <img
          src={StarRate}
          alt="A gold star representing the users rating of Leli"
        />
        <img
          src={StarRate}
          alt="A gold star representing the users rating of Leli"
        />
      </div>
      <p className="lg:mt-4 mt-3 mb-4.5 text-justify">{text}</p>
      <div className="flex items-center text-left lg:gap-2.5 gap-2">
        <img src={MichealHeadShot} alt="An closeup shot of Leli user" className="rounded-full lg:w-12.5 w-10 lg:h-12.5 h-10" />
        <div>
          <h6 className="text-[#000000] font-semibold">Michael Rodriguez</h6>
          <p className="lg:text-sm text-xs">Leli User</p>
        </div>
      </div>
    </div>
  );
}


function LandingPage() {
  const [selectedOption, setSelectedOption] = useState("users");
    return (
      <>
        <Header />
        <section className="lg:px-16 sm:px-5.25 text-center pt-16 pb-40">
          <h1 className="lg:text-[56px] sm:text-[50px] text-[36px] font-bold text-title whitespace-pre-wrap">
            Feel better.<span className="text-primary"> Live healthier. </span>
            Every day.
          </h1>
          <p className="lg:text-2xl sm:text-[22px] text-xs text-description lg:leading-8 sm:leading-8.25 leading-4">
            Access fitness, nutrition, mental wellness, and trusted
            professionals in one place. <br /> Your journey to a healthier
            lifestyle starts here.
          </p>
          <div className="mt-8 lg:text-lg sm:text-base text-sm font-semibold sm:w-[29.82rem] w-62.5 flex sm:flex-row flex-col items-center justify-center mx-auto gap-2">
            <button className="bg-primary text-white rounded-[10px] w-full h-14 cursor-pointer hover:scale-90 transition-transform duration-300">
              Start Exploring{" "}
            </button>
            <button className="border border-primary rounded-[10px] w-full h-14 text-primary cursor-pointer hover:scale-90 transition-transform duration-300">
              Join as a Professional
            </button>
          </div>
          <div className="relative">
            <div className="mt-10 w-[] flex shrink-0 items-center gap-4 overflow-x-auto">
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
                alt="Image of five ladies in a workout session"
              />
              <img
                src={LandingPageImg4}
                alt="Image of a table with a doctor's hand recommending some presented fruits for his patient"
              />
            </div>
            <div
              className="w-full h-15 absolute bottom-0 left-0 bg-white"
              style={{
                clipPath: "ellipse(54% 100% at 50% 100%)",
              }}
            ></div>
            <div className="absolute -bottom-2 flex items-center z-10 lg:gap-12 gap-8 left-1/2 -translate-x-1/2 translate-y-1/2 text-title font-semibold lg:text-2xl sm:text-lg text-[13px]">
              <div className="border-r border-r-black p-3">
                <p>50K+</p>
                <p className="lg:text-[14px] sm:text-[10.5px] text-[7.5px] text-description font-normal">
                  Active Users
                </p>
              </div>
              <div className="border-r border-r-black p-3">
                <p>500+</p>
                <p className="lg:text-[14px] sm:text-[10.5px] text-[7.5px] text-description font-normal">
                  Professionals
                </p>
              </div>
              <div className="">
                <p>4.9/5</p>
                <p className="lg:text-[14px] sm:text-[10.5px] text-[7.5px] text-description font-normal">
                  User Rating
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="lg:px-16 sm:px-5.25 px-9 lg:py-25 py-10 text-center bg-[#DBE5FF]">
          <h3 className="font-semibold sm:text-[40px] text-2xl text-title">
            Everything you need for{" "}
            <span className="text-primary">holistic wellness</span>
          </h3>
          <p className="mt-2 text-description lg:text-2xl sm:text-lg text-xs lg:leading-8 sm:leading-7 leading-4 sm:w-182.5 mx-auto">
            Leli brings together all aspects of health and wellness in one
            simple, accessible platform
          </p>

          <div className="flex sm:flex-row flex-col flex-wrap items-center gap-6.25 lg:mt-20 mt-10">
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
              description="Custom workout plans, exercise guides, and fitness tracking to stay active."
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

        <section className="lg:px-16 px-5.25 lg:py-23.5 py-15 bg-[#F7F9FC]">
          <h3 className="text-title lg:text-[40px] sm:text-[32px] text-2xl font-semibold text-center">
            Why choose Leli?
          </h3>
          <h3 className="lg:text-2xl sm:text-base text-xs text-description text-center lg:mt-4 sm:mt-3">
            A comprehensive platform designed to make health and wellness
            simple, accessible, and effective.
          </h3>
          <div className="flex flex-col sm:gap-4 gap-3 lg:mt-20 sm:mt-10 mt-6 mx-auto">
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
          className="py-20.25 -10 lg:px-16 sm:px-5.25 px-9 text-description lg:text-titlesize text-base text-center
        "
        >
          <h3 className="lg:text-[40px] sm:text-[32px] text-base text-title font-semibold">
            How it works
          </h3>
          <p className="sm:text-base text-xs lg:mt-4 mt-1">
            Simple steps to start your health journey or grow your practice
          </p>
          <div className="flex sm:gap-4 gap-2.5 items-center justify-center rounded-md lg:mt-20 lg:my-0 my-6 lg:mb-8 lg:mx-0 mx-6 sm:text-base text-sm text-center">
            <button
              className={`${selectedOption === "users" ? "bg-[#DBE5FF] text-primary" : "bg-[#FFFFFF] text-[#000000]"} rounded-lg border border-[#DBE5FF] px-5.75 sm:py-[9.5px] py-1.25  `}
              onClick={() => setSelectedOption("users")}
            >
              For users
            </button>
            <button
              className={`${selectedOption === "professionals" ? "bg-[#DBE5FF] text-primary" : "bg-[#FFFFFF] text-[#000000]"} rounded-lg border border-[#DBE5FF] px-5.75 sm:py-[9.5px] py-1.25  `}
              onClick={() => setSelectedOption("professionals")}
            >
              For professionals
            </button>
          </div>

          <div className="flex sm:flex-row flex-col items-center lg:gap-14 sm:gap-9.25 gap-6">
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
          <button className="bg-primary sm:mt-14 mt-10 text-[#FFFFFF] rounded-[10px] lg:w-110.75 w-57 py-4.25 flex items-center justify-center sm:gap-2 gap-1 mx-auto cursor-pointer hover:scale-90 transition-transform duration-300 ease-in-out">
            {selectedOption === "users" ? (
              <>
                Start Exploring <IoMdArrowRoundForward color="#FFFFFF" />
              </>
            ) : (
              <>Join as a Professional</>
            )}
          </button>
        </section>

        <section className="sm:bg-linear-to-bl from-primary/30 to-[#B6D6DC] lg:py-25 sm:py-10 py-6 lg:px-16 sm:px-11.25 px-3 text-center">
          <p className="text-primary sm:text-base text-sm leading-[100%] w-[320px] rounded-lg py-1 px-1 tracking-tight mx-auto sm:bg-transparent bg-[#E5F1FA]">
            For Healthcare & Wellness as Professionals
          </p>
          <h2 className="lg:text-[40px] sm:text-[32px] text-2xl font-bold sm:mt-2 mt-6 lg:mb-5 mb-2 leading-[100%]">
            Grow your impact in{" "}
            <span className="text-primary">healthcare and wellness</span>
          </h2>
          <p className="text-description lg:text-2xl sm:text-base text-xs lg:leading-9 leading-5 max-w-204.5 lg:mb-20 mb-10 mx-auto">
            Join thousands of professionals who are making healthcare more
            accessible, personal, and impact through LELI
          </p>
          <img
            src={ProfessionalsFrame}
            alt="A lineup of five medical professionals"
          />

          <div className="flex flex-wrap sm:flex-row flex-col lg:gap-10 gap-5 mt-6 sm:mx-0 mx-2">
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

        <section className="lg:py-16 py-10 lg:px-16 px-6 bg-[#F7F9FC]">
          <h2 className="lg:text-[40px] sm:text-[32px] text-2xl font-semibold text-title lg:mb-4 mb-2 text-center">
            Explore expert Content
          </h2>
          <p className="lg:text-2xl sm:text-base text-sm text-description lg:mb-20 mb-10 text-center">
            Simple steps to start your health journey or grow your practice
          </p>

          <div className="flex sm:flex-row flex-col items-center gap-5 justify-center">
            <ExpertComponent
              img={YogaFlowCover}
              imgDesc="A lady performing yoga on the mat"
            />
            <ExpertComponent
              img={DietDish}
              imgDesc="A dish containing some combinaiton of veggies to represent diet"
            />{" "}
            <ExpertComponent
              img={YogaFlowCover}
              imgDesc="A lady performing yoga on the mat"
            />
          </div>
        </section>

        <section className="bg-[#F7F9FC] lg:py-24 py-15 lg:px-16 sm:px-5.25 px-10 text-description text-center">
          <h2 className="text-title font-semibold lg:text-[40px] sm:text-[32px] text-2xl leading-[100%]">
            Loved by users and professionals
          </h2>
          <p className="lg:text-2xl sm:text-base text-xs mt-2">
            See what our community has to say about their LELI experience
          </p>
          <div className="lg:mt-18 mt-10 flex sm:flex-row flex-col items-center lg:gap-6.5 gap-5">
            <Testimonials text='"CareCircle has completely transformed my approach to health. From fitness routines to mental wellness tips, everything I need is in one place. The professional network is incredible!"' />
            <Testimonials text='"As a nutritionist, CareCircle has allowed me to reach so many more people. The platform is intuitive, and I love how I can share meal plans and connect with clients seamlessly."' />
            <Testimonials text='"CareCircle has completely transformed my approach to health. From fitness routines to mental wellness tips, everything I need is in one place. The professional network is incredible!"' />
          </div>
        </section>

        <section className="bg-[#F7F9FC] lg:py-16 py-6 sm:py-10 lg:px-10 sm:px-10 px-4">
          <h2 className="text-title lg:text-[40px] sm:text-[32px] text-2xl font-semibold text-center">
            About LELI
          </h2>
          <p className="mt-2 text-description lg:text-titlesize sm:text-base text-xs text-center">
            Making health simple, accessible, and holistic
          </p>
          <div className="lg:mt-20 mt-10 flex sm:flex-row flex-col items-start gap-1.5">
            <p className="lg:leading-10 sm:leading-6.5 leading-5.5 lg:text-2xl sm:text-base text-xs text-description tracking-[0.43%] sm:w-[50%]">
              LELI was created to bridge the gap between traditional healthcare
              and everyday wellness. We combine expert medical knowledge with
              practical lifestyle guidance — from fitness and nutrition to
              mental wellness and medication management.
              <br /> Our mission is to empower individuals to take control of
              their health journey while connecting them with verified
              professionals who can provide personalized guidance and support.
            </p>
            <div className="flex flex-col sm:gap-10.75 gap-6 sm:w-[50%] sm:mt-0 mt-6">
              <AboutLeli
                icon={LoveSymbol}
                iconDesc="A love symbol describing the holsiticity of Leli offerings"
                title="Holisitic Car"
                description="We believe health is more than just medical — it's fitness, nutrition, and mental wellness combined."
              />
              <AboutLeli
                icon={RollPrint}
                iconDesc="A symbol containing a roll-like print describing the general accessibilty of Leli"
                title="Accessible for All"
                description="Making quality health information and professional care available to everyone, everywhere."
              />
              <AboutLeli
                icon={HumanHeads}
                iconDesc="Human heads symbol representing the community goal of Leli"
                title="Community Driven"
                description="Built by healthcare professionals and users working together for better wellness outcomes."
              />
            </div>
          </div>
        </section>

        <section className="bg-[#E5F1FA] lg:px-16 sm:px-6 px-4 lg:py-29.75 py-6">
          <div className="bg-primary rounded-xl text-center text-[#FFFFFF] pt-8 pb-12.5 text-sm">
            <h2 className="font-semibold lg:text-[48px] sm:text-[32px] text-2xl">
              Ready to transform your health journey?
            </h2>
            <p className="mt-2 max-w-146 lg:text-lg sm:text-base text-xs mx-auto">
              Join thousands of users and professionals who are making health
              and wellness simple, accessible, and effective with CareCircle
            </p>
            <div className="flex items-center justify-center lg:my-10 my-6 gap-4 text-lg font-semibold">
              <button className="w-70 py-[17.5px] border bg-white rounded-[10px] border-primary text-primary leading-5.25 -tracking-[0.32px] cursor-pointer transition-transform hover:scale-90 duration-300 ease-in-out">
                Join as a Professional
              </button>
              <button className="w-70 py-[17.5px] flex items-center justify-center gap-1.75 border rounded-[10px] border-[#FFFFFF] leading-5.25 -tracking-[0.32px] cursor-pointer transition-transform hover:scale-90 duration-300 ease-in-out">
                Start your health journey{" "}
                <span>
                  <IoMdArrowRoundForward />
                </span>
              </button>
            </div>
            <p>No credit card required • Get started in less than 2 minutes</p>
          </div>
        </section>

        <footer className="px-16 py-26.75 bg-[#101828] text-[#FFFFFF99] flex flex-wrap items-start justify-between">
          <div className="w-62.25">
            <img src={Logo} alt="" className="w-22.25 h-16.75 p-2" />
            <p className="text-sm leading-5">
              Your everyday health, fitness, and wellness companion. From mental
              wellness and nutrition to medications and expert advice —
              everything in one place.
            </p>
          </div>
          <div className="flex flex-col gap-2.5">
            <h5 className="mb-1 text-[#FFFFFF] text-xl font-semibold">
              Explore
            </h5>
            <p>Fitness</p>
            <p>Nutrition</p>
            <p>Mental Wellness</p>
            <p>Medications</p>
            <p>Community</p>
          </div>
          <div className="flex flex-col gap-2.5">
            <h5 className="mb-1 text-[#FFFFFF] text-xl font-semibold">
              For Professionals
            </h5>
            <p>Join as Professional</p>
            <p>Partner With Us</p>
            <p>Resources</p>
            <p>Request demo</p>
          </div>
          <div className="flex flex-col gap-2.5">
            <h5 className="mb-1 text-[#FFFFFF] text-xl font-semibold">
              Company
            </h5>
            <p>About Us</p>
            <p>How it Works</p>
            <p>Features</p>
          </div>
          <div className="flex flex-col gap-2.5">
            <h5 className="mb-1 text-[#FFFFFF] text-xl font-semibold">Legal</h5>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookie Policy</p>
          </div>

          <div className="mt-10 w-full flex items-center gap-50">
            <div className="flex gap-5.5">
              <img src={FooterIOSDownload} alt="" />
              <img src={FooterAndroidDownload} alt="" />
            </div>
            <div className="flex items-center gap-2">
              <img src={Facebook} alt="" />
              <img src={TwitterIcon} alt="" />
              <img src={TikTok} alt="" />
              <img src={InstagramIcon} alt="" />
            </div>
          </div>
        </footer>
      </>
    );
}

export default LandingPage;
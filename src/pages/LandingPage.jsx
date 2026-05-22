import { FitnessFeatureIcon, LandingPageImg1, LandingPageImg2, LandingPageImg3, LandingPageImg4, MedicationsFeatureIcon, NutritionFeatureIcon, Playvideoicon, ProfessionalFeatureIcon, WellnessFeatureIcon } from "../assets";
import Header from "../components/header";

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


function LandingPage() {
    return (
      <>
        <Header />
        <section className="px-16 text-center py-16">
          <h1 className="text-[56px] font-bold text-title whitespace-pre-wrap">
            Feel better.  
            <span className="text-[#0072CE]"> Live healthier. </span> Every day.
          </h1>
          <p className="text-2xl text-description leading-8 ">
            Access fitness, nutrition, mental wellness, and trusted
            professionals in one place. <br /> Your journey to a healthier
            lifestyle starts here.
          </p>
          <div className="mt-8 text-lg font-semibold w-[29.82rem] flex items-center justify-center mx-auto gap-2">
            <button className="bg-[#0072CE] text-white rounded-[10px] w-full h-14 cursor-pointer hover:scale-90 transition-transform duration-300">
              Start Exploring{" "}
            </button>
            <button className="border border-[#0072CE] rounded-[10px] w-full h-14 text-[#0072CE] cursor-pointer hover:scale-90 transition-transform duration-300">
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
            <span className="text-[#0072CE]">holistic wellness</span>
          </h3>
          <p className="mt-2 text-description text-2xl leading-8 w-182.5 mx-auto">
            Leli brings together all aspects of health and wellness in one
            simple, accessible platform
          </p>

          <div className="flex flex-wrap gap-6.25 mt-20">
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
          <h3 className="text-2xl text-description text-center">
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

        <section className="py-20.25 px-16">

        </section>

      </>
    );
}

export default LandingPage;
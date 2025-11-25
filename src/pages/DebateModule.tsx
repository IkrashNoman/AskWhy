import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OpeningModal from "@/components/OpeningModal";

const DebateModule = (props) => {
  const navigate = useNavigate();
  const [showIntroModal, setShowIntroModal] = useState(true);

  const description = (
    <div>
      Ready. Set. Debate!<br /> 🧠You’ve got 90 seconds to bring your best arguments
      to the table! Defend your stance like a pro — but wait for it... plot twist!
      <br /> You’ll have to switch sides and fight for the opposite view. Every
      round flexes your perspective power, builds empathy, and drops that
      polarization score. The more open-minded you get, the closer you are to
      victory!
    </div>
  );

  return (
    <main>
      {props.currentIndex === 0 && (
        <OpeningModal
          showIntroModal={showIntroModal}
          moduleId={"M6"}
          setShowIntroModal={setShowIntroModal}
          src={"/opening16.png"}
          phase="III"
          module="Module 6: Debate Switch"
          description={description}
          time="5:00"
          calculated=""
          level="Advanced Level"
        />
      )}

      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6">
        {/* Main Content - Two Column Layout */}
        <div className="flex justify-center items-stretch gap-10 flex-col lg:flex-row">
          {/* Right Column - Scenario Card */}
          <div className="bg-white rounded-lg p-4 sm:p-5 md:p-6 shadow-md border border-gray-200 max-w-[450px] flex flex-col justify-between flex-shrink-0">
            <div>
              <p className="text-[clamp(10px,1.2vw,12px)] font-medium text-gray-500 mb-2">
                Scenario 1
              </p>
              <h2 className="text-[clamp(16px,2.2vw,20px)] font-semibold text-gray-900 mb-3 leading-snug">
                {props.debate?.Heading}
              </h2>

              <p className="text-gray-800 mb-3 text-[clamp(14px,1.8vw,16px)] leading-relaxed">
                {props.debate?.Scenario}
              </p>

              <div className="rounded-md p-3 mb-4">
                <p className="text-[clamp(10px,1.2vw,12px)] text-gray-500 mb-1">
                  🧠 The Debate:
                </p>
                <p className="text-gray-900 font-medium text-[clamp(14px,1.8vw,16px)] leading-snug">
                  {props.debate?.Debate_Question}
                </p>
              </div>
            </div>

            <div>
              <p className="text-gray-900 font-medium text-[clamp(14px,1.8vw,16px)] mb-3">
                🔥 Ready to take a side?
              </p>
              <button
                className="w-full py-2.5 sm:py-3 md:py-3.5 rounded-md text-white font-medium text-[clamp(14px,1.8vw,16px)] bg-[#FF9348] transition-colors"
                onClick={() => props.setShow(false)}
              >
                Start Now
              </button>
            </div>
          </div>

          {/* Left Column - Image */}
          <div className="flex justify-end items-center rounded-lg bg-transparent mt-6 lg:mt-0">
            <img
              src={props.imageUrl}
              alt="Debate Illustration"
              className="h-auto max-h-[60vh] w-auto max-w-[100%] object-contain"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default DebateModule;

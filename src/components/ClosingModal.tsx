import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import CircleScore from "./CircleScore";
import { ChevronRight } from "lucide-react";

const ClosingModal = (props: any) => {
  const navigate = useNavigate();

  return (
    <div className="p-4 md:p-8">
      <div
        className="h-[90vh] flex items-center justify-center rounded-3xl w-full"
        style={{ backgroundColor: "#F8F1E7" }}
      >
        <div className="w-full max-w-4xl px-4 md:px-16 text-center">
          {/* Module Completion Header */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-6 md:gap-12 mb-6">
            {props.module != 1 && <CircleScore scoreDrop={props.score} />}
            <div className="text-center md:text-left">
              <h1 className="text-[#5F237B] font-semibold text-3xl md:text-5xl leading-tight mb-2 md:mb-4">
                Module {props.module}: Complete
              </h1>

              <p className="flex items-center justify-center md:justify-start gap-2 text-sm md:text-lg text-black font-normal mt-1">
                <img src="/check.svg" className="w-5 h-5 md:w-6 md:h-6" alt="Check" />
                {props.text}
              </p>
            </div>
          </div>

          {/* Score / Image */}
          <div className="mt-4 mb-4 flex justify-center items-center">
            <img
              src={"/closing22.png"}
              className="h-[25vh] md:h-[35vh] object-contain"
              alt="Closing Illustration"
            />
          </div>

          {/* Ending Text */}
          <div className="text-base md:text-xl font-normal mb-6 px-2 md:px-0">
            {props.ending}
          </div>

          {/* Next Module Button */}
          <div className="flex justify-center">
            <Button
              size="lg"
              onClick={() => navigate(props.src)}
              className="px-6 md:px-8 py-2 md:py-3 rounded-md bg-[#FF9348] text-white text-base md:text-lg flex items-center justify-center gap-2 md:gap-3"
            >
              Next Module <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClosingModal;

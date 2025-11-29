import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Login = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-24 py-12">
        
        {/* LOGO */}
        <div className="mb-10">
          <img
            src="/logo.svg"
            className="w-[180px] md:w-[220px]"
            alt="Logo"
          />
          <p className="text-[#572E91] text-xl font-semibold mt-3">
            We are excited to have you here!
          </p>
        </div>

        {/* BUTTON */}
        <Button
          onClick={() => navigate("/dashboard")}
          className="w-full bg-[#FF8C42] hover:bg-[#ff9c60] text-white text-base font-medium h-[48px] rounded-md flex items-center justify-center"
        >
          <ChevronRight className="ml-1 h-5 w-5" />
        </Button>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="w-full md:w-1/2 bg-[#F8F1E7] flex justify-center items-center px-4 md:px-8 py-10">
        <img
          src="/login.png"
          alt="Illustration"
          className="w-full max-w-lg object-contain"
        />
      </div>
    </div>
  );
};

export default Login;

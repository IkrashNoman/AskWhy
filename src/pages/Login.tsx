import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleLogin = async () => {
    setLoading(true);
    setErrorMsg("");

    // Query the Users table for the provided email
    const { data, error } = await supabase
      .from("Users")
      .select("Email, Password")
      .eq("Email", email)
      .single(); // Assumes single row returned, so using `.single()`

    setLoading(false);


    if (error || !data) {
      setErrorMsg("Invalid email or password.");
      return;
    }
    console.log(data)
    // Compare the provided password with the hashed password in the database
    const isPasswordValid = password==data.Password;

    if (!isPasswordValid) {
      setErrorMsg("Invalid email or password.");
      return;
    }
    localStorage.setItem("email",JSON.stringify(email))
    localStorage.setItem("password",JSON.stringify(password))

    // If login is successful, redirect to dashboard
    navigate("/dashboard");
  };

  return (
    // Main container now uses flex-col on mobile and allows scrolling
    <div className="flex flex-col md:flex-row min-h-screen bg-white overflow-y-auto">
      
      {/* Left Side (Form/Content) - W-FULL on mobile, W-1/2 on desktop */}
      <div className="flex flex-col items-center md:items-start w-full md:w-1/2 px-6 py-12 md:p-24 justify-center">
        
        {/* Header/Logo Section */}
        <div className="w-full max-w-sm mb-10">
          <img src="/logo.svg" className="w-1/2 md:w-[60%] object-contain" alt="Logo" />
          <p className="text-black text-base md:text-[20px] font-normal leading-snug mt-1 font-gabarito">
            Bridging minds, one question at a time.
          </p>
        </div>

        {/* Login Section */}
        <div className="w-full max-w-sm space-y-6">
          
          {/* Error Message */}
          {errorMsg && (
            <p className="text-red-600 text-sm font-medium">{errorMsg}</p>
          )}

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="font-medium text-base text-gray-800">
              Enter Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-[48px] bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-[#A11D8C]"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password" className="font-medium text-base text-gray-800">
              Enter Password
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-[48px] bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-[#A11D8C]"
            />
          </div>

          {/* Login Button */}
          <Button
            className="w-full sm:w-[50%] bg-[#FF8C42] hover:bg-[#ff9f66] flex justify-center items-center text-white text-base py-3 rounded-md transition"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"} <ChevronRight className="ml-1 h-5 w-5" />
          </Button>

        </div>
      </div>

      {/* Right Side (Illustration) - Now visible on ALL screens, moved to the bottom on mobile */}
      <div className="w-full md:w-1/2 bg-[#F8F1E7] flex flex-col items-center justify-center relative p-6 md:p-8">
          <img 
            src="/S.png" 
            alt="Illustration"
            // Ensure width is constrained and height is limited on mobile (max-h-[40vh]) for consistency
            className="w-full max-w-sm md:max-w-lg object-contain max-h-[40vh] md:max-h-[80vh] my-8 md:my-0"
          />
      </div>
    </div>
  );
};

export default Login;
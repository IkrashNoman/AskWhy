import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Exercise from "./pages/Exercise";
import Interest from "./pages/Interest";
import NotFound from "./pages/NotFound";
import InTheirShoes from "./pages/InTheirShoes";
import BehindTheBuzzPage from "./pages/BehindTheBuzzPage";
import FakeFact from "./pages/FakeFact";
import SpotTheBias from "./pages/SpotTheBias";
import Onboarding from "./pages/Onboarding";
import Debate from "./pages/Debate";
import Workshop from "./pages/Workshop";


const queryClient = new QueryClient();

const App = () => (


  
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/onboarding" element={<Onboarding/>}/>
          <Route path="/" element={<Onboarding/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Workshop/>} />
          <Route path="/interest" element={<Interest />} />
          <Route path="/exercise" element={<Exercise />} />
          {/* Component-specific routes */}
          <Route path="/behind-the-buzz" element={<BehindTheBuzzPage />} />
         
          <Route path="/FakeFact" element={<FakeFact />} />
          <Route path="/spotthebias" element={<SpotTheBias />} />
          <Route path="/debate" element={<Debate />} />
         <Route path="/debate/final" element={<InTheirShoes/>}/>
          {/* P*/}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>

  
);

export default App;





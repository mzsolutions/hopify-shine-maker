import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GetEstimate from "./pages/GetEstimate";
import Demo from "./pages/Demo";
import FreeHomeTrial from "./pages/FreeHomeTrial";
import FreeHomeTrialV2 from "./pages/FreeHomeTrialV2";
import ShopCarpets from "./pages/ShopCarpets";
import ShopCarpetsV2 from "./pages/ShopCarpetsV2";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/get-estimate" element={<GetEstimate />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/free-home-trial" element={<FreeHomeTrial />} />
          <Route path="/free-home-trial-v2" element={<FreeHomeTrialV2 />} />
          <Route path="/shop" element={<ShopCarpets />} />
          <Route path="/shop-v2" element={<ShopCarpetsV2 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

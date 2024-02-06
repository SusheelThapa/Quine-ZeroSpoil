import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "@/components/ui/toaster";
const App = () => {
  return (
    <>
      <AppRoutes />
      <Toaster />
    </>
  );
};

export default App;

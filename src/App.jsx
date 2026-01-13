import { BrowserRouter, Route , Routes} from "react-router-dom";
import { Notfound } from "./Pages/Notfound";
import { Home } from "./Pages/Home";
import { Toaster } from "@/components/ui/toaster";



function    App() {
  return (
    <>
    <Toaster />
    <BrowserRouter>
    <Routes>
      <Route index element={ <Home/> } />
      <Route path="*" element={<Notfound/>}/>

      <Route/>
    </Routes>
    </BrowserRouter>
    
    
    
    </>
   
  );
} 
export default App;
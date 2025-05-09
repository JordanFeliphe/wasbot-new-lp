import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./contexts/Theme.tsx";
import { ModalProvider } from "./contexts/ModalContext"; 
// import ModalContainer from "@/components/modals/ModalContainer.tsx"; 
import "@/global/css/tailwind.css";
import "@/global/css/reset.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WhatsAppFloatButton from "./components/whatsapp-float-button/WhatsAppFloatButton.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <ModalProvider> 
          <ToastContainer />
          <WhatsAppFloatButton />
          <App />
          {/* <ModalContainer />  */}
        </ModalProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);

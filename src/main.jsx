import React, { StrictMode } from "react";
import App from "./App";
import { Toaster } from "react-hot-toast";
import { createRoot } from 'react-dom/client'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      {/* <Toaster position="top-right"/> */}
      <App />

  </StrictMode>

)

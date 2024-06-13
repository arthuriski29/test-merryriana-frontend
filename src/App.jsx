import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/auth/login"
import Home from "./pages/home";
import Register from "./pages/auth/register";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {

  return (
    <>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
          
          </Routes>
        </BrowserRouter>

      </PersistGate>
    </Provider>
      
      
    </>
  )
}

export default App

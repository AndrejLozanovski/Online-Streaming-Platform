import { Navigate, Route, Routes } from "react-router-dom";

import Landing from "../../pages/Landing/Landing";
import StepOne from "../../pages/StepOne/StepOne";
import StepTwo from "../../pages/StepTwo/StepTwo";
import StepThree from "../../pages/StepThree/StepThree";
import StepFour from "../../pages/StepFour/StepFour";
import StepFive from "../../pages/StepFive/StepFive";
import StepSix from "../../pages/StepSix/StepSix";
import StepSeven from "../../pages/StepSeven/StepSeven";
import StepEight from "../../pages/StepEight/StepEight";
import StepNine from "../../pages/StepNine/StepNine";
import SignUp from "../../pages/SignUp/SignUp";
import { RegistrationProvider } from "../../context/RegistrationContext";

export const NonAuthorizedRoutes = () => {
  return (
    <RegistrationProvider>
      <Routes>
        <Route path={"/landing"} element={<Landing />} />
        <Route path={"/stepone"} element={<StepOne />} />
        <Route path={"/steptwo"} element={<StepTwo />} />
        <Route path={"/stepthree"} element={<StepThree />} />
        <Route path={"/stepfour"} element={<StepFour />} />
        <Route path={"/stepfive"} element={<StepFive />} />
        <Route path={"/stepsix"} element={<StepSix />} />
        <Route path={"/stepseven"} element={<StepSeven />} />
        <Route path={"/stepeight"} element={<StepEight />} />
        <Route path={"/stepnine"} element={<StepNine />} />
        <Route path={"/signup"} element={<SignUp />} />
        <Route path={"*"} element={<Navigate to="landing" />} />
      </Routes>
    </RegistrationProvider>
  );
};

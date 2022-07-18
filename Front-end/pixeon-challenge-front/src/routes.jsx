import React from "react";
import{BrowserRouter, Routes, Route} from "react-router-dom";
import ExamDelete from "./pages/Exam/ExamDelete";
import ExamFind from "./pages/Exam/ExamFind";
import ExamList from "./pages/Exam/ExamList";
import ExamRegister from "./pages/Exam/ExamRegister";
import ExamUpdate from "./pages/Exam/ExamUpdate";
import HealthcarePage from "./pages/Healthcare/HealthcarePage";
import Home from "./pages/Home/Home";


const Router = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/HealthcarePage" element={<HealthcarePage/>}/>
            <Route path="/ExamRegister" element={<ExamRegister/>}/>
            <Route path="/ExamDelete" element={<ExamDelete/>}/>
            <Route path="/ExamFind" element={<ExamFind/>}/>
            <Route path="/ExamUpdate" element={<ExamUpdate/>}/>
            <Route path="/ExamList" element={<ExamList/>}/>

        </Routes>        
        </BrowserRouter>
    );
};

export default Router;
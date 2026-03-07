import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import About from "../Pages/Hub/About/About";
import Vision from "../Pages/Hub/Vision/Vision";
import Founder from "../Pages/Hub/Founder/Founder";
import Financial from "../Pages/Hub/Financial/Financial";
import Collabration from "../Pages/Hub/Collabration/Collabration";
import Layout from "../Components/Layout/Layout";
import ComingSoon from "../Pages/ComingSoon/ComingSoon";
import NotFound from "../Pages/NotFound/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="vision" element={<Vision />} />
        <Route path="founders" element={<Founder />} />
        <Route path="financial-reports" element={<Financial />} />
        <Route path="collabrations" element={<Collabration />} />
        <Route path="land-acquisition" element={<ComingSoon />} />
        <Route path="land-acquisition" element={<ComingSoon />} />
        <Route path="gurukul-training" element={<ComingSoon />} />
        <Route path="courses" element={<ComingSoon />} />
        <Route path="ayurveda" element={<ComingSoon />} />
        <Route path="ebooks" element={<ComingSoon />} />
        <Route path="library" element={<ComingSoon />} />

        <Route path="apps" element={<ComingSoon />} />
        <Route path="volunteer" element={<ComingSoon />} />
        <Route path="events" element={<ComingSoon />} />

        <Route path="blog" element={<ComingSoon />} />
        <Route path="media" element={<ComingSoon />} />
        <Route path="testimonials" element={<ComingSoon />} />
        <Route path="faqs" element={<ComingSoon />} />

        <Route path="marketplace" element={<ComingSoon />} />
        <Route path="donate" element={<ComingSoon />} />

        <Route path="privacy-policy" element={<ComingSoon />} />
        <Route path="terms-of-service" element={<ComingSoon />} />
        <Route path="cookie-policy" element={<ComingSoon />} />
        <Route path="accessibility" element={<ComingSoon />} />

         <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

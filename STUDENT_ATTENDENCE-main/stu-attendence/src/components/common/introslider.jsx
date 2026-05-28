import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaPenFancy } from "react-icons/fa";
import { Users, GraduationCap, ClipboardCheck, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Slidebutton = ({ text, css }) => {
  const swiper = useSwiper();
  return (
    <div className="flex flex-row p-2 items-center justify-center">
      <button 
        className={css} 
        onClick={() => swiper.slideNext()}
      >
        {text}
      </button>
    </div>
  );
};

const Skipbutton = ({ text, css, onClick }) => {
  return (
    <div className="flex flex-row p-2 items-center justify-center">
      <button 
        className={css} 
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default function Introslides() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen overflow-hidden font-sans">
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true, dynamicBullets: true }}
        onReachEnd={() => {
          setTimeout(() => {
            navigate('/login');
          }, 2000);
        }}
        className="h-full w-full"
      >
        {/* Slide 1: Welcome */}
        <SwiperSlide>
          <div className="relative flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-indigo-950 to-slate-950 text-white h-screen px-6 select-none">
            
            {/* Glowing Backdrop Circle */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

            {/* Float Container */}
            <div className="flex flex-col items-center animate-fade-in-up text-center max-w-2xl">
              <div className="w-20 h-20 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 mb-8 animate-float">
                <FaPenFancy className="text-white text-3xl" />
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-blue-200 mb-4">
                Welcome to
              </h1>

              <div className="inline-block bg-white/10 backdrop-blur-md px-8 py-3 rounded-2xl border border-white/10 shadow-2xl mb-6">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-wide bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
                  Rollcall
                </h2>
              </div>

              <p className="text-slate-400 text-lg sm:text-xl md:text-2xl font-light tracking-wide max-w-md">
                A premium, modern attendance management system for institutions.
              </p>
            </div>

            {/* Buttons */}
            <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col gap-3 items-center z-10 w-full px-4">
              <Slidebutton 
                text="Next Step" 
                css="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold px-8 py-3 rounded-xl text-lg sm:text-xl shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]" 
              />
              <Skipbutton 
                onClick={() => navigate('/login')} 
                text="Skip to Login" 
                css="text-slate-400 hover:text-white font-medium p-1 text-sm sm:text-base transition-colors duration-200" 
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2: Feature Matrix */}
        <SwiperSlide>
          <div className="relative flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-slate-950 via-slate-900 to-indigo-950 text-white h-screen px-6 select-none overflow-y-auto py-12">
            
            <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="flex flex-col items-center text-center max-w-4xl z-10 mb-24">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
                Designed for Everyone
              </h2>
              <p className="text-slate-400 text-sm sm:text-base max-w-lg mb-8">
                Rollcall streamlines administrative workflows, grading records, and attendance logs.
              </p>

              {/* Grid of Glass Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-4">
                
                {/* Card 1: Admin */}
                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300 hover:scale-[1.02] flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center mb-4">
                    <Users size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-blue-200">For Administrators</h3>
                  <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                    Manage classes, assign teaching staff, enroll students, and monitor real-time system stats.
                  </p>
                </div>

                {/* Card 2: Teacher */}
                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300 hover:scale-[1.02] flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-indigo-500/10 text-indigo-400 rounded-xl flex items-center justify-center mb-4">
                    <ClipboardCheck size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-indigo-200">For Teachers</h3>
                  <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                    Mark subject-wise attendance easily, review student schedules, and view performance charts.
                  </p>
                </div>

                {/* Card 3: Student */}
                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300 hover:scale-[1.02] flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-purple-500/10 text-purple-400 rounded-xl flex items-center justify-center mb-4">
                    <GraduationCap size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-purple-200">For Students</h3>
                  <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                    Track overall attendance percentage, review enrolled subjects, grades, and upcoming exams.
                  </p>
                </div>

              </div>
            </div>

            {/* Buttons */}
            <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col gap-3 items-center z-10 w-full px-4">
              <Slidebutton 
                text="Next Step" 
                css="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold px-8 py-3 rounded-xl text-lg sm:text-xl shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]" 
              />
              <Skipbutton 
                onClick={() => navigate('/login')} 
                text="Skip to Login" 
                css="text-slate-400 hover:text-white font-medium p-1 text-sm sm:text-base transition-colors duration-200" 
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3: CTA */}
        <SwiperSlide>
          <div className="relative flex flex-col items-center justify-center bg-gradient-to-tr from-slate-950 via-indigo-950 to-slate-900 text-white h-screen px-6 select-none">
            
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse-glow"></div>

            <div className="flex flex-col items-center text-center max-w-xl z-10">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8 shadow-xl">
                <FaPenFancy className="text-blue-400 text-2xl" />
              </div>

              <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
                Ready to Take Rollcall?
              </h2>

              <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed max-w-md mb-10">
                Log in with your administrator, teacher, or student credentials to access your dashboard.
              </p>

              {/* Pulsing CTA Button */}
              <button 
                onClick={() => navigate('/login')}
                className="group relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-2xl text-lg sm:text-xl shadow-2xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] animate-pulse-glow"
              >
                Enter Portal
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col gap-3 items-center z-10 w-full px-4">
              <Skipbutton 
                onClick={() => navigate('/login')} 
                text="Click here if not redirected" 
                css="text-slate-500 hover:text-slate-300 font-normal p-1 text-xs sm:text-sm transition-colors duration-200" 
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
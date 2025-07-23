import React, { useState } from 'react';
import Header from './Header';
import NewFooter from './NewFooter';
import { Link } from 'react-router-dom';

// Import your assets or use placeholder images for now
// Replace these with your actual image imports
const doctorImage = 'https://cdn.shopify.com/s/files/1/0674/9614/9171/files/smiling-young-female-doctor-wearing-medical-robe-doing-ok-sign-looking-isolated_1.png?v=1753255903'; // Doctor image
const heartIcon = 'https://i.imgur.com/JWEuKlf.png'; // Placeholder for heart icon
const stethoscopeIcon = 'https://i.imgur.com/O5Ud0Ji.png'; // Placeholder for stethoscope icon
const ambulanceIcon = 'https://i.imgur.com/w86CUtJ.png'; // Placeholder for ambulance icon
const medicineIcon = 'https://i.imgur.com/AgCgqxz.png'; // Placeholder for medicine icon
const doctorIcon = 'https://i.imgur.com/8Roq42M.png'; // Placeholder for doctor icon
const labIcon = 'https://i.imgur.com/YFnpTlL.png'; // Placeholder for lab icon
const serviceImage1 = 'https://i.imgur.com/OzXrpB6.jpg'; // Placeholder for service image
const serviceImage2 = 'https://i.imgur.com/XVZVkbI.jpg'; // Placeholder for service image
const clientImage1 = 'https://i.imgur.com/8NXizbM.jpg'; // Placeholder for client image
const clientImage2 = 'https://i.imgur.com/EgPyUd0.jpg'; // Placeholder for client image
const partnersImage = 'https://i.imgur.com/FZg1WuD.png'; // Placeholder for partners image

const MedicalLanding = () => {
  // State to track which FAQ items are open
  const [openFAQ, setOpenFAQ] = useState(1); // Default to first item being open
  
  // Function to toggle FAQ items
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-[#F6F9FE] pt-32 pb-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-6">
                <span className="text-sm font-medium">#1 Healthcare Provider</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-700 mb-6 leading-tight" style={{fontFamily: 'ROGBold, sans-serif'}}>
                Your Journey To Better <span className="text-blue-600">Health</span> Starts Here
              </h1>
              
              
              
              <p className="text-gray-700 text-lg mb-8 leading-relaxed" style={{fontFamily: 'MinionPro, serif'}}>
                We provide the most comprehensive, compassionate care for all your health needs. Our expert medical professionals are dedicated to your wellbeing.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => window.open('https://www.aayush.health/', '_blank')}
                  className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all duration-200 shadow-lg shadow-red-300/30" 
                  style={{fontFamily: 'ROGBold, sans-serif', letterSpacing: '1.5px'}}
                >
                  Book Appointment
                </button>
               
              </div>
              
              <div className="flex items-center mt-12 space-x-8">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-gray-900">10k+</span>
                  <span className="text-sm text-gray-500">Happy Patients</span>
                </div>
                
                <div className="w-px h-12 bg-gray-300"></div>
                
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-gray-900">100+</span>
                  <span className="text-sm text-gray-500">Expert Doctors</span>
                </div>
                
                <div className="w-px h-12 bg-gray-300"></div>
                
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-gray-900">50+</span>
                  <span className="text-sm text-gray-500">Specialities</span>
                </div>
              </div>
            </div>
            
            {/* Right Side - Image */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full filter blur-3xl opacity-70"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-100 rounded-full filter blur-3xl opacity-70"></div>
                
                <img 
                  src={doctorImage} 
                  alt="Doctor" 
                  className="w-full h-auto relative z-10 rounded-2xl"
                />
                
                {/* Floating Card 1 - Appointment */}
                <div className="absolute top-10 -left-10 bg-white p-4 rounded-xl shadow-xl z-20 hidden lg:block">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Your appointment</p>
                      <p className="font-medium text-gray-900">Confirmed</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating Card 2 - Heart Rate */}
                <div className="absolute bottom-10 -right-10 bg-white p-4 rounded-xl shadow-xl z-20 hidden lg:block">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Heart Rate</p>
                      <p className="font-medium text-gray-900">72 BPM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold !text-black mb-4" style={{fontFamily: 'ROGBold, sans-serif', letterSpacing: '1.5px'}}>Why Choose Aayush Wellness?</h2>
            <p className="text-gray-700 max-w-2xl mx-auto" style={{fontFamily: 'MinionPro, serif'}}>Experience a new standard in preventive and personalized healthcare. At Aayush Wellness, we merge advanced diagnostics with compassionate care to give you complete control over your health journey.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 - Expert Specialists */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-red-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-red-700 mb-3" style={{fontFamily: 'ROGBold, sans-serif', marginLeft: '55px', letterSpacing: '1px'}}>Expert Specialists</h3>
              <h4 className="text-lg font-medium text-blue-600 mb-2" style={{fontFamily: 'ROGBold, sans-serif', letterSpacing: '1px'}}>Care You Can Trust</h4>
              <p className="text-gray-700" style={{fontFamily: 'MinionPro, serif'}}>Our team of qualified doctors and specialists brings years of experience to offer the highest quality care tailored to your health needs.</p>
            </div>
            
            {/* Feature 2 - Advanced Technology */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold text-red-700 mb-3" style={{fontFamily: 'ROGBold, sans-serif', marginLeft: '55px', letterSpacing: '1px'}}>Advanced Technology</h3>
              <h4 className="text-lg font-medium text-blue-600 mb-2" style={{fontFamily: 'ROGBold, sans-serif',letterSpacing: '1px'}}>Precision Meets Innovation</h4>
              <p className="text-gray-700" style={{fontFamily: 'MinionPro, serif'}}>We deploy cutting-edge diagnostic tools and digital health platforms to deliver fast, reliable, and accurate results.</p>
            </div>
            
            {/* Feature 3 - Emergency Care */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-red-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">🚑</span>
              </div>
              <h3 className="text-xl font-semibold text-red-700 mb-3" style={{fontFamily: 'ROGBold, sans-serif', marginLeft: '55px', letterSpacing: '1px'}}>Emergency Care</h3>
              <h4 className="text-lg font-medium text-blue-600 mb-2" style={{fontFamily: 'ROGBold, sans-serif', letterSpacing: '1px'}}>Always By Your Side</h4>
              <p className="text-gray-700" style={{fontFamily: 'MinionPro, serif'}}>Round-the-clock emergency services ensure you're never alone during critical times—our rapid response saves lives when every second counts.</p>
            </div>
            
            {/* Feature 4 - Personalized Care */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">👩‍⚕️</span>
              </div>
              <h3 className="text-xl font-semibold text-red-700 mb-3" style={{fontFamily: 'ROGBold, sans-serif', marginLeft: '55px', letterSpacing: '1px'}}>Personalized Care</h3>
              <h4 className="text-lg font-medium text-blue-600 mb-2" style={{fontFamily: 'ROGBold, sans-serif', letterSpacing: '1px'}}>Healthcare Made for You</h4>
              <p className="text-gray-700" style={{fontFamily: 'MinionPro, serif'}}>From lifestyle to treatment plans, everything is tailored to your body's unique needs. No one-size-fits-all approach—just care that fits you.</p>
            </div>
          </div>
        </div>
      </section>
      

      {/* Online Chat Consultation Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              {/* Doctor with chat bubbles image */}
              <div className="relative bg-blue-100 rounded-full w-96 h-96 mx-auto overflow-hidden">
                <img 
                  src="https://cdn.shopify.com/s/files/1/0674/9614/9171/files/envato-labs-image-edit_1.png?v=1753250189" 
                  alt="Doctor with smartphone" 
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 max-w-full h-auto"
                />
                
                
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold !text-black mb-6" style={{fontFamily: 'ROGBold, sans-serif'}}>
                Consult a Doctor Online – Anytime, Anywhere
              </h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed" style={{fontFamily: 'MinionPro, serif'}}>
                Talk to certified medical professionals instantly through our secure and easy-to-use chat, phone, or video consultation platform.
              </p>
              
              <div className="mb-6 space-y-2">
                <div className="flex items-center text-red-600">
                  <span className="mr-2">✔</span>
                  <span style={{fontFamily: 'MinionPro, serif'}}>Unlimited follow-ups for 50 or 100 hours</span>
                </div>
                <div className="flex items-center text-red-600">
                  <span className="mr-2">✔</span>
                  <span style={{fontFamily: 'MinionPro, serif'}}>Chat, Call, or Video options available</span>
                </div>
                <div className="flex items-center text-red-600">
                  <span className="mr-2">✔</span>
                  <span style={{fontFamily: 'MinionPro, serif'}}>Instant access via Android & iOS</span>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-blue-700 mb-4 flex items-center" style={{fontFamily: 'ROGBold, sans-serif'}}>
                  How it works:
                </h3>
                <div className="space-y-3 text-gray-700" style={{fontFamily: 'MinionPro, serif'}}>
                  <div className="flex items-start">
                    <span className="font-medium text-red-600 mr-2">1.</span>
                    <span><strong>Choose Your Mode</strong> – Query, Chat, Phone, or Video</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-medium text-red-600 mr-2">2.</span>
                    <span><strong>Start the Conversation</strong> – Get your concerns addressed instantly</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-medium text-red-600 mr-2">3.</span>
                    <span><strong>Continue Follow-ups</strong> – Stay connected with your doctor for the next 50/100 hours</span>
                  </div>
                </div>
              </div>
              
              {/* Consultation Options */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5">
                    <input 
                      type="radio" 
                      id="query" 
                      name="consultation-type" 
                      className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                      defaultChecked
                    />
                  </div>
                  <label htmlFor="query" className="flex items-center space-x-2 cursor-pointer">
                    <span className="w-6 h-6 bg-blue-100 flex items-center justify-center rounded-md">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <span className="text-gray-700">Query</span>
                  </label>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5">
                    <input 
                      type="radio" 
                      id="chat" 
                      name="consultation-type" 
                      className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                  </div>
                  <label htmlFor="chat" className="flex items-center space-x-2 cursor-pointer">
                    <span className="w-6 h-6 bg-blue-100 flex items-center justify-center rounded-md">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </span>
                    <span className="text-gray-700">Chat</span>
                  </label>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5">
                    <input 
                      type="radio" 
                      id="phone" 
                      name="consultation-type" 
                      className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                  </div>
                  <label htmlFor="phone" className="flex items-center space-x-2 cursor-pointer">
                    <span className="w-6 h-6 bg-blue-100 flex items-center justify-center rounded-md">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                    <span className="text-gray-700">Phone</span>
                  </label>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5">
                    <input 
                      type="radio" 
                      id="video" 
                      name="consultation-type" 
                      className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                  </div>
                  <label htmlFor="video" className="flex items-center space-x-2 cursor-pointer">
                    <span className="w-6 h-6 bg-blue-100 flex items-center justify-center rounded-md">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <span className="text-gray-700">Video</span>
                  </label>
                </div>
              </div>
              
              <button 
                onClick={() => window.open('https://www.aayush.health/', '_blank')}
                className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all duration-200 shadow-lg" 
                style={{fontFamily: 'ROGBold, sans-serif'}}
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Consulting Specialities Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold !text-black mb-4" style={{fontFamily: 'ROGBold, sans-serif', letterSpacing: '1.5px'}}>Our Consulting Specialities</h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg" style={{fontFamily: 'MinionPro, serif'}}>
              Explore our most demanded health tests and packages designed by top medical specialists from 80+ domains. Whether you want a routine check-up or disease-specific test, we've got you covered.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {/* Dermatology */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">III</span>
                </div>
              </div>
              <h3 className="text-md font-semibold text-gray-600 mb-2 " style={{fontFamily: 'ROGBold, sans-serif', letterSpacing: '1.5px', marginLeft: '1.55rem'}}>Dermatology</h3>
            </div>

            {/* Internal Medicine */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">🫀</span>
                </div>
              </div>
              <h3 className="text-md font-semibold text-gray-600 mb-2" style={{fontFamily: 'ROGBold, sans-serif', letterSpacing: '1.5px'}}>Internal Medicine</h3>
            </div>

            {/* Neurology */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">🧠</span>
                </div>
              </div>
              <h3 className="text-md font-semibold text-gray-600 mb-2" style={{fontFamily: 'ROGBold, sans-serif', letterSpacing: '1.5px', marginLeft: '40px'}}>Neurology</h3>
            </div>

            {/* General Medicine */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✚</span>
                </div>
              </div>
              <h3 className="text-md font-semibold text-gray-600 mb-2" style={{fontFamily: 'ROGBold, sans-serif', letterSpacing: '1.5px', marginLeft: '10px'}}>General Medicine</h3>
            </div>

            {/* Dentistry */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">🦷</span>
                </div>
              </div>
              <h3 className="text-md font-semibold text-gray-600 mb-2" style={{fontFamily: 'ROGBold, sans-serif', letterSpacing: '1.5px', marginLeft: '40px'}}>Dentistry</h3>
            </div>

            {/* Otolaryngology */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">👂</span>
                </div>
              </div>
              <h3 className="text-md font-semibold text-gray-600 mb-2" style={{fontFamily: 'ROGBold, sans-serif', letterSpacing: '1.5px', marginLeft: '10px'}}>Otolaryngology</h3>
            </div>

            {/* HIV/AIDS */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">🎗️</span>
                </div>
              </div>
              <h3 className="text-md font-semibold text-gray-600 mb-2" style={{fontFamily: 'ROGBold, sans-serif', letterSpacing: '1.5px', marginLeft: '40px'}}>HIV/AIDS</h3>
            </div>

            {/* Urology */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">🫘</span>
                </div>
              </div>
              <h3 className="text-md font-semibold text-gray-600 mb-2" style={{fontFamily: 'ROGBold, sans-serif', letterSpacing: '1.5px', marginLeft: '40px'}}>Urology</h3>
            </div>

            {/* Allergy */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">🤧</span>
                </div>
              </div>
              <h3 className="text-md font-semibold text-gray-600 mb-2" style={{fontFamily: 'ROGBold, sans-serif', letterSpacing: '1.5px', marginLeft: '45px'}}>Allergy</h3>
            </div>

            {/* Paediatrics */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">👶</span>
                </div>
              </div>
              <h3 className="text-md font-semibold text-gray-600 mb-2" style={{fontFamily: 'ROGBold, sans-serif', letterSpacing: '1.5px', marginLeft: '40px'}}>Paediatrics</h3>
            </div>

            {/* Gastroenterology */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">🔥</span>
                </div>
              </div>
              <h3 className="text-md font-semibold text-gray-800 mb-2" style={{fontFamily: 'ROGBold, sans-serif', letterSpacing: '1.5px', marginLeft: '20px'}}>Gastroenterology</h3>
            </div>

            {/* Infectious Disease */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">🦠</span>
                </div>
              </div>
              <h3 className="text-md font-semibold text-gray-800 mb-2" style={{fontFamily: 'ROGBold, sans-serif', letterSpacing: '1.5px', marginLeft: '10px'}}>Infectious Disease</h3>
            </div>
          </div>

         
          
        </div>
      </section>
      
    {/* Testimonials Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-600 rounded-full mb-4">
              <span className="text-xl font-medium" style={{fontFamily: 'ROGBold, sans-serif'}}>Testimonials</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold !text-black mb-4" style={{fontFamily: 'ROGBold, sans-serif'}}>What Our Patients Say</h2>
            <p className="text-gray-700 max-w-2xl mx-auto" style={{fontFamily: 'MinionPro, serif'}}>Hear from those who have experienced our care firsthand.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <img src="https://plus.unsplash.com/premium_photo-1682089787056-9ac0c78a2ac2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwcGVvcGxlfGVufDB8fDB8fHww" alt="Client" className="w-16 h-16 rounded-full object-cover mr-4" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Rahul Sharma</h4>
                  
                </div>
              </div>
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-gray-600 italic mb-4">
                "I was skeptical about online consultations at first, but my experience with the Aayush Wellness team completely changed my perspective. Despite being miles away, the doctor was incredibly attentive and thorough during our video consultation"
              </blockquote>
              
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcghtfEkdGm40UT562vewVyct5TP-OiqTcvEsdt2XKCj5Q3OXcidQfi_VuBMiNrUlO3ac&usqp=CAU" alt="Client" className="w-16 h-16 rounded-full object-cover mr-4" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Priya Patel</h4>
                  
                </div>
              </div>
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-gray-600 italic mb-4">
                "I'm grateful to the Aayush Wellness team for making quality healthcare so accessible. Their professional approach and genuine care made me feel like I was their only patient. I highly recommend their online consultation services to anyone seeking expert medical advice from the comfort of their home."
              </blockquote>
              
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold !text-black mb-4" style={{fontFamily: 'ROGBold, sans-serif'}}>Frequently Asked Questions</h2>
            <p className="text-gray-700 max-w-2xl mx-auto" style={{fontFamily: 'MinionPro, serif'}}>
              Aayush Wellness answers the most common questions about online consultations, telemedicine, and digital health services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
            {/* Left Side - Doctor Image */}
            <div className="relative">
              <div className="relative">
                <div className="w-96 h-96 bg-pink-100 rounded-full absolute -z-10"></div>
                <img 
                  src="https://cdn.shopify.com/s/files/1/0674/9614/9171/files/portrait-successful-mid-adult-doctor-with-crossed-arms.png?v=1753255904" 
                  alt="Doctor with question card" 
                  className="relative z-10 max-w-lg mx-auto !pt-0 w-full h-auto"
                />
              </div>
            </div>
            
            {/* Right Side - FAQ Items */}
            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <div className="border-b border-red-200 pb-6">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFAQ(1)}>
                  <h3 className="text-xl font-medium text-blue-600" style={{fontFamily: 'ROGBold, sans-serif', fontSize: '1.75rem'}}>❓ What does telemedicine mean?</h3>
                  <button 
                    className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${openFAQ === 1 ? 'bg-red-100 text-red-600' : 'bg-white text-gray-400 border border-gray-200'}`}
                  >
                    {openFAQ === 1 ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    )}
                  </button>
                </div>
                {openFAQ === 1 && (
                  <div className="mt-3 text-gray-700 transition-all duration-300" style={{fontFamily: 'MinionPro, serif'}}>
                    <p>Telemedicine refers to the practice of providing medical care remotely using digital communication tools. This includes video calls, phone consultations, or chats with healthcare professionals—without the need for physical visits.</p>
                  </div>
                )}
              </div>
              
              {/* FAQ Item 2 */}
              <div className="border-b border-blue-200 pb-6">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFAQ(2)}>
                  <h3 className="text-xl font-medium text-blue-600" style={{fontFamily: 'ROGBold, sans-serif', fontSize: '1.75rem'}}>❓ What is telemedicine used for?</h3>
                  <button 
                    className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${openFAQ === 2 ? 'bg-blue-100 text-blue-600' : 'bg-white text-gray-400 border border-gray-200'}`}
                  >
                    {openFAQ === 2 ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    )}
                  </button>
                </div>
                {openFAQ === 2 && (
                  <div className="mt-3 text-gray-700 transition-all duration-300" style={{fontFamily: 'MinionPro, serif', fontSize: '1.75rem'}}>
                    <p>Telemedicine is ideal for:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>General health checkups</li>
                      <li>Follow-up consultations</li>
                      <li>Mental health counseling</li>
                      <li>Chronic disease management</li>
                      <li>Lifestyle and wellness guidance</li>
                      <li>Minor symptoms like cold, pain, fatigue, etc.</li>
                    </ul>
                  </div>
                )}
              </div>
              
              {/* FAQ Item 3 */}
              <div className="border-b border-red-200 pb-6">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFAQ(3)}>
                  <h3 className="text-xl font-medium text-blue-600" style={{fontFamily: 'ROGBold, sans-serif', fontSize: '1.75rem'}}>❓ What equipment do you require for telemedicine?</h3>
                  <button 
                    className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${openFAQ === 3 ? 'bg-red-100 text-red-600' : 'bg-white text-gray-400 border border-gray-200'}`}
                  >
                    {openFAQ === 3 ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    )}
                  </button>
                </div>
                {openFAQ === 3 && (
                  <div className="mt-3 text-gray-700 transition-all duration-300" style={{fontFamily: 'MinionPro, serif', fontSize: '1.75rem'}}>
                    <p>To access telemedicine services, you simply need:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>A smartphone, tablet, or computer</li>
                      <li>Stable internet connection</li>
                      <li>A secure, verified app (like Aayush Wellness App)</li>
                      <li>Optional: earphones and webcam for better communication</li>
                    </ul>
                  </div>
                )}
              </div>
              
              {/* FAQ Item 4 */}
              <div className="border-b border-blue-200 pb-6">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFAQ(4)}>
                  <h3 className="text-xl font-medium text-blue-600" style={{fontFamily: 'ROGBold, sans-serif', fontSize: '1.75rem'}}>❓ What are the pros or advantages of telemedicine?</h3>
                  <button 
                    className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${openFAQ === 4 ? 'bg-blue-100 text-blue-600' : 'bg-white text-gray-400 border border-gray-200'}`}
                  >
                    {openFAQ === 4 ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    )}
                  </button>
                </div>
                {openFAQ === 4 && (
                  <div className="mt-3 text-gray-700 transition-all duration-300" style={{fontFamily: 'MinionPro, serif'}}>
                    <div className="space-y-2">
                      <p><strong>Convenient</strong> – Consult from anywhere, anytime</p>
                      <p><strong>Time-saving</strong> – No long queues or waiting rooms</p>
                      <p><strong>Cost-effective</strong> – Lower consultation and travel costs</p>
                      <p><strong>Private & Secure</strong> – Confidential and encrypted conversations</p>
                      <p><strong>Continuity of Care</strong> – Ideal for ongoing health monitoring</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <NewFooter />
    </>
  );
};

export default MedicalLanding;

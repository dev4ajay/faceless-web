"use client"
import { useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleFaqs, setVisibleFaqs] = useState(5); 
  const [openIndex, setOpenIndex] = useState(null); 

  const faqs = [
    { question: "What are 'Automations'?", answer: "Automations allow you to streamline workflows..." },
    { question: "How does generate video content?", answer: " uses AI to generate personalized video content..." },
    { question: "Can I personalize videos created by?", answer: "Yes, you can personalize videos by adding custom images..." },
    { question: "Can I select different voices for the videos?", answer: "Yes, provides multiple voice options to choose from." },
    { question: "How do I synchronize my text with images in videos?", answer: "You can synchronize text and images in the settings section." },
    { question: "What is?", answer: " is an AI-powered platform that creates video content." },
    { question: "Is free to use?", answer: " offers both free and premium plans depending on usage." }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleShowMore = () => {
    setVisibleFaqs(prev => prev + 3);
  };

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index); 
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 border  mt-3 mb-2">
      <h2 className="text-2xl font-semibold text-center mb-4">Frequently Asked Questions</h2>
      <p className="text-center text-gray-500 mb-6">
        We ve compiled some common questions and answers to help you understand our services better.
      </p>
      
     
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search FAQs..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
  {filteredFaqs.slice(0, visibleFaqs).map((faq, index) => (
    <div key={index} className="w-full">
      <button
        className="flex justify-between items-center w-full p-4 text-left text-sm font-medium text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none"
        onClick={() => toggleFaq(index)}
      >
        <span className="w-full">{faq.question}</span>
        {openIndex === index ? (
          <IoIosArrowUp className="w-5 h-5 text-gray-500" />
        ) : (
          <IoIosArrowDown className="w-5 h-5 text-gray-500" />
        )}
      </button>
      {openIndex === index && (
        <div className="w-full p-4 text-sm text-gray-500 bg-gray-50">
          {faq.answer}
        </div>
      )}
    </div>
  ))}
</div>


      {/* Show More Button */}
      {visibleFaqs < filteredFaqs.length && (
        <div className="text-center mt-6">
          <button
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:text-white hover:bg-gray-800"
            onClick={handleShowMore}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default FAQ;

export default function About() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-lg text-center">
          <h1 className="text-3xl font-bold text-[#1A237E] mb-4">About Statement Buddy</h1>
          <p className="text-gray-700 text-lg leading-7">
            Statement Buddy is an AI-powered financial advisory platform designed to simplify financial decision-making for both retail and investment professionals. 
            With Statement Buddy, users can upload company financial statements, receive actionable insights, and obtain buy or sell recommendations.
          </p>
          <p className="text-gray-700 text-lg leading-7 mt-4">
            Beyond financial analysis, Statement Buddy integrates macroeconomic trends, tech advancements, and startup funding news to highlight potential risks or acquisition opportunities. 
            Our mission is to empower users with accurate, data-driven insights for smarter investments.
          </p>
          <p className="text-gray-700 font-semibold mt-6">
            Your reliable partner for financial clarity and strategy.
          </p>
        </div>
      </div>
    );
  }
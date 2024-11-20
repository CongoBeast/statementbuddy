'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';

const Home: React.FC = () => {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [question, setQuestion] = useState<string>('');
  const [answer, setAnswer] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<{ type: string; message: string } | null>(null);

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setPdfFile(e.target.files[0]);
    }
  };

  const handleQuestion = async (e: FormEvent) => {
    e.preventDefault();
    if (!pdfFile) {
      alert('Please upload a PDF first.');
      return;
    }

    setLoading(true);
    setToastMessage(null); // Clear previous toast

    const formData = new FormData();
    formData.append('pdf', pdfFile);
    formData.append('question', question);

    try {
      const response = await fetch('/api/ask', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to fetch the response from the server');
      }

      const data = await response.json();
      setAnswer(data.answer || 'No answer found.');
      setToastMessage({ type: 'success', message: 'Request completed successfully!' });
    } catch (error) {
      setAnswer('');
      setToastMessage({ type: 'error', message: 'Failed to process your request. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#CBDCEB]">
      <div className="w-full max-w-lg bg-[#F3F3E0] rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-[#133E87] mb-6 text-center">
          Upload PDF & Ask Questions
        </h1>
        <input
          type="file"
          accept="application/pdf"
          onChange={handleUpload}
          className="block w-full mb-4 p-2 border border-[#608BC1] rounded"
        />
        <form onSubmit={handleQuestion} className="text-center">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask a question..."
            className="w-full p-2 border border-[#608BC1] rounded mb-4"
          />
          <button
            type="submit"
            className={`w-full py-2 px-4 rounded text-white ${
              loading ? 'bg-[#608BC1] cursor-not-allowed' : 'bg-[#133E87] hover:bg-[#608BC1]'
            }`}
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Submit'}
          </button>
        </form>
        {answer && (
          <div className="mt-6 p-4 bg-[#CBDCEB] rounded">
            <h2 className="text-xl font-bold text-[#133E87]">Answer:</h2>
            <p>{answer}</p>
          </div>
        )}
        {toastMessage && (
          <div
            className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded ${
              toastMessage.type === 'success'
                ? 'bg-green-500 text-white'
                : 'bg-red-500 text-white'
            }`}
          >
            {toastMessage.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

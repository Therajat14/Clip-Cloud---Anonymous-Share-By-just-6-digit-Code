import React, { useEffect, useState } from "react";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Share from "../Pages/Share";
import Receive from "../Pages/Receive";
import NotFound from "../Pages/NotFound";
import PrivacyTerms from "../Pages/PrivacyTerms";

const AppInitializer = () => {
  const [isServerActive, setIsServerActive] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const [statusMessage, setStatusMessage] = useState("Getting things ready..."); // Updated initial message
  const MAX_RETRIES = 3;
  const RETRY_INTERVAL = 3000;

  useEffect(() => {
    let messageTimer;

    const checkServerStatus = async () => {
      setLoading(true);
      setError(null);
      setStatusMessage("Starting up IncogShare. This won't take long!"); // Clear and positive initial message

      messageTimer = setTimeout(() => {
        setStatusMessage(
          "Just a moment! We're spinning up the server for you.",
        );
      }, RETRY_INTERVAL * 2);

      try {
        const response = await axios.get(
          import.meta.env.VITE_API_URL + "/health",
        );
        if (response.status === 200) {
          clearTimeout(messageTimer);
          setStatusMessage("Almost there! Launching IncogShare..."); // Stronger final message
          setTimeout(() => {
            setIsServerActive(true);
            setLoading(false);
          }, 500);
        } else {
          throw new Error("Server not responding as expected.");
        }
      } catch (err) {
        clearTimeout(messageTimer);
        console.error("Server health check failed:", err);
        if (retryCount < MAX_RETRIES) {
          setRetryCount((prevCount) => prevCount + 1);
          // More reassuring retry message
          setStatusMessage(
            `Connection attempt failed. Retrying (${retryCount + 1} of ${MAX_RETRIES})...`,
          );
          setTimeout(checkServerStatus, RETRY_INTERVAL);
        } else {
          setError(
            "Failed to connect to IncogShare. Please check your internet and try again.",
          ); // More user-friendly error
          setLoading(false);
        }
      }
    };

    checkServerStatus();

    return () => {
      clearTimeout(messageTimer);
    };
  }, [retryCount]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-950 text-white">
        <div className="flex flex-col items-center">
          <Loader2 className="h-10 w-10 animate-spin text-indigo-400" />
          <p className="mt-4 text-center text-lg">{statusMessage}</p>
          <p className="mt-2 text-sm text-gray-400">
            This is a quick, one-time setup to get started.
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-950 px-4 text-center text-white">
        <h1 className="mb-4 text-3xl font-bold text-red-500">
          Connection Problem
        </h1>
        <p className="text-lg text-gray-300">{error}</p>
        <button
          onClick={() => {
            setRetryCount(0);
            setIsServerActive(false);
            setLoading(true);
            setError(null);
            setStatusMessage("Attempting to reconnect..."); // Reset message for retry
          }}
          className="mt-6 rounded-md bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/share" element={<Share />} />
        <Route path="/receive" element={<Receive />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/privacy&terms" element={<PrivacyTerms />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppInitializer;

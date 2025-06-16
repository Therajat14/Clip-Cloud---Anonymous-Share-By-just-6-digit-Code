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
  const [statusMessage, setStatusMessage] = useState("Connecting to server..."); // New state for dynamic messages
  const MAX_RETRIES = 3;
  const RETRY_INTERVAL = 3000;

  useEffect(() => {
    let messageTimer; // Timer for updating status messages

    const checkServerStatus = async () => {
      setLoading(true);
      setError(null);
      setStatusMessage("Warming up the server... Please hold on!"); // Initial positive message

      // Optionally update message after a delay if it's taking long
      messageTimer = setTimeout(() => {
        setStatusMessage("This is a one-time setup. Almost there!");
      }, RETRY_INTERVAL * 2); // Show a new message after 6 seconds if still loading

      try {
        const response = await axios.get(
          import.meta.env.VITE_API_URL + "/health",
        );
        if (response.status === 200) {
          clearTimeout(messageTimer); // Clear any pending message updates
          setStatusMessage("Igniting the engines! ClipCloud is starting up..."); // Final positive message
          // Give a very short delay to show the "active" message before rendering full app
          setTimeout(() => {
            setIsServerActive(true);
            setLoading(false); // Stop loading after successful connection and message display
          }, 500); // Display "active" message for 0.5 seconds
        } else {
          throw new Error("Server not responding as expected.");
        }
      } catch (err) {
        clearTimeout(messageTimer); // Clear any pending message updates
        console.error("Server health check failed:", err);
        if (retryCount < MAX_RETRIES) {
          setRetryCount((prevCount) => prevCount + 1);
          setStatusMessage(
            `Connection failed, retrying (${retryCount + 1}/${MAX_RETRIES})...`,
          );
          setTimeout(checkServerStatus, RETRY_INTERVAL);
        } else {
          setError("Failed to connect to the server. Please try again later.");
          setLoading(false); // Stop loading on final error
        }
      }
    };

    checkServerStatus();

    // Cleanup function for the useEffect hook
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
          {/* We can't show a 100% progress for a simple HTTP request,
              but the changing message provides a sense of progress. */}
          <p className="mt-2 text-sm text-gray-400">
            This is a one-time initialization.
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-950 px-4 text-center text-white">
        <h1 className="mb-4 text-3xl font-bold text-red-500">
          Connection Error
        </h1>
        <p className="text-lg text-gray-300">{error}</p>
        <button
          onClick={() => {
            setRetryCount(0);
            setIsServerActive(false);
            setLoading(true);
            setError(null);
            setStatusMessage("Connecting to server..."); // Reset message for retry
          }}
          className="mt-6 rounded-md bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
        >
          Retry Connection
        </button>
      </div>
    );
  }

  // If server is active, render the main application
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

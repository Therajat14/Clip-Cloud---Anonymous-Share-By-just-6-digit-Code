import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function PrivacyTerms() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-950 text-white">
      <Navbar />

      <main className="mx-auto max-w-4xl flex-grow px-6 pt-28 pb-20">
        <h1 className="mb-6 text-center text-4xl font-bold text-indigo-300">
          Privacy Policy & Terms of Service
        </h1>

        <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6 text-gray-300 shadow-md">
          <section className="mb-8">
            <h2 className="mb-2 text-2xl font-semibold text-green-400">
              Privacy Policy
            </h2>
            <p className="text-sm leading-relaxed">
              We value your privacy. Any text or file you share through
              TextBridge is stored temporarily and is automatically deleted
              after 10 minutes or upon a one-time retrieval. We do not track
              user behavior, store access logs, or share data with third
              parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-2 text-2xl font-semibold text-yellow-400">
              Terms of Service
            </h2>
            <p className="text-sm leading-relaxed">
              By using TextBridge, you agree to not share any illegal, harmful,
              or copyrighted content. We are not responsible for the misuse of
              this service. Content shared is the sole responsibility of the
              user. We reserve the right to block access in cases of abuse.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold text-indigo-400">
              Security & Expiry
            </h2>
            <p className="text-sm leading-relaxed">
              Each code is valid for one-time use only and will expire after 10
              minutes for security reasons. Ensure the recipient accesses the
              code promptly. Files are never permanently stored.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

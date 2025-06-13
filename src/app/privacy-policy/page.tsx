// pages/privacy-policy.js
import Head from 'next/head';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Code With Speed</title>
        <meta name="description" content="Code With Speed Privacy Policy" />
      </Head>

      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

          <p className="mb-4">
            At Code With Speed, we are committed to protecting the privacy of our
            users. This Privacy Policy explains how we collect, use, and share
            your personal information when you visit or use our website,
            codewithspeed.com 
          </p>

          <h2 className="text-2xl font-bold mb-2">Information We Collect</h2>

          <p className="mb-4">
            We collect several types of information from and about users of our
            Site, including:
          </p>

          <ul className="list-disc ml-6 mb-4">
            <li>
              <strong>Personal Information:</strong> This may include your name,
              email address, and any other information you choose to provide to
              us.
            </li>
            <li>
              <strong>Usage Information:</strong> We collect information about
              how you use our Site, such as the pages you visit, the links you
              click, and the time you spend on our Site.
            </li>
            <li>
              <strong>Device Information:</strong> We collect information about
              the device you use to access our Site, such as your IP address,
              browser type, and operating system.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-2">How We Use Your Information</h2>

          <p className="mb-4">We may use your information for the following purposes:</p>

          <ul className="list-disc ml-6 mb-4">
            <li>To provide and improve our Site.</li>
            <li>To personalize your experience on our Site.</li>
            <li>To communicate with you about our Site.</li>
            <li>To analyze how our Site is used.</li>
            <li>To comply with applicable laws and regulations.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-2">Sharing Your Information</h2>

          <p className="mb-4">
            We do not share your personal information with third parties except
            as described in this Privacy Policy. We may share your information
            with:
          </p>

          <ul className="list-disc ml-6 mb-4">
            <li>Service providers who help us operate our Site.</li>
            <li>Legal authorities if required by law.</li>
          </ul>


          <h2 className="text-2xl font-bold mb-2">Cookies</h2>

          <p className="mb-4">
            We may use cookies to collect information about your use of our Site.
            You can control cookies through your browser settings.
          </p>

          <h2 className="text-2xl font-bold mb-2">Changes to this Privacy Policy</h2>

          <p className="mb-4">
            We may update this Privacy Policy from time to time.  We will post
            any changes on this page.
          </p>

          <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact
            us at [syedbabarali640@gmail.com].
          </p>

          {/* Add more sections as needed */}
          <Link className="relative left-[45px]  " href="/join-us">
            Join Us |
          </Link>
          
          <Link className="relative left-[45px]  " href="/checkout">
            checkout |
          </Link>
          <Link className="relative left-[45px]  " href="/sign-in">
            Sign In 
          </Link>
        </div>
      </div>
    </>
  );
}
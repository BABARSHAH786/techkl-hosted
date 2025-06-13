// pages/terms-conditions.js
import Head from 'next/head';

export default function TermsConditions() {
  return (
    <>
      <Head>
        <title>Terms and Conditions - Code With Speed</title>
        <meta name="description" content="Code With Speed Terms and Conditions" />
      </Head>

      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>

          <p className="mb-4">
            Welcome to Code With Speed! These Terms and Conditions govern your
            use of our website, codewithspeed.com . By accessing or
            using the Site, you agree to be bound by these Terms and Conditions.
            Please read them carefully before using the Site.
          </p>

          <h2 className="text-2xl font-bold mb-2">Use of the Site</h2>

          <p className="mb-4">
            You may use the Site only for lawful purposes and in accordance with
            these Terms and Conditions. You agree not to use the Site:
          </p>

          <ul className="list-disc ml-6 mb-4">
            <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
            <li>To impersonate or misrepresent your affiliation with any person or entity.</li>
            <li>To interfere with or disrupt the operation of the Site or the servers or networks connected to the Site.</li>
            <li>To attempt to gain unauthorized access to any part of the Site or any other systems or networks.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-2">Content</h2>

          <p className="mb-4">
            All content on the Site, including text, graphics, logos, images, and
            software, is the property of Code With Speed and is protected by
            copyright and other intellectual property laws. You may not use any
            content from the Site without our prior written consent.
          </p>

          <h2 className="text-2xl font-bold mb-2">Disclaimer</h2>

          <p className="mb-4">
            The Site is provided  and without any warranties of any kind,
            either express or implied. We do not warrant that the Site will be
            uninterrupted or error-free, or that any defects will be corrected.
          </p>

          <h2 className="text-2xl font-bold mb-2">Limitation of Liability</h2>

          <p className="mb-4">
            To the fullest extent permitted by law, we will not be liable for
            any damages of any kind arising from or related to your use of the
            Site, including but not limited to direct, indirect, incidental,
            consequential, or punitive damages.
          </p>

          <h2 className="text-2xl font-bold mb-2">Governing Law</h2>

          <p className="mb-4">
            These Terms and Conditions will be governed by and construed in
            accordance with the laws of [Your Jurisdiction], without regard to
            its conflict of law principles.
          </p>

          <h2 className="text-2xl font-bold mb-2">Changes to these Terms</h2>

          <p className="mb-4">
            We may update these Terms and Conditions from time to time. We will
            post any changes on this page.
          </p>

          <h2 className="text-2xl font-bold mb-2">Contact Us</h2>

          <p className="mb-4">
            If you have any questions about these Terms and Conditions, please
            contact us at syedbabarali640@gmail.com
          </p>
        </div>
      </div>
    </>
  );
}
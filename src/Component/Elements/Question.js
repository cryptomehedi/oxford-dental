import React from 'react';

const Question = () => {
    return (
        <div>
            <h2 className=" text-2xl font-semibold mt-6">Q. What is the difference between authorization and authentication?</h2>
            <p><span className='text-xl font-medium'>Ans.</span> Authentication is the process of confirming a user's identity, whereas authorisation is the process of confirming their access rights. To put these procedures into context, when you walk through airport security, you must produce your ID to prove your identity. When you get at the gate, you show your boarding card to the flight attendant, who will approve you to board your flight and grant you entrance to the aircraft. Passwords, one-time pins, biometric information, and other information given or entered by the user are used for authentication. Authorization is controlled by the organization's settings, which it implements and maintains.</p>
            <br />
            <h2 className=" text-2xl font-semibold mt-6">Q. Why are you using firebase? What other options do you have to implement authentication?</h2>
            <p><span className='text-xl font-medium'>Ans.</span> To authenticate users to your project, Firebase Authentication delivers backend services, easy-to-use SDKs, and ready-to-use UI frameworks. It accepts passwords, phone numbers, and prominent federated identity providers like Google, Facebook, and Twitter, among other methods. A user name and password are required for server authentication. Cards, retina scans, voice recognition, and fingerprints are some of the other ways to authenticate.</p>
            <br />
            <h2 className=" text-2xl font-semibold mt-6">Q.  What other services does firebase provide other than authentication?</h2>
            <p><span className='text-xl font-medium'>Ans.</span> 1. Authentication, 2. Cloud Firestore , 3. Cloud Functions, 4. Cloud Messaging, 5. Cloud Storage, 6. Realtime Database</p>
            <br />

        </div>
    );
};

export default Question;
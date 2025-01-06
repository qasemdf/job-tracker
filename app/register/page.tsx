"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "@/node_modules/next/navigation";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/firebase/clientApp";
import Link from "@/node_modules/next/link";
import { BackgroundBeams } from "../helper components/BackgrounBeamSetup";

const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const provider = new GoogleAuthProvider();
  const router = useRouter();

  const handleRegister = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    setMessage(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await sendEmailVerification(user);

      localStorage.setItem(
        "registrationData",
        JSON.stringify({
          firstName,
          lastName,
          gender,
          email,
        })
      );

      setMessage("Registration Successful! Please check your email.");

      setFirstName("");
      setLastName("");
      setGender("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  const handleGoogle = (e) => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...

        router.push("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div className="pt-20 flex justify-center min-h-screen">
      <div className="p-5 rounded-lg max-w-md w-full z-50">
        <h2 className="text-white text-4xl font-medium mb-10">Sign Up</h2>
        <form onSubmit={handleRegister} className="">
          <label
            htmlFor="firstName"
            className="text-sm font-medium block mb-1 text-gray-300"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="border-2 border-[rgba(215,215,215,0.4)] outline-none text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-black placeholder-gray-400 text-white mb-7"
          />

          <label
            htmlFor="lastName"
            className="text-sm font-medium block mb-1 text-gray-300"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className="border-2 border-[rgba(215,215,215,0.4)] outline-none text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-black placeholder-gray-400 text-white mb-7"
          />

          <label
            htmlFor="email"
            className="text-sm font-medium block mb-1 text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border-2 border-[rgba(215,215,215,0.4)] outline-none text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-black placeholder-gray-400 text-white mb-7"
          />

          <label
            htmlFor="password"
            className="text-sm font-medium block mb-1 text-gray-300"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border-2 border-[rgba(215,215,215,0.4)] outline-none text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-black placeholder-gray-400 text-white mb-7"
          />

          <div className="">
            <div className="">
              <label
                htmlFor="confirmPassword"
                className="text-sm font-medium block mb-1 text-gray-300"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="border-2 border-[rgba(215,215,215,0.4)] outline-none text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-black placeholder-gray-400 text-white mb-7"
              />
            </div>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {message && <p className="text-green-500 text-sm">{message}</p>}
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign Up
          </button>
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-white">Or</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <div className="flex gap-5 justify-center">
            <button
              onClick={handleGoogle}
              className="w-[220px] border border-[rgba(215,215,215,0.4)] rounded-lg h-[35px] bg-black text-white"
            >
              Google
            </button>
            <button className="w-[220px] border border-[rgba(215,215,215,0.4)] rounded-lg h-[35px] bg-black text-white">
              Github
            </button>
          </div>
        </form>
        <p className="text-sm font-medium text-white mt-5">
          Already have an account?{" "}
          <Link href={"/login"} className="text-blue-500 hover:underline">
            Log In
          </Link>
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default RegisterPage;

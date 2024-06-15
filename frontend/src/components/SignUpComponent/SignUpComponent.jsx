"use client";

import { useEffect, useState } from "react";
import { client } from "@/src/supabase/client";
import "@/src/styles/Login.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

function SignUpComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [sessionToken, setSessionToken] = useState("");
  const [sessionVerified, setSessionVerified] = useState(false);
  const router = useRouter();

  const getSession = async () => {
    try {
      const { data } = await client.auth.getSession();
      if (data.session) {
        setSessionVerified(true);
      }
      return data.session?.access_token || "";
    } catch (error) {
      return "";
    }
  };

  const handleSignOut = async () => {
    const { error } = await client.auth.signOut();
    location.reload();
  };

  useEffect(() => {
    const fetchSession = async () => {
      const currentSession = await getSession();
      setSessionToken(currentSession);
    };
    fetchSession();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Para Limpiar el error antes de validar
    setError("");

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Validar contraseña
    if (!password) {
      setError("Password cannot be empty.");
      return;
    }

    try {
      const result = await client.auth.signUp({
        email: email,
        password: password,
      });
      if (result.error) {
        setError(result.error.message);
        return;
      }
      router.push("/confirmationEmail");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      {!sessionVerified && (
        <div className="main-login-div flex justify-center">
          <form
            className="login-form bg-red-400 rounded-2xl shadow-2xl"
            onSubmit={handleSubmit}
          >
            <h1 className="login-h1">SIGN UP</h1>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="error-message">{error}</p>}
            <Link href="/login" className="login-a">
              You already have an account? Sign in
            </Link>
            <input
              type="submit"
              value={"Submit"}
              className="login-submit bg-green-200 rounded-xl"
            />
          </form>
        </div>
      )}

      {sessionVerified && (
        <div className="main-login-div flex justify-center">
          <form
            className="login-form bg-red-400 rounded-2xl shadow-2xl"
            onSubmit={handleSubmit}
          >
            <h2 className="login-h2">You are already logged in.</h2>
            <h2 className="login-h2">
              Do you want to <b>log out</b>?
            </h2>
            <input
              type="submit"
              value={"LOG OUT"}
              className="login-submit bg-green-200 rounded-xl"
              onClick={handleSignOut}
            />
          </form>
        </div>
      )}
    </>
  );
}

export default SignUpComponent;

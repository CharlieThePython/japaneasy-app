"use client";

import { useEffect, useState } from "react";
import { client } from "@/src/supabase/client";
import "@/src/styles/Login.css";

function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [sessionToken, setSessionToken] = useState("");
  const [sessionVerified, setSessionVerified] = useState(false);

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

    // Limpiar el error antes de validar
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
      const result = await client.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (result.error) {
        setError(result.error.message);
        return;
      }
      location.reload();
      window.location.href = "/profile";
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="main-login-div flex justify-center">
        {!sessionVerified && (
          <form
            className="login-form bg-red-400 rounded-2xl shadow-2xl"
            onSubmit={handleSubmit}
          >
            <h1 className="login-h1">LOGIN</h1>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="login-input"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="login-input"
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="error-message">{error}</p>}
            <a href="/signUp" className="login-a">
              You don&apos;t have an account? Sign Up now
            </a>
            <a href="/passwordRecovery" className="login-a">
              You don&apos;t remember your password?
            </a>
            <input
              type="submit"
              value={"Submit"}
              className="login-submit bg-green-200 rounded-xl"
            />
          </form>
        )}
        {sessionVerified && (
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
        )}
      </div>
    </>
  );
}

export default LoginComponent;

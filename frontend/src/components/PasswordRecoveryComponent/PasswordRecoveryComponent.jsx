"use client";

import { useEffect, useState } from "react";
import { client } from "@/src/supabase/client";

import "@/src/styles/Login.css";

function PasswordRecoveryComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sessionToken, setSessionToken] = useState("");
  const [sessionVerified, setSessionVerified] = useState(false);

  const getSession = async () => {
    try {
      const { data } = await client.auth.getSession();
      if (data.session) {
        //Para modo dev:
        // console.log("accessToken", data.session.access_token);
        // console.log("supaSession", data.session);
        setSessionVerified(true);
      }
      return data.session?.access_token || "";
    } catch (error) {
      //Para modo dev:
      // console.error("Error getting session:", error);
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
      //Para modo dev:
      // console.log("currentSession", currentSession);
    };

    fetchSession();
  }, []);

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      const result = await client.auth.resetPasswordForEmail({
        email: email,
      });
      //Para modo dev:
      // console.log("result", result);
      location.reload();
      window.location.href = "/profile";
    } catch (error) {
      //Para modo dev:
      // console.error(error);
    }
  };
  return (
    <>
      <div className="main-login-div flex justify-center">
        {!sessionVerified && (
          <form
            className="login-form bg-red-400 rounded-2xl shadow-2xl"
            onSubmit={handlePasswordReset}
          >
            <h1 className="login-h1">PASSWORD RECOVERY</h1>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="login-input"
              onChange={(e) => setEmail(e.target.value)}
            />
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

export default PasswordRecoveryComponent;

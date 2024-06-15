"use client";

import { useEffect, useState } from "react";
import { client } from "@/src/supabase/client";

import "@/src/styles/Login.css";

function UpdateUserComponent() {
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

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    try {
      const result = await client.auth.updateUser({
        password: password,
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
        {sessionVerified && (
          <form
            className="login-form bg-red-400 rounded-2xl shadow-2xl"
            onSubmit={handleUpdatePassword}
          >
            <h1 className="login-h1">ADD A NEW PASSWORD</h1>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="login-input"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="submit"
              value={"Submit"}
              className="login-submit bg-green-200 rounded-xl"
            />
          </form>
        )}
        {!sessionVerified && (
            <p>ERROR: YOU DON&apos;T HAVE PERMISSION</p>
        )}
      </div>
    </>
  );
}

export default UpdateUserComponent;

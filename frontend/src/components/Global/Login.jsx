"use client";

import { useEffect, useState } from "react";
import "@/src/styles/Login.css";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { client } from "@/src/supabase/client";
import samuraiIcon from "@/src/images/profile-icons/samuraiIcon.png";

export const Login = () => {
  const [sessionToken, setSessionToken] = useState("");
  const [sessionVerified, setSessionVerified] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [profileImage, setProfileImage] = useState(samuraiIcon.src);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const getSession = async () => {
    try {
      const { data } = await client.auth.getSession();
      if (data.session) {
        //Para modo dev:
        // console.log("accessToken", data.session.access_token);
        // console.log("supaSession", data.session);
        // console.log("userEmail", data.session.user.email);
        setSessionVerified(true);
        setUserEmail(data.session.user.email);
        const profileResult = await client
          .from("profiles")
          .insert([{ name: userEmail }]);
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

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (sessionVerified) {
        const {
          data: { user },
        } = await client.auth.getUser();
        if (user) {
          const { data, error } = await client
            .from("profiles")
            .select("profile_image_url")
            .eq("id", user.id)
            .single();
          if (data) {
            setProfileImage(data.profile_image_url || samuraiIcon.src);
            setIsVisible(true);
          } else if (error) {
            //Para modo dev:
            // console.error("Error fetching profile image:", error);
          }
        }
        setLoading(false);
      }
    };
    fetchUserProfile();
  }, [sessionVerified]);

  //Para modo dev:
  // console.log("sessionToken", sessionToken);

  return (
    <>
      <div className="social-media">
        {!sessionVerified && (
          <>
            <Link href={"/login"} className="login-box bg-red-400">
              <section className="font-bold">LOG IN</section>
            </Link>
            <Link href={"/signUp"} className="login-box bg-red-400">
              <section className="font-bold">SIGN UP</section>
            </Link>
          </>
        )}
        {sessionVerified && (
          <section
            className="login-box bg-red-400 font-bold"
            onClick={handleSignOut}
          >
            SIGN OUT
          </section>
        )}
      </div>
      <div>
        {sessionVerified && !loading && (
          <Link href="/profile">
            <section className="profile-section rounded-3xl ml-2">
              <div className="flex profile-div">
                <img
                  src={profileImage}
                  width={"25%"}
                  className={`profile-image profile-loading-section ${
                    isVisible ? "visible" : ""
                  }`}
                />
              </div>
            </section>
          </Link>
        )}
      </div>
    </>
  );
};

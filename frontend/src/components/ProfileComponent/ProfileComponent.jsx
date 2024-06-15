"use client";
import { useState, useEffect } from "react";
import { client } from "@/src/supabase/client";
import "@/src/styles/Profile.css";

import samuraiIcon from "@/src/images/profile-icons/samuraiIcon.png";
import ninjaIcon from "@/src/images/profile-icons/ninjaIcon.png";
import knightIcon from "@/src/images/profile-icons/knightIcon.png";
import enemyIcon from "@/src/images/profile-icons/enemyIcon.png";
import ghostIcon from "@/src/images/profile-icons/ghostIcon.png";
import girlIcon from "@/src/images/profile-icons/girlIcon.png";

function ProfileComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(samuraiIcon.src);
  const [userId, setUserId] = useState(null);
  const [sessionToken, setSessionToken] = useState("");
  const [sessionVerified, setSessionVerified] = useState(false);
  const [isSessionChecked, setIsSessionChecked] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const getSession = async () => {
    try {
      const { data } = await client.auth.getSession();
      if (data.session) {
        setSessionVerified(true);
        setUserEmail(data.session.user.email);
      }
      return data.session?.access_token || "";
    } catch (error) {
      return "";
    }
  };

  useEffect(() => {
    const fetchSession = async () => {
      const currentSession = await getSession();
      setSessionToken(currentSession);
      setIsSessionChecked(true);
      setIsVisible(true);
    };

    fetchSession();
  }, []);

  useEffect(() => {
    if (isSessionChecked && !sessionToken) {
      window.location.href = "/";
    }
  }, [isSessionChecked, sessionToken]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const { data: { user } } = await client.auth.getUser();
      if (user) {
        setUserId(user.id);
        const { data, error } = await client
          .from("profiles")
          .select("profile_image_url")
          .eq("id", user.id)
          .single();
        if (data) {
          preLoadImage(data.profile_image_url || samuraiIcon.src);
        } else if (error) {
          // Handle error
        }
      }
    };
    fetchUserProfile();
  }, []);

  const preLoadImage = (src) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setProfileImage(src);
      setIsVisible(true);
    };
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleImageClick = async (imageSrc) => {
    handleModalClose();
    if (userId) {
      const { error } = await client
        .from("profiles")
        .upsert(
          { id: userId, profile_image_url: imageSrc },
          { onConflict: "id" }
        );
      if (!error) {
        setIsVisible(false); // Ocultamos el contenido hasta que se cargue la nueva imagen
        preLoadImage(imageSrc);
      } else {
        // Handle error
      }
    }
  };

  return (
    <div className="profile-page-div">
      <section className={`bg-red-500 rounded-2xl profile-page-section ${isVisible ? 'visible' : ''}`}>
        <section className="profile-page-image-section">
          <img
            className="profile-page-image rounded-full"
            src={profileImage}
            alt="Profile"
            width="25%"
          />
        </section>
        <section className="profile-page-button-section">
          <button onClick={handleModalOpen}>Change Photo</button>
        </section>
        <section className="profile-page-text-section">
          <h1 className="profile-h1">EMAIL</h1>
          <h1 className="user-email">{userEmail}</h1>
        </section>
      </section>

      {isModalOpen && (
        <div className="modal-overlay" onClick={handleModalClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-button" onClick={handleModalClose}>
              X
            </button>
            <div className="image-container">
              <img
                src={samuraiIcon.src}
                className="modal-image"
                onMouseDown={() => handleImageClick(samuraiIcon.src)}
              />
              <img
                src={knightIcon.src}
                className="modal-image"
                onMouseDown={() => handleImageClick(knightIcon.src)}
              />
              <img
                src={ninjaIcon.src}
                className="modal-image"
                onMouseDown={() => handleImageClick(ninjaIcon.src)}
              />
              <img
                src={enemyIcon.src}
                className="modal-image"
                onClick={() => handleImageClick(enemyIcon.src)}
              />
              <img
                src={ghostIcon.src}
                className="modal-image"
                onClick={() => handleImageClick(ghostIcon.src)}
              />
              <img
                src={girlIcon.src}
                className="modal-image"
                onClick={() => handleImageClick(girlIcon.src)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileComponent;

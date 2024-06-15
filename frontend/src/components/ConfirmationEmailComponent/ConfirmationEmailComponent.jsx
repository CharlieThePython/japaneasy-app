"use client";

import { useState } from "react";
import { client } from "@/src/supabase/client";

import "@/src/styles/Login.css";

function ConfirmationEmailComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await client.auth.signUp({
        email: email,
        password: password,
      });
      if (result.user) {
        // Insertar perfil después del registro exitoso
        const profileResult = await client
          .from('profiles')
          .insert([{ name: email }]);
        
        // Mostrar mensaje de éxito
        setSuccessMessage("Sign up successful! You can now log in.");
        
        // Limpiar los campos de entrada después de un registro exitoso
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      // Manejar errores
      console.error(error);
    }
  };

  return (
    <>
      <div className="main-login-div flex justify-center bg-red-400 p-20 m-36 rounded-2xl">
      <h1> <b>CONGRATULATIONS!&nbsp;</b></h1>
      <h2>Hey there! Just a heads up – after signing up, please check your email. It might take up to 10 minutes for the verification email to arrive. We'll see you back here soon!</h2>
      </div>
    </>
  );
}

export default ConfirmationEmailComponent;

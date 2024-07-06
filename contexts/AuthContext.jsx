import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../utilities/supabase";

// Create the context
const AuthContext = createContext();

// Provider Component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
    };

    checkSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (user) fetchUserProfile(user.id);
  }, [user]);

  // Sign Up function
  const signUp = async function (
    email,
    password,
    nationality,
    dob,
    phoneNumber,
    gender
  ) {
    const response = await supabase.auth.signUp({
      email,
      password,
    });

    const { user, session, error } = response.data;

    if (error) {
      console.error("Error signing up:", error.message);
      throw error;
    }

    if (user) {
      await createUserProfile(user.id, nationality, dob, phoneNumber, gender);
      setUser(user);
      console.log(user);
    } else if (session) {
      await createUserProfile(
        session.user.id,
        nationality,
        dob,
        phoneNumber,
        gender
      );
      setUser(session.user);
    } else {
      console.error("No user or session found in the response");
      throw new Error("No user or session found in the response");
    }
  };

  // Create User profile function
  const createUserProfile = async function (
    userId,
    nationality,
    dob,
    phoneNumber,
    gender
  ) {
    const { data, error } = await supabase.from("user_profiles").insert([
      {
        user_id: userId,
        nationality,
        dob,
        phone_number: phoneNumber,
        gender,
      },
    ]);

    if (error) {
      console.error("Error creating user profile:", error);
      throw error;
    }

    return data;
  };

  const signIn = async function (email, password) {
    const { user, error } = await supabase.auth.signIn({ email, password });
    if (error) throw error;
    setUser(user);
  };

  const fetchUserProfile = async function (userId) {
    try {
      const { data, error } = await supabase
        .from("user_profiles")
        .select("*")
        .eq("user_id", userId)
        .single();

      if (error) {
        console.error("Error fetching user profiles", error);
        throw new Error(error.message);
      }

      if (data) {
        setUserProfile(data);
      } else {
        console.log("No user profile found for user ID:", userId);
        setUserProfile(null);
      }
    } catch (err) {
      console.error("Exception fetching user profile:", err);
    }
  };

  const signOut = async function () {
    await supabase.auth.signOut();
    setUser(null);
    setUserProfile(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, userProfile, signIn, signOut, signUp }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

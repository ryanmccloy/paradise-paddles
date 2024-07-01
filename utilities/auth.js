import { createUserProfile } from "./profile";
import { supabase } from "./supabase";

export async function signUp(
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
  } else if (session) {
    await createUserProfile(
      session.user.id,
      nationality,
      dob,
      phoneNumber,
      gender
    );
  } else {
    console.error("No user or session found in the response");
    throw new Error("No user or session found in the response");
  }
}

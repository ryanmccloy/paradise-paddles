import { supabase } from "./supabase";

export async function createUserProfile(
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
}

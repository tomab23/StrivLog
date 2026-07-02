import { supabase } from "@/lib/supabaseClient";
import type Activity from "@/models/Activity";

export interface ActivityData {
  date: string
  hour: string
  sport: string
  distance: number
  duration: number
  calories: number
  note: string | null
}

// ⬇️ Récupérer les données de la table "activity" pour l'utilisateur connecté
export const getActivitys = async (userId: string) : Promise<Activity[]> => {
  const { data, error } = await supabase
    .from("activity")
    .select("*")
    .eq("user_id", userId)
    // .order('date', { ascending: false })
  if (error) throw new Error(error.message);
  return data;
};

// 1️⃣ Récupérer une activité par son id
export const getActivityById = async (id: string, userId: string) : Promise<Activity | null> => {
  const { data, error } = await supabase
    .from("activity")
    .select("*")
    .eq("id", id)
    .eq("user_id", userId)
    .maybeSingle();

  if (error) throw error;
  return data;
};

// ❌ Supprimer un acitivité par id
export const deleteActivityById = async (id: string, userId: string) => {
  const { error } = await supabase
    .from("activity")
    .delete()
    .eq("id", id)
    .eq("user_id", userId);
  if (error) throw new Error(error.message);
};

// 🆕 Insérer un nouvel enregistrement dans la table "activity"
export const insertActivity = async (
  userId: string,
  activity: ActivityData
) => {
  const { error } = await supabase
    .from("activity")
    .insert([{ user_id: userId, ...activity }]);
  if (error) throw new Error(error.message);
};

// 🔄 Modifier des informations d'une activité par id
export const updateActivity = async (
  id: string,
  userId: string,
  activity: ActivityData
) => {
  const { error } = await supabase
    .from("activity")
    .update(activity)
    .eq("id", id)
    .eq("user_id", userId);
  // if (error) throw new Error(error.message);
    if (error) throw error;
};
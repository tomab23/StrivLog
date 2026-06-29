import { useCallback, useEffect, useState } from "react"
import { useAuth } from "@/context/AuthContext"
import { parseSupabaseError, type ParsedError } from "@/utils/SupabaseError"
import type Activity from "@/models/Activity"
import { deleteActivityById, getActivityById, getActivitys, insertActivity, updateActivity, type ActivityData } from "@/services/ActivityService"


export const useActivity = () => {
  const { user } = useAuth()
  const [sessions, setSessions] = useState<Activity[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<ParsedError | null>(null)



//  récupere toutes les activités de l'utilisateur
const fetchActivitys = useCallback(async () => {
  if (!user) return
  setLoading(true)
  try {
    const data = await getActivitys(user.id)
    setSessions(data)
  } catch (err) {
    setError(parseSupabaseError(err))
  } finally {
    setLoading(false)
  }
}, [user])



// ajouter une activité
const addActivity = async (
    activity: ActivityData
  ) => { 
  if (!user) return
  setLoading(true)
  try {
    await insertActivity(user.id, activity)
    await fetchActivitys()
  } catch (err) {
    setError(parseSupabaseError(err))
  } finally {
    setLoading(false)
  }
  }

//  mettre a jour une activité
  const editActivity = useCallback(
    async (id: string, 
        activity: ActivityData
) => {
      if (!user) return
  setLoading(true)
  try {
    await updateActivity(id,user.id, activity)
    await fetchActivitys()
  } catch (err) {
    setError(parseSupabaseError(err))
  } finally {
    setLoading(false)
  }
    },
    [user, fetchActivitys]
  )

//   supprimer une activité
  const removeActivity = async (id: string) => {
    if (!user) return
    await deleteActivityById(id, user.id)
    setSessions((prev) => prev.filter((c) => c.id !== id))
  }


//   Récupérer une activité par id
const fetchActivityById = useCallback(async (id: string): Promise<Activity | null> => {
  if (!user) return null;
  try {
    return await getActivityById(id, user.id);
  } catch (err) {
    const message = parseSupabaseError(err);
    setError(message); // ← string lisible pour l'UI
    return null;
  }
}, [user]);



// Effect pour charger les données initiales
  useEffect(() => {
    const load = async () => {
      if (user) {
        await fetchActivitys()
      } else {
        setSessions([])
        // setError(null)
      }
    }
    load()
  }, [user, fetchActivitys])



  return {
    sessions,
    loading,
    fetchActivitys,
    fetchActivityById,
    removeActivity,
    addActivity,
    editActivity,
    error,


  }
}
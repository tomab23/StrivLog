import {
  Bike,
  Footprints,
  SportShoe
} from "lucide-react"

export const SportList = {
  running: {
    label: "Course à pied",
    icon: SportShoe,
  },
  walking: {
    label: "Marche",
    icon: Footprints,
  },
  cycling: {
    label: "Vélo",
    icon: Bike,
  },
  stationary_bike: {
    label: "Vélo d'appartement",
    icon: Bike,
  },
} as const
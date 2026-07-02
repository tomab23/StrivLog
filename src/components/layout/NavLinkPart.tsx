import { ChartPie, HomeIcon, NotebookText, type LucideIcon } from "lucide-react"
import { NavLink } from "react-router-dom"

type Props = {
  page: string
}

const pages: Record<string, { name: string; icon: LucideIcon }> = {
  home: {
    name: "Accueil",
    icon: HomeIcon,
  },
  diary: {
    name: "Journal",
    icon: NotebookText,
  },
  stats: {
    name: "Stats",
    icon: ChartPie,
  },
}

const NavLinkPart = ({ page }: Props) => {
  const { name, icon: Icon } = pages[page]

  return (
    <NavLink
      to={`/${page}`}
      className={({ isActive }) =>
        `flex items-center gap-2 rounded-md px-3 py-2 font-semibold transition-colors max-sm:gap-1 ${
          isActive
            ? "bg-primary text-background hover:bg-primary/90"
            : "hover:bg-accent"
        }`
      }
    >
      <Icon className="h-6 w-6 max-sm:h-4 max-sm:w-4" />
      <p className="max-sm:hidden">{name}</p>
    </NavLink>
  )
}

export default NavLinkPart

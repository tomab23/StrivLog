import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { EllipsisVertical, Pencil, Trash2 } from "lucide-react"

interface ActivityMenuProps {
  onEdit?: () => void
  onDelete?: () => void
}

const ActivityMenu = ({ onEdit, onDelete }: ActivityMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md hover:bg-accent">
          <EllipsisVertical className="h-4 w-4" />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={onEdit}>
          <Pencil className="mr-2 h-4 w-4" />
          Modifier
        </DropdownMenuItem>

        <Separator className={"my-1"} />

        <DropdownMenuItem onClick={onDelete} variant="destructive">
          <Trash2 className="mr-2 h-4 w-4" />
          Supprimer
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ActivityMenu

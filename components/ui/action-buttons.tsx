"use cliente"
import { Button } from "./button"
import { Pencil, Trash2 } from "lucide-react"

interface ActionButtonsProps {
  onEdit: () => void
  onDelete: () => void
}

export function ActionButtons({ onEdit, onDelete }: ActionButtonsProps) {
  return (
    <div className="flex gap-2">
      <Button variant="ghost" size="icon" onClick={onEdit} className="text-red-600 hover:text-red-800 hover:bg-red-50">
        <Pencil size={18} />
      </Button>
      <Button variant="ghost" size="icon" onClick={onDelete} className="text-red-600 hover:text-red-800 hover:bg-red-50">
        <Trash2 size={18} />
      </Button>
    </div>
  )
}

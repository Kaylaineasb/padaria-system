"use cliente"
import { Button } from "./button"
import { Check, X } from "lucide-react"

interface ActionButtonsProps {
  onConfirm: () => void
  onCancel: () => void
}

export function ActionButtonsProducao({ onConfirm, onCancel }: ActionButtonsProps) {
  return (
    <div className="flex gap-2">
      <Button variant="ghost" size="icon" onClick={onConfirm} className="text-red-600 hover:text-red-800 hover:bg-red-50">
        <Check size={18} />
      </Button>
      <Button variant="ghost" size="icon" onClick={onCancel} className="text-red-600 hover:text-red-800 hover:bg-red-50">
        <X size={18} />
      </Button>
    </div>
  )
}

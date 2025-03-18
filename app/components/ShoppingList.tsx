import { Checkbox } from "./ui/checkbox"

export default function ShoppingList({ items }) {
  return (
    <div className="grid gap-2">
      {items.map(item => (
        <div className="flex items-center space-x-2">
          <Checkbox id={item.id} value={item.id} checked={item.completed} />
          <label
            htmlFor={item.id}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {item.title}
          </label>
        </div>
      ))}
    </div>
  )
}

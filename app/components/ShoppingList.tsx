import { Checkbox } from "./ui/checkbox"

export default function ShoppingList() {
  return (
    <div className="grid gap-2">
      <div className="flex items-center space-x-2">
        <Checkbox id="parippu" />
        <label
          htmlFor="parippu"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          React router - framework
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="parippu" />
        <label
          htmlFor="parippu"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Tailwind CSS - utility first CSS
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="parippu" />
        <label
          htmlFor="parippu"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Shadcn component library
        </label>
      </div>
    </div>
  )
}

import {
  Command,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

export default function ShoppingForm() {
  return (
    <div>
      <Command>
        <CommandList className="w-full command-list">
          <CommandItem>
            <span>Haal</span>
          </CommandItem>
          <CommandItem>
            <span>Parippu</span>
          </CommandItem>
        </CommandList>
        <CommandInput placeholder="Add your shopping item" />
      </Command>
    </div>
  )
}


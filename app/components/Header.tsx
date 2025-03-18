import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

export default function Header() {
  return (
    <div className="flex justify-between items-center py-4">
      <h1>SHOPPING LIST</h1>
      <div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}

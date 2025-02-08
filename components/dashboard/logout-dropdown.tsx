import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog"
// import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "@/components/ui/alert"


const LogoutDropdown = () => {

    // const handleLogout = (e:any) => {
    //     console.log("hi")
    // }

    return (
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="h-9 w-9">
          <AvatarImage src="" alt="@shadcn" />
          <AvatarFallback>MK</AvatarFallback>
          <span className="sr-only">Toggle user menu</span>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>My Account</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
            <div className="text-destructive">Logout</div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    )
}


export default LogoutDropdown
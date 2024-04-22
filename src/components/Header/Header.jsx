import { Logo } from "./Logo/Logo"
import { Random } from "./RandomChar/Random"
import "./Header.scss"


export const Header = () => {
    return (
        <div className="Header">
            <Logo/>
            <Random/>
        </div>
    )
}
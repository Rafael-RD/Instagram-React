import Posts from "./Posts";
import SideBar from "./SideBar";
import Stories from "./Stories";

export default function Corpo() {

    return (
        <div class="corpo">
            <div class="esquerda">
                <Stories />
                <Posts />
            </div>
            <SideBar />
        </div>
    )
}
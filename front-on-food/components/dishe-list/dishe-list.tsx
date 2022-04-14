import { Dishe } from "@/components";
import Styles from "./dishe-list.module.css";

export function DisheList(){
    return (
        <div className={Styles.list}>
            <Dishe />
        </div>
    )
}
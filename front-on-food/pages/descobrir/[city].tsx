import { useRouter } from "next/router";
import { PageTemplate, DishList } from "@/components";
import Styles from "../../styles/discovery.module.css"


export default function Descobrir(){
    const router = useRouter();
    const city = router.query?.city as string;
    
    return (
        <PageTemplate>
            <div className={Styles.content}>
                <h1>Opções na região de {city}</h1>
                <p>Encontramos x opções</p>
                <div className={Styles.items}>
                    <DishList citySlug={city}/>
                </div>
            </div>
        </PageTemplate>
    )
}
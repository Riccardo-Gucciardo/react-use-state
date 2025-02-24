import Languages from "./languages";
import Button from "./buttons/Button"
import Card from "./Card";

import { useState } from "react";

const Main = ()=> {
    const [selectedanguages,setSelectedLanguages] = useState(null)

    const renderLanguage = () => Languages.map((Language)=> {
        const active = selectedanguages === Language
        return(
            <Button key={Language.id} title ={Language.title} isActive={active} onSelect={() => setSelectedLanguages(Language)}/>
        )
    })

    const renderSelectedlanguages = () => {
        if(!selectedanguages) return <h3>nessun linguaggio selezionato</h3>

        const {title,description} = selectedanguages
        return(
            <Card title={title} description={description}/>
        )
    }

    return(
        <main className="container">
            <div className="mb-4">
                {renderLanguage()}
                <div>
                    {renderSelectedlanguages()}
                </div>
            </div>
        </main>
    )
}

export default Main
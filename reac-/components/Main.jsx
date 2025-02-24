import Languages from "./languages";
import Button from "./buttons/Button"
import Card from "./Card";

import { useState } from "react";

const Main = ()=> {
    const {selectedanguages,setSelectedLanguages} = useState(null)

    const renderLanguage = () => Languages.map((Languages)=> {
        const active = selectedanguages === Languages
        return(
            <Button key={Languages.id} title ={Languages.title} isActive={active} onSelect={() => setSelectedLanguages(Languages)}/>
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
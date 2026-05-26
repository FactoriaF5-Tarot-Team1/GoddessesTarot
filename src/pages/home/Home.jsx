import React from "react"
import Fan from "../../components/fan/Fan"
import TurnIndicator from "../../components/turn-indicator/TurnIndicator"
import useFanCards from "../../hooks/useFanCards"

function Home() {
    const { shuffledIds, selectCard, selectedCards, currentTurn } = useFanCards()

    return (
        <>
            <Fan
                shuffledIds={shuffledIds}
                selectCard={selectCard}
                selectedCards={selectedCards}
            />
            <TurnIndicator currentTurn={currentTurn} />
        </>
    )
}

export default Home
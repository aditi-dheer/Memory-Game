import "./SingleCard.css"

export default function SingleCard({ card, handleChoice, flipped }) {

    const handleClick = () => {
        handleChoice(card)
    }

    return (
        <div className="card">
            <div className={flipped ? "flipped": ""}>
                <img className="front" src={card.src} alt="front of the card" />
                <img className="back" src="/assets/cover.png" onClick={handleClick} alt="back of the card" />
            </div>
        </div>
    )
}
 
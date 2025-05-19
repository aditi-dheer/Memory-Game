import "./SingleCard.css"

export default function SingleCard({ card, handleChoice }) {

    const handleClick = () => {
        handleChoice(card)
    }

    return (
        <div className="card">
            <div>
                <img className="front" src={card.src} alt="front of the card" />
                <img className="back" src="/assets/cover.png" onClick={handleClick} alt="back of the card" />
            </div>
        </div>
    )
}
 
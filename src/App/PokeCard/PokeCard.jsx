import './PokeCard.css';
// eslint-disable-next-line react/prop-types
function PokeCard ({ stats, name, weight, moves, id, pokeTypes, images, isLoaded, onCardClick, isActive}) {

    function handleClick() {
        onCardClick(stats, name, weight, moves, pokeTypes, images, id);
    }

       return isLoaded ? (
        <div className={isActive ? 'card active' : 'card'} onClick={handleClick}>
            <img src={images} alt={name}/>
            <h2>{name.charAt(0).toUpperCase() + name.slice(1)}{isActive ? ' #' + id : null}</h2>
            {!isActive && (
                <div className="types">
                {pokeTypes.map(type => {
                    return <button className={type} key={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</button>
                })}
            </div>
            )}
            {isActive && (
                <table border="1">
                    <tbody>
                    <tr>
                        <th>Type</th>
                        <td>{pokeTypes.map(type => type.charAt(0).toUpperCase() + type.slice(1) + ' ')}</td>
                    </tr>
                    <tr>
                        <th>HP</th>
                        <td>{stats[0]['base_stat']}</td>
                    </tr>
                    <tr>
                        <th>Attack</th>
                        <td>{stats[1]['base_stat']}</td>
                    </tr>
                    <tr>
                        <th>Defence</th>
                        <td>{stats[2]['base_stat']}</td>
                    </tr>
                    <tr>
                        <th>SP Attack</th>
                        <td>{stats[3]['base_stat']}</td>
                    </tr>
                    <tr>
                        <th>SP Defence</th>
                        <td>{stats[4]['base_stat']}</td>
                    </tr>
                    <tr>
                        <th>Speed</th>
                        <td>{stats[5]['base_stat']}</td>
                    </tr>
                    <tr>
                        <th>Weight</th>
                        <td>{weight}</td>
                    </tr>
                    <tr>
                        <th>Total Moves</th>
                        <td>{moves}</td>
                    </tr>
                    </tbody>
                </table>
            )}


        </div>
    )
    : null
}

export default PokeCard;
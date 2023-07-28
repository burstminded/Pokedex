import './PokeCard.css'
function PokeCard () {
    return (
        <div className="card">
            <img src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-blue-version/8/89/Pikachu.jpg" alt=""/>
            <h2>Pokemon </h2>
            <div className="types">
                <button className="electric">Electric</button>
            </div>
            <table border="1">
               <tbody>
               <tr>
                   <th>Type</th>
                   <td>Electric</td>
               </tr>
               <tr>
                   <th>Attack</th>
                   <td>52</td>
               </tr>
               <tr>
                   <th>Defence</th>
                   <td>43</td>
               </tr>
               <tr>
                   <th>SP Attack</th>
                   <td>45</td>
               </tr>
               <tr>
                   <th>SP Defence</th>
                   <td>45</td>
               </tr>
               <tr>
                   <th>Speed</th>
                   <td>65</td>
               </tr>
               <tr>
                   <th>Speed</th>
                   <td>45</td>
               </tr>
               <tr>
                   <th>Weight</th>
                   <td>45</td>
               </tr>
               <tr>
                   <th>Total moves</th>
                   <td>65</td>
               </tr>
               </tbody>
            </table>
        </div>
    )
}

export default PokeCard;
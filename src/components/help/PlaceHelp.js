import React from 'react'

const PlaceHelp = () => {
    return <div>
        <h1 className='help-title'>Place Militias</h1>
        <h3 className='help-header'>About</h3>
        <p className='help-pg'>You can place militias in any neighborhood under your control. The number of militias you place at the beginning of your turn is determined by how many neighborhoods and zones you control.</p>
        <p className='help-pg'>Divide the number of neighborhoods you control by 3 and round down the result. Then, add the militia bonuses for any zones under your control (see Zones tab for each zone's bonus). You can increase this number by trading in a set of 3 cards (see Cards tab for more info).</p>
        <h3 className='help-header'>Strategy</h3>
        <p className='help-pg'>Every neighborhood you control must have at least 1 militia. Therefore, you can only attack from neighborhoods with 2 or more militias.</p>
        <p className='help-pg'>You can attack neighborhoods with up to 3 militias. If you conquer a neighborhood, you are required to move at least as many militias into the conquered neighborhoods as you sent into battle.</p>
        <p className='help-pg'>At the end of your turn, you will have the option to fortify one neighborhood by moving militias from one adjacent neighborhood.</p>
    </div>
}

export default PlaceHelp
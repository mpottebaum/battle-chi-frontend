import React from 'react'

const AttackHelp = () => {
    return <div>
        <h1>Attack</h1>
        <h3>About</h3>
        <p>You can attack as many neighborhoods during your turn as you are able to.</p>
        <p>Once you are done attacking, click the 'End Attack' button in the top-right corner.</p>
        <p>Every neighborhood you control must have at least 1 militia.</p>
        <p>Therefore, you can only attack from neighborhoods with 2 or more militias.</p>
        <p>You can send up to 3 militias into battle.</p>
        <p>Your opponent can defend their neighborhood with up to 2 militias.</p>
        <p>You and your opponent will each roll one die per militia sent into battle.</p>
        <p>Battle results are determined by comparing each player's highest dice results. In the case of a tie, the defender wins.</p>
        <p>If the attacker rolls 3 dice and the defender rolls 1, the attacker's highest die will be compared to the defender's single die. In this scenario, the loser stands to lose 1 militia.</p>
        <p>If the attacker rolls 2 dice and the defender rolls 2, the attacker's highest die will be compared to the defender's highest die, and the loser loses 1 militia. Then, each player's second-highest die will be compared, and the loser of this fight loses 1 militia.</p>
        <p>If you conquer a neighborhood, you are required to move at least as many militias into the conquered neighborhoods as you sent into battle.</p>
        <p>If you conquer 1 or more neighborhoods, you will receive a card at the end of your turn (see Cards tab for more info).</p>
        <h3>Strategy</h3>
        <p>After you are done attacking, you will only be able to fortify one neighborhood by moving militias from one adjacent neighborhood.</p>
        <p>If you have 4 militias in a neighborhood and conquer your opponent's neighborhood by sending 3 militias into battle, you will be required to move those 3 militias to the conquered neighborhood, leaving only 1 militia in the attacking neighborhood.</p>
        <p>If your opponent controls any zones, you only need to conquer one neighborhood in that zone to remove their zone bonus (see Zones tab for more info).</p>
    </div>
}

export default AttackHelp
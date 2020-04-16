<?php

namespace PokerHand;

class PokerHand
{
	public $cards, $values, $suites, $sum; 
	
    public function __construct($hand){
	    $this->cards = explode(" ", $hand);
	    
	    foreach($this->cards as $card){
		    $this->values[] = strlen($card) < 3 ? substr($card, 0, 1) : 10;		    
		    $this->suites[] = substr($card, -1);
	    }
	    
	    for ($i = 0; $i < 5; $i++){
			    switch($this->values[$i]){
				    case 'J':
				    	$this->values[$i] = 11;
				    	break;
				    case 'Q':
				    	$this->values[$i] = 12;
				    	break;
				    case 'K':
				    	$this->values[$i] = 13;
				    	break;
				    case 'A':
				    	array_sum($this->values) == 14 ? $this->values[$i] = 1 : $this->values[$i] = 14;
				    	break;
			}
		}
		sort($this->values);
		$this->sum = array_sum($this->values);
    }
    
    private function getPairs(){
	    $pairs_count = array_values(array_count_values($this->values));
	    sort($pairs_count);
	    switch($pairs_count){
		    case [1,1,1,2]:
		    	return "One Pair";
		    case [1,2,2]:
		    	return "Two Pair";
		    case [2,3]:
		    	return "Full House";
		    case [1,4]:
		    	return "Four of a Kind";
		    default:
		    	return false;				 
	    }
    }
    
    private function getSuite(){
	    count(array_count_values($this->suites)) > 1 ? $r = false : $r = true;
	    return $r;
    }
    
    private function getStraight(){
	    for($i = 0; $i < 4; $i++){
		    if ($this->values[$i] + 1 == $this->values[$i + 1]){
			   	if ($i == 3){
				   	$r = true;
			   	} 
		    } else {
			    $r = false;
			    break;
		    }
	    }
	    return $r;
    }

    public function getRank()
    {
        // TODO: Implement poker hand ranking
        
        if ($this->getPairs()){
	        return $this->getPairs();
        }
       	if ($this->getSuite()){
	       	if ($this->getStraight()){
		       	if ($this->sum == 60){
			       	return "Royal Flush"; 
		       	} else {
			       	return "Straight Flush";
		       	}
	       	} else {
		       	return "Flush";
	       	} 
	    } else if ($this->getStraight()){
		       	return "Straight";
       	} else {
	       	return "High Card";
       	}		
    } 
}

?>

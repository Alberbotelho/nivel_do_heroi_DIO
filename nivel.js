let name = 'Alber';
let xp = 5400;
let nivel;
 
	if (xp <= 1000)
		{nivel = 'Ferro';} 
    
    else if (xp >= 1.001 && xp <= 2000) 
    	{nivel = 'Bronze';} 

    else if (xp >= 2.001 && xp <= 5000) 
    	{nivel = 'Prata';} 
    
    else if (xp >= 5.001 && xp <= 7000) 
    	{nivel = 'Ouro';} 
    
    else if (xp >= 7.001 && xp <= 8000) 
    	{nivel = 'Platina Diamante';} 
    
    else if (xp >= 8.001 && xp <= 9000) 
    	{nivel = 'Ascendente';} 
    
    else if (xp >= 9.001 && xp <= 10000) 
    	{nivel = 'Imortal';} 
    
    else if (xp > 10000) 
    	{nivel = 'Radiante';}

console.log("O Heroi de nome",name, "está no nível de", nivel)

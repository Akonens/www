kods ir �eit

if(true) { kods kur� tiks izpild�ts }
if(false) { kods kur� netiks izpild�ts }

if(5 < 8) { kods kur� tiks izpild�ts }
if(5 > 8) { kods kur� netiks izpild�ts }

if(5 == 5) { kods kur� tiks izpild�ts }
if(5 == 8) { kods kur� netiks izpild�ts }

let isAdmin = function() {
	return true
}

if(isAdmin()) { kods kur� tiks izpild�ts }
if(isAdmin()) { kods kur� tiks izpild�ts }

let userAge = function() {
  return 15;
}

// let userAge = () => 15

if(userAge() < 18) {
	// die
}

let isAdult = function() {
	return userAge() > 17
}

if( ! isAdult() ) {
// 	die
}

if(!false) { ... }



t�l�kais kods


let isAdmin = () => {
	return true;
}

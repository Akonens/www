kods ir ðeit

if(true) { kods kurð tiks izpildîts }
if(false) { kods kurð netiks izpildîts }

if(5 < 8) { kods kurð tiks izpildîts }
if(5 > 8) { kods kurð netiks izpildîts }

if(5 == 5) { kods kurð tiks izpildîts }
if(5 == 8) { kods kurð netiks izpildîts }

let isAdmin = function() {
	return true
}

if(isAdmin()) { kods kurð tiks izpildîts }
if(isAdmin()) { kods kurð tiks izpildîts }

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



tâlâkais kods


let isAdmin = () => {
	return true;
}

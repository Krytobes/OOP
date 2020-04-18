//Zadanie 4
class MyString {
	reverse(str){
		return str.split('').reverse().join('');
	}
	ucFirst(str){
		let stroka = str.split('');
		stroka[0] = stroka[0].toUpperCase();
		str = stroka.join('');
		return str;
	}
	ucWords(str){
		return str.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
	}
}

var str = new MyString;

console.log(str.reverse('abcde')); 
console.log(str.ucFirst('abcde')); 
console.log(str.ucWords('abcde abcde abcde')); 

//Zadanie 5 
class Validator{
	isEmail(str){
		if(str.match(/[^\s]+@+[^\s\.]+\.+[a-z]+/))
			return true;
		else
			return false;
	}
	isDomain(str){
		if (str.match(/^[0-9 a-z]+\.[a-z]{2,}$/g))
			return true;
		 else 
			return false;
	}
	isDate(str){
		if (str.match(/^(0?[1-9]|[12][0-9]|3[01])\.(0?[1-9]|1[012])\.\d{4}$/))
			return true;
		else
			return false;
	}
	isPhone(str){
		if (str.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/)) //  /[+]? +[7] +[(] +[0-9]{3} +[)] +[0-9]{3}-[0-9]{2}-[0-9]{2}$/
			return true;
		else
			return false;
	}
}

var validator = new Validator();

console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+7(913)817-68-92')); //
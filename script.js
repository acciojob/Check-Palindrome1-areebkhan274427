// complete the given function

function palindrome(str){
	let temp="";
	for(let i=0;i<str.length;i++){
		if(str.charAt(i)>='a' && str.charAt(i)<='z' || str.charAt(i)>='A' && str.charAt(i)<='Z')
			temp+=str.charAt(i).toLowerCase();
	}
	let arr=temp.split("");
	let revArr=arr.reverse();
	let joinArr=arr.join("");
	if(temp===joinArr){
		return true;
	}
	return false;
}
module.exports = palindrome

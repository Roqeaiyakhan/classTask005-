function calculateAge() {
    const birthdate = new Date(document.getElementById("birthdate").value);
    const today = new Date();
    
    var years = today.getFullYear() - birthdate.getFullYear();
    var months = today.getMonth() - birthdate.getMonth();
    var day =  today.getDay() - birthdate.getDay();

}
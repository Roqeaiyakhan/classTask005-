function calAge() {
    var birthdate = new Date(document.getElementById("birthdate").value);
    var today = new Date();
    
    var years = today.getFullYear() - birthdate.getFullYear();
    var months = today.getMonth() - birthdate.getMonth();
    var day =  today.getDay() - birthdate.getDay();
    
    if (day < 0) {
        months--;
        day += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("day").textContent = day;
    
    }

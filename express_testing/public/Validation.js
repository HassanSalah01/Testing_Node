//validate a single input using id that must contain a number
const validateNum = (id) => {
    const ele = document.getElementById(id).value;
    if (ele == null || ele == "" || ele == undefined || isNaN(parseInt(ele))) {
        return false;
    } else {
        return true;
    }
};
// validate a single input using id That can be text or number
const validateText = (id) => {
    const ele = document.getElementById(id).value;
    if (ele == null || ele == "" || ele == undefined) {
        return false;
    } else {
        return true;
    }
};

// validate all input field to Sum the total using Numb
const validateNumberField = ()=>{
    return validateNum("price") && validateNum("tax") && validateNum("discount");
}

// validate all text field input To check 
const validateTextField = ()=>{
    return validateText("title") &&validateNum("count") &&validateText("category") ;
}

// validate all input (text and numbers) to submit the form
const validateForm=()=>{
    return validateNumberField() && validateTextField();
}
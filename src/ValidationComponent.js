import React from 'react';

const minLength=5;
const maxLength=10;
let lengthValidation='';
const validationComponent = props => {
const actualLength=props.changed;
//alert(actualLength);
    if(actualLength < minLength){
        lengthValidation='Text too short';

    }else if(actualLength > maxLength){

        lengthValidation='Text too long';
    }
    else{
        lengthValidation='Text is perfect';
       }

    return (


    <div>
        <p>{lengthValidation}</p>
    </div>
    )

}

export default validationComponent;
$(document).ready(function (){
    $("button").on("click", loanDecision);

});

//Does client make a salary higher than $40,000?

var salary;
var creditScore;
var monthsAtJob;
var happyDecision = "Loan application approved";
var sadDecision = "Loan application denied";

function loanDecision()
{
    salary = parseInt($("#salary").val());
    creditScore = parseInt($("#creditScore").val());
    monthsAtJob = parseInt($("#monthsAtJob").val());

    //Check for valid inputs

    if (creditScore > 850) {
        $("#creditScore").val(850);
        creditScore = 850;
    }
    if (creditScore < 300) {
        $("#creditScore").val(300);
        creditScore = 300;
    }

    if (salary < 0) {
        $("#salary").val(0);
        salary = 0;
    }

    if (monthsAtJob < 0) {
        $("#monthsAtJob").val(0);
        monthsAtJob = 0;
    }

    //calculate approval

    //If their salary is higher than 40000 and credit score higher than 600 give them the loan
    if (salary >= 40000 && creditScore >= 600)
    {
        console.log(happyDecision);
        $("#decision").text(happyDecision);
    }
    /*If their salary is more than 40000 but credit score is less than 600 but they have
    been at their job for more than 12 months then give them the loan*/
    else if (salary >= 40000 && creditScore <= 600 && monthsAtJob > 12 )
    {
        console.log(happyDecision);
        $("#decision").text(happyDecision);
    }
    /*otherwise if their salary was more than 40000 and credit score
    less than 600 and months at the job was less than 12 don't give them the loan*/
    else if (salary >= 40000 && creditScore <= 600 && monthsAtJob < 12 )
    {
        console.log(sadDecision);
        $("#decision").text(sadDecision);
    }
    //If salary is less than 40000 and credit score is less than 600, dent loan
    else if (salary <= 40000 && creditScore <= 600)
    {
        console.log(sadDecision);
        $("#decision").text(sadDecision);
    }
    /*If salary is less than 40000 and credit score is greater than 600 and months
    at job are more than 12 give them the loan*/
    else if (salary <= 40000 && creditScore >= 600 && monthsAtJob > 12)
    {
        console.log(happyDecision);
        $("#decision").text(happyDecision);
    }
    //Salary less than 40000, credit score above 600, less than 12 mo at job, denied
    else if (salary <= 40000 && creditScore >= 600 && monthsAtJob < 12)
    {
        console.log(sadDecision);
        $("#decision").text(sadDecision);
    }
    $(".output").show();
}















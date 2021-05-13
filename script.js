
const analyzeText = ()=>{
    let noOfChar=0;
    let noOfSpaces=0;
    let noOfSpecialSymboals=0;
    let noOfDigits=0;
    let noOfWords=0;
    let noOfSentences=0;
    let noOfVowels=0;
    let noOfConsonants=0;
    // let noOfLines=1;

    // get textarea reference
    const text = document.getElementById('text').value;
    // console.log(text);

    // Analyze Text
    for(let i=0;i<text.length;i++){
        // if(text[i]=="\n"){
        //     noOfLines++;
        // }
        if((text[i]>='a' && text[i]<='z') || (text[i]>='A' && text[i]<='Z')){
            noOfChar++;
            if(text[i]=='a' || text[i]=='e' || text[i]=='i' || text[i]=='o' || text[i]=='u' || text[i]=='A' || text[i]=='E' || text[i]=='I' || text[i]=='O' ||text[i]=='U'){
                noOfVowels++;
            }else{
                noOfConsonants++;
            }
        }
        if(text[i]>='0' && text[i]<='9'){
            noOfDigits++;
        }
        if(text[i]==' '){
            noOfSpaces++;
        }
        if(text[i]=='.'){
            noOfSentences++;
        }
        if(text[i]=='.' || text[i]==',' || text[i]=='?' || text[i]=='!' || text[i]==' '){
            noOfWords++;
            if(text[i+1]=='.' || text[i+1]==',' || text[i+1]=='?' || text[i+1]=='!' || text[i+1]==' '){
                noOfWords--;
            }
        }
        if(text[i]=='@' || text[i]=='#' || text[i]=='$' || text[i]=='%' || text[i]=='^' || text[i]=='&' || text[i]=='*' || text[i]=='(' || text[i]==')' ||text[i]=='.' || text[i]==','|| text[i]=='!'|| text[i]=='?'|| text[i]=='<'|| text[i]=='>'|| text[i]=='/'|| text[i]=="'" || text[i]=='"' || text[i]==';' || text[i]==':' || text[i]=='-' || text[i]=='+' || text[i]=='=' || text[i]=='_' || text[i]=='₹' || text[i]=='`' || text[i]=='~' || text[i]=='|' || text[i]=='[' || text[i]==']' || text[i]=='{' || text[i]=='}' || text[i]=='\\'){
            noOfSpecialSymboals++;
        }
        
    } 

    document.getElementById('noOfChar').innerHTML=noOfChar;
    document.getElementById('noOfSpaces').innerHTML=noOfSpaces;
    document.getElementById('noOfSpecialSymboals').innerHTML=noOfSpecialSymboals;
    document.getElementById('noOfWords').innerHTML=noOfWords;
    document.getElementById('noOfSentences').innerHTML=noOfSentences;
    document.getElementById('noOfVowels').innerHTML=noOfVowels;
    document.getElementById('noOfConsonants').innerHTML=noOfConsonants;
    // document.getElementById('noOfLines').innerHTML=noOfLines;

}

const result = document.getElementById('taskRes');
result.classList.add('hidden');


const convertText = () => {
    let newText="";
    result.classList.remove('hidden');
    // get reference for text 
    const text = document.getElementById('text').value;
    // get reference for task 
    const task = document.getElementById('selectTask').value;

    const taskResult = document.getElementById('taskRes');
    taskResult.innerHTML="";
    // check condition for user is enter text or not
    if(text!=''){
        if(task=='uppercase'){
            newText = text.toUpperCase();
        }
        if(task == 'lowercase'){
            newText = text.toLowerCase();
        }
        // add new Text to Result div
        taskResult.insertAdjacentHTML('afterbegin',newText);
    }else{
        alert("Please enter some text in above textbox");
    }
}




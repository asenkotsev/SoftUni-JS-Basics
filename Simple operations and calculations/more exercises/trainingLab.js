function trainingLab(input) {
    let length = Number(input.shift()*100);
    let width = Number(input.shift()*100);
    let hall = 100;
    let lengthWorkspaces = parseInt((length)/120);
    let widthWorkspaces = parseInt((width - 100)/70);
    let workspaces = lengthWorkspaces*widthWorkspaces - 3;
console.log(workspaces);
}

trainingLab( ['15','8.9'] )
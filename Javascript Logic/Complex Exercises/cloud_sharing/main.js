class Client {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
    }
}

class BasicClient extends Client {
    constructor(name, capacity) {
        super(name, capacity);

        this.capacity = 2048;
    }
}

class PremiumClient extends Client {
    constructor(name, capacity) {
        super(name, capacity);

        this.capacity = 5120;
    }
}

class File {
    constructor(name, fileName, fileSize, shared, originalFileSize) {
        this.name = name;
        this.fileName = fileName;
        this.fileSize = fileSize;
        this.shared = shared;
        this.originalFileSize = originalFileSize;
    }
}

class SharedFile {
    constructor(fileName, personThatShared, personThatReceived) {
        this.fileName = fileName;
        this.personThatShared = personThatShared;
        this.personThatReceived = personThatReceived;
    }
}

class UpdatedFile {
    constructor(fileName, accountOwner, accountThatUpdated) {
        this.fileName = fileName;
        this.accountOwner = accountOwner;
        this.accountThatUpdated = accountThatUpdated;
    }
}

class ShareAccountOwning {
    constructor(accountOwner, accountPwned) {
        this.accountOwner = accountOwner;
        this.accountPwned = accountPwned;
    }
}

const users = [];
const files = [];
const sharedFiles = [];
const updatedFiles = [];
const shareAccountOwning = [];



class Cloud {

    constructor () {  

        this.USER_ALREADY_EXISTS = "Account already exists.\n";
        this.MAIN_QUESTION = "Select the method you want"
        this.END_PROGRAM = "Exiting...\n";
        this.ACCOUNT_ADDED = "Account was added.\n";
        this.ACCOUNT_DONT_EXIST = "Account does not exist.\n";
        this.FILE_ALREADY_EXISTS = "File already exists in the account.\n";
        this.FILE_NO_SPACE = "File size exceeds account capacity.\n";
        this.FILE_UPLOADED = "File uploaded into account.\n";
        this.FILE_DONT_EXIST = "File does not exist.\n";
        this.ACCOUNT_DONT_SHARE = "Account does not allow file sharing.\n";
        this.FILE_ALREADY_SHARED = "File already shared.\n";
        this.FILE_SHARED = "File was shared.\n";
        this.FILE_UPDATED = "File was updated.\n";
        this.NO_ACCOUNTS = "No accounts.\n";
        this.FILE_NOT_SHARED = "File not shared.\n";
        this.MAIN_ANSWER = "";
        this.LEAVE_PROGRAM = false;
        this.SUM = 0;
    }


    // ADD method
    add() {

        const ADDuserName = this.arrayMainQuestion(this.MAIN_ANSWER)[1];
        const accountType = this.arrayMainQuestion(this.MAIN_ANSWER)[2];

        if(this.checkUserExists(ADDuserName) === false) {

            if(accountType === "premium") {
            
                users.push(new PremiumClient(ADDuserName));
                alert(this.ACCOUNT_ADDED);
            } else {

                users.push(new BasicClient(ADDuserName));
                alert(this.ACCOUNT_ADDED);
            }
        } else {

            alert(this.USER_ALREADY_EXISTS)
        }
    }
    // End of ADD method
    
    // UPLOAD method
    upload() {

        const UPLOADuserName = this.arrayMainQuestion(this.MAIN_ANSWER)[1];
        const fileName = this.arrayMainQuestion(this.MAIN_ANSWER)[2];
        const fileSize = Number(this.arrayMainQuestion(this.MAIN_ANSWER)[3]);
      
        if(this.checkUserExists(UPLOADuserName) === true) {
            
            if(this.checkFilenameAndNameOfUser(UPLOADuserName, fileName) === false) {
               
                if(this.checkCapacity(fileSize, UPLOADuserName) >= 0) {

                    files.push(new File(UPLOADuserName, fileName, fileSize));
                    alert(this.FILE_UPLOADED);
                } else {

                    alert(this.FILE_NO_SPACE);
                }
            } else {

                alert(this.FILE_ALREADY_EXISTS);
            }
        } else {

            alert(this.ACCOUNT_DONT_EXIST);
        }
    }
    // End of UPLOAD method

    // SHARE method
    share() {

        const SHAREuserName1 = this.arrayMainQuestion(this.MAIN_ANSWER)[1];
        const SHAREuserName2 = this.arrayMainQuestion(this.MAIN_ANSWER)[2];
        const fileShare = this.arrayMainQuestion(this.MAIN_ANSWER)[3];

        if(this.checkUserExists(SHAREuserName1) === true && this.checkUserExists(SHAREuserName2) === true) {

            if(this.checkFilenameAndNameOfUser(SHAREuserName1, fileShare) === true) {

                if(this.checkIfPremium(SHAREuserName1) === true) {

                    if(this.checkSharingOverall(SHAREuserName1, SHAREuserName2, fileShare) === false) {

                        if(this.checkIfBasic(SHAREuserName2) === true && this.checkCapacityBasicAccount(SHAREuserName2, SHAREuserName1, fileShare) >= 0) {

                            const fileSize = this.checkFileSize(SHAREuserName2, fileShare);
                            const halfFileSize = fileSize / 2;
                            sharedFiles.push(new SharedFile(fileShare, SHAREuserName1, SHAREuserName2));
                            files.push(new File(SHAREuserName2, fileShare, halfFileSize, "shared", fileSize));
                            shareAccountOwning.push(new ShareAccountOwning(SHAREuserName1, SHAREuserName2));
                            alert(this.FILE_SHARED);
                            
                        } else if(this.checkIfPremium(SHAREuserName2) === true) {
                            
                            const fileSize = this.checkFileSize(SHAREuserName2, fileShare);
                            sharedFiles.push(new SharedFile(fileShare, SHAREuserName1, SHAREuserName2));
                            files.push(new File(SHAREuserName2, fileShare, 0, "shared", fileSize));
                            shareAccountOwning.push(new ShareAccountOwning(SHAREuserName1, SHAREuserName2));
                            alert(this.FILE_SHARED);

                        } else {

                            alert(this.FILE_NO_SPACE);
                        }
                    } else {

                        alert(this.FILE_ALREADY_SHARED);
                    }
                } else {

                    alert(this.ACCOUNT_DONT_SHARE);
                }
            } else {

                alert(this.FILE_DONT_EXIST);
            }
        } else {

            alert(this.ACCOUNT_DONT_EXIST);
        }
    }
    // End of SHARE method


    // MINSPACE method
    minSpace() {

        if(users.length === 0) {

            alert(this.NO_ACCOUNTS);
        } else {

            const arrayOfCapacity = [];
            
            for(let i = 0; i < users.length; i++) {

                arrayOfCapacity.push(users[i].capacity);
            }
            const sortedArray = arrayOfCapacity.sort((a, b) => {return a - b});
            this.checkSortedArrayCapacity(sortedArray[0]);
        }
    }
    // End of MINSPACE method

    // LISTALL method
    listAll() {

        let result = "";

        for(let i = 0; i < users.length; i++) {

            if(users[i] instanceof BasicClient) {

                result += users[i].name + " (Basic)\n"
            } else {

                result += users[i].name + " (Premium)\n"
            }
        }
        alert("All accounts:\n" + result);
    }
    // End of LISTALL method

    // UPDATE method
    update() {

        const UPDATEusername1 = this.arrayMainQuestion(this.MAIN_ANSWER)[1];
        const UPDATEusername2 = this.arrayMainQuestion(this.MAIN_ANSWER)[2];
        const UPDATEfilename = this.arrayMainQuestion(this.MAIN_ANSWER)[3];

        if(this.checkUserExists(UPDATEusername1) === true && this.checkUserExists(UPDATEusername2) === true) {

            if(this.checkFilenameAndNameOfUser(UPDATEusername1, UPDATEfilename) === true && this.checkAccountOwning(UPDATEusername1) === true) {

                if(this.checkFileSharedUpdate(UPDATEusername2) === true) {

                    updatedFiles.push(new UpdatedFile(UPDATEfilename, UPDATEusername1, UPDATEusername2));
                    alert(this.FILE_UPDATED);
                } else {

                    alert(this.FILE_NOT_SHARED);
                }
            } else {

                alert(this.FILE_DONT_EXIST);
            }
        } else {

            alert(this.ACCOUNT_DONT_EXIST);
        }
    }
    // End of UPDATE method

    // LASTUPDATE method
    lastUpdate() {

        const LASTUPDATEusername = this.arrayMainQuestion(this.MAIN_ANSWER)[1];
        const LASTUPDATEfilename = this.arrayMainQuestion(this.MAIN_ANSWER)[2];

        if(this.checkUserExists(LASTUPDATEusername) === true) {

            if(this.checkFilenameAndNameOfUser(LASTUPDATEusername, LASTUPDATEfilename)) {

                if(updatedFiles.length === 0) {

                    alert("Last update: " + LASTUPDATEusername + "\n");
                } else {

                    this.checkLastUpdateLoop(LASTUPDATEusername, LASTUPDATEfilename);
                }
            } else {

                alert(this.FILE_DONT_EXIST);
            }
        } else {

            alert(this.ACCOUNT_DONT_EXIST);
        }
    }
    // End of LASTUPDATE method

    // EXIT method
    exit() {

        this.LEAVE_PROGRAM = true;
        alert(this.END_PROGRAM);
    }
    // End of EXIT method

    // LISTFILES method
    listFiles() {

        const LISTFILESuserName = this.arrayMainQuestion(this.MAIN_ANSWER)[1];

        if(this.checkUserExists(LISTFILESuserName) === true) {

            let result2 = "";
            
            for(let i = 0; i < files.length; i++) {

                if(LISTFILESuserName === files[i].name && files[i].shared === "shared") {

                    result2 += files[i].fileName + " (" + files[i].originalFileSize + " MB) (shared)\n";
                }
            }
            

            let result1 = this.checkListFiles(LISTFILESuserName);

            alert("Account files:\n" +  result1 + result2);

        } else {

            alert(this.ACCOUNT_DONT_EXIST);
        }
    }
    // End of LISTFILES method
    



    // Auxiliary functions 

    checkLastUpdateLoop(userName, fileName) {

        for(let i = 0; i < updatedFiles.length; i++) {

            if(userName === updatedFiles[i].accountOwner && fileName === updatedFiles[i].fileName && userName !== updatedFiles[i].accountThatUpdated) {
                
                alert("Last update: " + updatedFiles[i].accountThatUpdated + "\n");
                return;
            }
        }
    }

    checkAccountOwning(userName) {

        for(let i = 0; i < shareAccountOwning.length; i++) {

            if(userName === shareAccountOwning[i].accountOwner) {

                return true
            }
        }
        return false
    }

    checkFileSharedUpdate(userName) {

        for(let i = 0; i < files.length; i++) {

            if(userName === files[i].name && files[i].shared === "shared") {

                return true
            }
        }
        return false
    }

    checkListFiles(userName) {

        let result1 = "";

        for(let i = 0; i < files.length; i++) {

            if(userName === files[i].name && files[i].shared !== "shared") {

                result1 += files[i].fileName + " (" + files[i].fileSize + " MB)\n";   
            }
        }
        return result1
    }

    checkListFileShare(userName) {

        for(let i = 0; i < sharedFiles.length; i++) {

            if(userName === sharedFiles[i].personThatReceived) {

                return true
            }
        }
        return false
    }

    checkSharingOverall(userName1, userName2, fileName) {

        for(let i = 0; i < sharedFiles.length; i++) {

            if(userName2 === sharedFiles[i].personThatReceived && fileName === sharedFiles[i].fileName && userName1 === sharedFiles[i].personThatShared) {

                return true;
            }
        }
        return false;
    }

    checkIfFileSharedByName(nameOfUser) {

        for(let i = 0; i < sharedFiles.length; i++) {

            if(nameOfUser === sharedFiles[i].personThatReceived) {

                return true;
            }
        }
        return false;
    }

    checkSharingAndNameOfUser(userName, fileName) {

        for(let i = 0; i < sharedFiles.length; i++) {

            if(userName === sharedFiles[i].personThatReceived && fileName === sharedFiles[i].fileName) {

                return true;
            }
        }
        return false;
    }

    checkFilenameAndNameOfUser(userName, fileName) {

        for(let i = 0; i < files.length; i++) {

            if(userName === files[i].name && fileName === files[i].fileName) {

                return true;
            }
        }
        return false;
    }

    checkUserExists(nameOfUser) {

        for(let i = 0; i < users.length; i++) {

            if(nameOfUser === users[i].name) {

                return true;
            }
        }
        return false;
    }

    checkSortedArrayCapacity(array) {

        for(let i = 0; i < users.length; i++) {

            if(array === users[i].capacity) {

                return alert(`Account with least free space: ${users[i].name}\n`)
            }
        }
    }

    checkIfPremium(userName) {

        for(let i = 0; i < users.length; i++) {

            if(users[i].name === userName) {

                if(users[i] instanceof PremiumClient) {

                    return true;
                }
            }
        }
        return false;
    }

    checkIfBasic(userName) {

        for(let i = 0; i < users.length; i++) {

            if(users[i].name === userName) {

                if(users[i] instanceof BasicClient) {

                    return true;
                }
            }
        }
        return false;
    }

    checkIfFileSharedByFile(nameOfFile) {

        for(let i = 0; i < sharedFiles.length; i++) {

            if(nameOfFile === sharedFiles[i].fileName) {

                return true;
            }
        }
        return false;
    }

    checkCapacity(sizeOfFile, userName) {

        for(let i = 0; i < users.length; i++) {

            if(userName === users[i].name) {

                var totalCapacity = users[i].capacity - sizeOfFile;
                users[i].capacity = totalCapacity;
            }
        }
        return totalCapacity;
    }

    checkCapacityBasicAccount(userName1, userName2, nameOfFile) {

        for(let i = 0; i < users.length; i++) {

            if(userName1 === users[i].name) {

                for(let j = 0; j < files.length; j++) {

                    if(nameOfFile === files[j].fileName && userName2 === files[j].name) {

                        var totalCapacity = users[i].capacity - (files[j].fileSize / 2);
                        users[i].capacity = totalCapacity;
                    }
                }
            }
        }
        return totalCapacity;
    }

    checkFileSize(userName, nameOfFile) {

        for(let i = 0; i < users.length; i++) {

            if(userName === users[i].name) {

                for(let j = 0; j < files.length; j++) {

                    if(nameOfFile === files[j].fileName) {

                        var fileSize = files[j].fileSize;
                        return fileSize
                    }
                }
            }
        }
    }
    // Method to put the words of the mainQuestion in an array
    arrayMainQuestion(string) {

        const arrayOfWords = string.split(" ");

        return arrayOfWords;
    }
    


    // Ask user method
    askUser() {

        while (this.LEAVE_PROGRAM === false) {
    
            this.MAIN_ANSWER = prompt(this.MAIN_QUESTION);
            
            switch (this.arrayMainQuestion(this.MAIN_ANSWER)[0]) {
                case "ADD":
                    this.add();
                    break;
                case "SHARE":
                    this.share();
                    break;
                case "MINSPACE":
                    this.minSpace();
                    break;
                case "LISTFILES":
                    this.listFiles();
                    break;
                case "LISTALL":
                    this.listAll();
                    break;
                case "UPLOAD":
                    this.upload();
                    break;
                case "UPDATE":
                    this.update();
                    break;
                case "LASTUPDATE":
                    this.lastUpdate();
                    break;
                case "EXIT":
                    this.exit();
            }
        }
    }
}


let dropbox = new Cloud();
dropbox.askUser();
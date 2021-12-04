const prompt = require('prompt-sync')();

// define 3 classes ( Sagi, menbership, Menu); array Members (name, memberID, phone number)

class Sagi {
    constructor(members) {
        this.name = 'MCL';
        this.members = members;
        this.sagiBalance = 0;
    }

    description() {

        return `${this.name} has ${this.getSagiBalance()}`;
    }

    viewMembers() {

        for (let i = 0; i < this.members.length; i++) {
            console.log('Member Name: ', this.members[i].name, 'Member ID: ', this.members[i].memberID, 'Member Account Balance: ', this.members[i].accountBalance);
        }
    }

    getSagiBalance() {
        this.sagiBalance = 0;
        for (let i = 0; i < this.members.length; i++) {
            this.sagiBalance += Number(this.members[i].accountBalance);

        }

        return this.sagiBalance;
    }

    removeMember() {
        let index;
        let delectedMember = prompt('Enter the Name of a member to remove: ');
        for (let i = 0; i < this.members.length; i++) {
            if (delectedMember == this.members[i].name) {
                index = i;
            }
        }

        if (index !== undefined) {
            this.members.splice(index, 1);


            return this.removeMember

        }
    }
}

class Membership {
    constructor(name, memberID, phoneNumber, accountBalance) {
        this.name = name;
        this.memberID = memberID;
        this.phoneNumber = phoneNumber;
        this.accountBalance = accountBalance;



    }
    
    description() {
        if (this.isInGoodStanting())
            return `${this.name} membership is in good standing`;
        else {
            return `${this.name} account is default`
        }
    }

    isInGoodStanting() {
        if (this.accountBalance > 25) {
            return true;
        } else {
            return false;
        }
    }
}

class Menu {
    constructor() {
        this.members = [];
        // this.selectedMember = null;
        this.sagi = new Sagi([]);

        this.star();
    }
    showMainMenuOptions() {
        return prompt(`
        0 - Exit
        1 - Add New Member
        2 - Display All Member
        3 - Remove a Member
        `)
    }

    star() {
        let selection = this.showMainMenuOptions()
        while (selection != 0) {
            switch (selection) {

                case '1':
                    this.addNewMember()
                    break;


                case '2':
                    this.viewMembers()
                    break;

                case '3':
                    this.removeMember()
                    break;

                default:
                    selection = 0;
            }

            selection = this.showMainMenuOptions();
        }
        console.log('Goodbye');
    }

    addNewMember() {
        let member = {};
        let name = prompt('enter a new members name: ');
        member.name = name;

        let memberID = prompt('enter a new members ID: ');
        member.memberID = memberID;

        let phoneNumber = prompt('enter a new members phone number: ');
        member.phoneNumber = phoneNumber;

        let accountBalance = prompt('enter a new members balance: ');
        member.accountBalance = accountBalance;

        const membership = new Membership(name, memberID, phoneNumber, accountBalance);
        if (membership.isInGoodStanting()) {
            this.sagi.addMembership(membership);
        } else {
            console.log('No suffissant fund to add into sagi');
        }

    }

    viewMembers() {
        this.sagi.viewMembers();

    }

    removeMember() {
        this.sagi.removeMember();
    }

}

new Menu();
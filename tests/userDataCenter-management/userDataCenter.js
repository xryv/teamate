class UserDataCenter {
    constructor() {
        this.users = [];
        console.log('UserDataCenter initialized.');
    }

    addUser(user) {
        this.users.push(user);
    }

    getAllUsers() {
        return this.users;
    }

    deleteUserByEmail(email) {
        this.users = this.users.filter(user => user.email !== email);
    }

    preloadUsers() {
        const mockUsers = [
            new User("dragonSlayer@example.com", "epicLoot123", "DragonSlayer42", "Jake", "The Brave", "1990-07-07", "Valhalla"),
            new User("elfHealer@example.com", "healz4u", "ElfHealer", "Elena", "Moonlight", "1992-02-02", "Elvish Empire"),
            new User("orcBasher@example.com", "smashCrush88", "OrcBasher", "Og", "Gronk", "1988-03-03", "Orc Lands"),
            new User("wizardWiz@example.com", "spellBind123", "WizardWiz", "Merlin", "The Wise", "1993-04-04", "Mystic Towers"),
            new User("stealthRogue@example.com", "shadowStep", "StealthRogue", "Raven", "Nightwalker", "1990-05-05", "Shadow Realm")
        ];
        this.users.push(...mockUsers);
        console.log('Preloaded users into UserDataCenter with cooler IDs.');
    }
}

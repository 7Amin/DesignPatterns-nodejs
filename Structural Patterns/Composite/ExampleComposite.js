class IStructure {
    enter() {
        throw new Error('You have to implement the method doSomething!');
    };

    exit() {
        throw new Error('You have to implement the method doSomething!');
    };

    location() {
        throw new Error('You have to implement the method doSomething!');
    };

    getName() {
        throw new Error('You have to implement the method doSomething!');
    };
}

class Housing extends IStructure {
    constructor(address,  structures) {
        this.address = address;
        if (structures) {
            this.structures = structures;
        }
        else {
            this.structures = [];
        }
    }

    enter () {
        console.log('you have entered the ' + this.address);
    }

    exit() {
        console.log('you have left the ' + this.address);
    }

    location() {
        console.log(this.address);
    }

    getName() {
        return this.address;
    }

    addStructure(structure) {
        this.structures.push(structure);
        return this.structures.length - 1; // return index
    }

    getStructure(structureNumber) {
        try {
            return this.structures[structureNumber];
        } catch (error) {
            throw error;
        }
    }
}

class Room extends IStructure { //leaf class, usually is an abstract class
    constructor(name) {
        this.name = name;
    }

    enter () {
        console.log('you have entered the ' + this.name);
    }

    exit() {
        console.log('you have left the ' + this.name);
    }

    location() {
        console.log('you are currently in the ' + this.name);
    }

    getName() {
        return this.name;
    }
}

class Program {
    static main(){
        building = new Housing('123 street');
        floorOne = new Housing('123 street - first floor');
        firstFloorIndex = building.addStructure(floorOne);

        washRoom1m = new Room('1f men\'s washroom');
        washRoom1w = new Room('1f women\'s washroom');
        common = new Room('1f common area');

        firstMens = floorOne.addStructure(washRoom1m);
        firstWomans = floorOne.addStructure(washRoom1w);
        firstCommon = floorOne.addStructure(common);

        building.enter();
        currentFloor = building.getStructure(firstFloorIndex);
        currentFloor.enter();

        currentRoom = currentFloor.getStructure(firstMens);
        currentRoom.enter();

        currentRoom = currentFloor.getStructure(firstCommon);
        currentRoom.enter();
    }
}
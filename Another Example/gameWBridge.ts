// abstraction in bridge pattern                      // abstract class                     // expose to client
abstract class Game {
    protected load1: Load;
    protected load2: Load;
  
    constructor(env: Load, npc: Load) {
        this.load1 = env;
        this.load2 = npc;
    }
  
    abstract render(): void;
}

// implementer for bridge pattern                     // abstract class                     // expose to client
abstract class Load {
    abstract getData(): string;
}

// REFINED ABSTRACTIONS
// refined abstraction 1 in bridge pattern
class EldenRing extends Game {
    public render() {
        const env = this.load1.getData();
        const npc = this.load2.getData();

        console.log("Elden Ring: Rendering data: ");
        console.log("\t", env);
        console.log("\t", npc);
    }
}

// refined abstraction 2 in bridge pattern
class GTA extends Game {
    public render() {
        const env = this.load1.getData();
        const npc = this.load2.getData();

        console.log("GTA: Rendering data: ");
        console.log("\t", env);
        console.log("\t", npc);
    }
}

// CONCRETE IMPLEMENTATIONS
// concrete implementation 1 for bridge pattern
class Environment implements Load {
    public getData() {
      return "Environment: Data Loaded";
    }
}

// concrete implementation 2 for bridge pattern
class NPC implements Load {
    public getData() {
      return "NPCs: Data Loaded";
    }
}


// CLIENT CODE
const eldenring = new EldenRing(new Environment(), new NPC());
eldenring.render();

// Output:
// Elden Ring: Rendering data: 
//      Environment: Data Loaded
//      NPCs: Data Loaded

const gta = new GTA(new Environment(), new NPC());
gta.render();

// Output:
// GTA: Rendering data: 
//      Environment: Data Loaded
//      NPCs: Data Loaded


// New Variant
class CounterStrike extends Game {
    public render() {
        const env = this.load1.getData();
        const character = this.load2.getData();

        console.log("Counter Stike: Rendering data: ");
        console.log("\t", env);
        console.log("\t", character);
    }
}

class characterModel implements Load {
    public getData() {
      return "Character Model: Data Loaded";
    }
}

// Client Code with New Variant
const cs = new CounterStrike(new Environment(), new characterModel());
cs.render();

// Output:
// Counter Stike: Rendering data: 
//      Environment: Data Loaded
//      Character Model: Data Loaded
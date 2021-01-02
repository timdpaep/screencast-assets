import { Team } from './Team';
import { Person } from './interfaces';
import { Job, Types } from './enums';
import { Actor } from './Actor';

export const basicTypes = {
  runDemos: () => {
    // boolean
    const isOpen: boolean = false; // will not break without parcel plugin

    // string
    const myName: string = "Tim";

    // number
    const myAge: number = 34.04; // also decimals

    // array
    const list: number[] = [0, 1, 2]; // no strings allowed

    // tuple
    const me: [string, number, boolean] = ["Scott", 32, false];

    // enum
    const job = Job.WebDesign;

    // anything you want
    const phone: any = "iPhone";
    const tablet: any = 3; // also never

    // Implicit typing
    // ----
    // let newName = "William";
    // newName = "Shakespeare";
    // newName = 10;
    // console.log(newName);

    // let newNameTwo = newName;
    // newNameTwo = 10;

    // Union types (something or another thing)
    // ----
    // let newName: string | number = 'Tim';
    // newName = 12;
    // newName = false;

    // let newNameTwo = newName;
    // newNameTwo = 10;

    // Union types (with functions)
    // ----
    const makeMargin = (x: string | number): string => {
      return `margin: ${x}px;`;
    }
    makeMargin(10);
    makeMargin("10")

    // Null Types (added to standard types)
    // ----
    // let dog: string = "Sammy";
    // dog = null;
    // console.log(dog);
    // dog = undefined;
    // dog = "Lucie";
    // dog = 10;
    // dog = false;

    // Interfaces
    // ----
    // interface Person {
    //   name: string,
    //   age?: number
    // }

    // const sayName = (name: string, age: number): string => {
    //   console.log(name);
    //   return name;
    // }

    const sayName = ({ name, age }: Person): Person => {
      return { name };
    }

    // sayName(32, "Tim");
    // sayName("Tim", 32);
    sayName({
      name: 'Tim',
      // age: 34
    });

    // 1. Extends
    // 2. Implements
    // 3. Takes over
    // ==> more dynamic
    interface OtherPerson extends Person {
      description: string;
    }

    interface OtherPerson {
      isHungry: boolean
    }

    const otherPerson: OtherPerson = {
      name: "Tuple",
      description: "this is the other person",
      isHungry: true
    }

    console.log(otherPerson);


    // 1. Alias
    // 2. Can't extend types (fixed)
    // 3. Combined with unions or intersections
    // ==> types are static (you can't change the type itself)
    type Hungry = boolean;
    type Greeting = (name: string) => string;

    type NewPerson = {
      name: string,
      hungry: boolean
    } & { evil: boolean }

    type Hero = {
      isAHero: true;
    }

    type HeroPerson = NewPerson | Hero;

    const newPerson: NewPerson = {
      name: "Tim",
      hungry: true,
      evil: true
    }

    const hero: HeroPerson = {
      isAHero: true
    }

    // Tip: Choose as a team, interfaces for object
    // types for everything else

    // Numeric Enums
    // ----
    // enum Types {
    //   Video, // 0
    //   BlogPost, // 1
    //   Quiz // 2
    // }

    // // String Enum
    // enum Types {
    //   Video = "VIDEO", // Video
    //   Picture = "PICTURE", // Blog Post
    //   Vector = "VECTOR" // Quiz
    // }

    const createContent = (contentType: Types) => { }

    // createContent('Video');
    // createContent(Types.Video);
    // createContent('VIDEO'); // not working

    console.log(Types.BlogPost);

    const redDevils = new Team('Red Devils');
    redDevils.score();
    // console.log(redDevils.teamName);

    // Generic Types

    const outputInput = <T>(arg: T): T => {
      console.log(arg);
      return arg;
    }

    function testing<T>(ok: T): T {
      console.log(ok);
      return ok;
    }

    // input equals the output
    const out: string = outputInput("hi");
    outputInput(3);

    // Duck typing
    let SeanConnery: Person = new Actor();
    const fake = {
      name: "Tim",
      role: "actor"
    }
    SeanConnery = fake;

    // Type Guards

    interface Fish {
      name: string;
      swim: () => void;
    }

    interface Bird {
      name: String;
      fly: () => void;
    }

    type Animal = Fish | Bird;

    const nemo: Animal = {
      name: "Nemo",
      swim: () => console.log('Swim like Nemo!')
    }

    const phoenix: Animal = {
      name: "Phoenix",
      fly: () => console.log('Rise of the Phoenix!')
    }

    const actLikeAnimal = (animal: Animal) => {
      // if (animal.swim) {
      //   animal.swim();
      // }

      const incoming = animal as Fish;
      if (incoming.swim) incoming.swim();

      if ('swim' in animal) {
        animal.swim();
      }
    }

    actLikeAnimal(phoenix);

    const isFish = (animal: Animal): animal is Fish => 'swim' in animal;

    if (isFish(nemo)) nemo.swim();
  }
}
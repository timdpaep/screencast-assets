export const functions = {
  runDemos: () => {
    // ? for optional parameters
    // default parameters (typescript knows the type)
    const sayWord = (word = "Hello", ...otherStuff: string[]): string => {
      console.log(otherStuff);
      console.log(word);
      return word;
    }

    // sayWord();
    // sayWord(3);
    sayWord('Hans', 'Grietje');
  }
}
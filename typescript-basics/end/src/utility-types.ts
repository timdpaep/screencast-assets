export const utilityTypes = {
  runDemos: () => {
    // TypeScript provides several utility types to facilitate common type transformations. These utilities are available globally.

    // ----
    // PARTIAL<Type>
    // Constructs a type with all properties of Type set to optional.
    // This utility will return a type that represents all subsets of a given type.
    // ----

    // interface Todo {
    //   title: string,
    //   description: string
    // }

    // function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    //   return { ...todo, ...fieldsToUpdate }
    // }

    // const todo = {
    //   title: "learning typescript",
    //   description: "something to learn very clever."
    // }

    // const todo2 = updateTodo(todo, { description: "...or not" });

    // console.log(todo2);

    // ----
    // READONLY<Type>
    // Constructs a type with all properties of Type set to readonly,
    // meaning the properties of the constructed type cannot be reassigned.
    // ----

    // interface Todo {
    //   title: string
    // }

    // const todo: Readonly<Todo> = {
    //   title: "My new todo"
    // }

    // todo.title = "cannot change...";

    // ----
    // PICK<Type, Keys>
    // Constructs a type by picking the set of properties Keys from Type.
    // ----

    // interface Todo {
    //   title: string,
    //   description: string,
    //   completed: boolean
    // }

    // type TodoPreview = Pick<Todo, "title" | "completed">

    // const todo: TodoPreview = {
    //   title: "Clean room",
    //   completed: false
    // }

    // ----
    // OMIT<Type, Keys>
    // Constructs a type by picking the set of properties Keys from Type.
    // ----

    // interface Todo {
    //   title: string;
    //   description: string;
    //   completed: boolean;
    // }

    // type TodoPreview = Omit<Todo, "description">;

    // const todo: TodoPreview = {
    //   title: "Clean room",
    //   completed: false,
    // };


  }

}
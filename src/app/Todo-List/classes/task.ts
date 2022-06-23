export class Task {
   description: string;
   priority: number;
   isDone: boolean;
   createdAt: string; //

   constructor(desc = "No description!!!", prio = 0) {
      this.description = desc;
      this.priority = prio;
      this.isDone = false;
      this.createdAt = new Date().toLocaleDateString();
   }

   set done(value: boolean) {
      this.isDone = value;
   }

   infos() {
      return this.description + " - P: " + this.priority + " | " + this.createdAt + " - " + (this.isDone ? "Completed" : "In Progress");
   }

}

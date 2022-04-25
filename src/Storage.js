class Storage {
    constructor() {
        this.storage = window.localStorage
        this.tasks = []
    }

    getTasks() {
        this.tasks = []
        for (let i = 0; i < this.storage.length; i++) {
            this.tasks.push(
                {
                    "id": this.storage.key(i),
                    "text": JSON.parse(this.storage.getItem(this.storage.key(i))).text
                }
            )
        }
        return this.tasks.sort((a, b) => a.id - b.id)
    }

    addTask(text) {
        this.storage.setItem(Date.now(), JSON.stringify({"text": text, "isDone": 0}))
        return this.getTasks()
    }

    deleteTask(id) {
        this.storage.removeItem(id)
        return this.getTasks()
    }
    
    fillStorage() {
        for (let i = 1; i < 6; i++) {
            this.storage.setItem(i, JSON.stringify(
                {
                    "text": `Это задача номер ${i}`,
                    "isDone": 0
                }
            ))
        }
    }
}

export default new Storage()
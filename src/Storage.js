class Storage {
    constructor() {
        this.storage = window.localStorage
        this.tasks = []
    }

    getTasks() {
        this.tasks = []
        for (let i = 0; i < this.storage.length; i++) {
            try {
                this.tasks.push(
                    {
                        "id": this.storage.key(i),
                        "text": JSON.parse(this.storage.getItem(this.storage.key(i))).text,
                        "isDone": JSON.parse(this.storage.getItem(this.storage.key(i))).isDone
                    }
                )
            } catch (error) {
                this.tasks.push(
                    {
                        "id": this.storage.key(i),
                        "text": "Что-то не так с содержимым LocalStorage!!!",
                        "isDone": JSON.parse(this.storage.getItem(this.storage.key(i))).isDone
                    }
                )
            }
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

    setTaskDone(id) {
        let taskObj = (JSON.parse(this.storage.getItem(id)))
        this.storage.setItem(id, JSON.stringify({...taskObj, "isDone": taskObj.isDone == "1" ? '0' : '1'}))
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
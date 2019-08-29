/*
    Stack data structure: LIFO Last In first Out
    constructor[x]
    push[x]
    pop[x]
    getSize[x]
    isEmpty[x]
    peek[x]
    print[]

*/

class Stack {
    constructor() {
        this.items = {}; // Initalize empty object
        this.top = 0;   // we only want recognize the latest object pushed
    }

    push(data) {
        this.top++; // Increment by 1
        this.items[this.top] = data; // place the number inside item object
    }

    pop() {
        let deletedData;

        if (this.top) { // if this.top is > 0 (if there is items in the stack)
            deletedData = this.items[this.top]; // add the last element added to deleteData
            delete this.items[this.top]; // delete that last item added
            this.top--; // top will decrease by 1
            return deletedData; // return the deleted value
        }
    }
    // Helper functions
    getSize() {
        return this.top;
    }

    isEmpty() {
        if (!this.getSize()) {
            return true;
        } else {
            return false;
        }
    }

    // Will return is the next value that is to come out
    // without making it come out
    peek() {
        if (this.isEmpty()) {
            return null
        }
        return this.items[this.top];
    }

    print() {
        let result = '';
        for (let i = this.top; i > 0; i--) {
            result += this.items[i] + ' '
        }
        return result;
    }

};

const stack = new Stack(); // Stack { items: {}, top: 0 }

// Calling Stack
stack.push('Plate #1')
stack.push('Plate #2')
stack.push('Plate #3')

console.log(stack.pop()); // pop out the last added item, you can call it again
console.log(stack.getSize()) // gets the size of the stack
console.log(stack.isEmpty()) // false, there are still elements
console.log(stack.peek()) // Plate #2
console.log(stack.print()) // Plate #2 Plate #1

console.log(stack); //
/*
    Slightly different implementation of Stack
*/

function Stack() {
    let stackSize = 0;
    let stack = {};

    return {
        push: function (item) {
            // Grabbing the stack object and pushing items into it,
            // while adding the stackSize variable to object
            stack[stackSize] = item;
            stackSize += 1;
        },

        pop: function () {
            if (this.isEmpty()) { // If it true that it is empty, then return undefined
                return undefined;
            }
            stackSize -= 1;
            let item = stack[stackSize];
            delete stack[stackSize];
            return item;
        },

        isEmpty: function () {
            return stackSize === 0; // If its true that the stackSize === 0, then return 0
        },

        peek: function () {
            if (this.isEmpty()) {
                return undefined;
            }

            // access stack object and then the size - 1
            return stack[stackSize - 1];
        },

        size: function () {
            return stackSize;
        },

        stackEmpty: function () {
            while (!this.isEmpty()) {
                this.pop();
            }
        },

        print: function () {
            let result = [];
            for (let key in stack) {
                result.unshift(stack[key]);
            }
            return result;
        }
    }
};

const stack = new Stack();
stack.push('hey');
stack.push('cool');

// console.log(stackEmpty());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.size());
console.log(stack.print());
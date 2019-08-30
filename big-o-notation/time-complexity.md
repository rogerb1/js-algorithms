# Big O Definition
We say an algorithm is `o(f(n))` if the number of simple operations the computer has to do is eventually less than a constant times `f(n)`, as `n` increases.

### Types of notation
- f(n) can be linear (f(n) = n) slow
- f(n) can be quadratic (f(n) = n^2) slowest
- f(n) can be constant (f(n) = 1) faster

Constants do not matter
- o(2n) = o(n)
- o(13n^2) = o(n^2)
- o(500) = o(1) 

# Big O Notation in relation to time comlpexity

The problem with time:
- Different Machines will record different times
- Same machines will record different times
- fast algorithms, speed measuremnts may not be
precise enough


# Why it is important to know this
- to be precise on how our code preforms
- useful for discussing trade-offs between different approaches
- when your code slows down or crashes, identifying parts of the code that are inefficient
- job interviews

## o(1) example: usually faster

```
// 3 operations regardless of the value of n
function addUpTo(n) {
    return n * (n + 1) / 2;
}
```

## o(n) example
```
// number of operations is eventually 
// bounded by a multiple of n (say , 10n)

function addUpTo(n) {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
}

```

# Big O Shorthands
- Arithmetic operations are constant
- variable assignment is constant
- accessing elemens in an array/object by index
or key is constant
- in a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop
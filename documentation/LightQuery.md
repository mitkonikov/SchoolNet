# LightQuery

A library developed by SchoolNet to allow client side database query without writing back-end resolvers. This library works on top of the typed repositories from TypeORM. 

## Features

Write query from the client side using nothing but a simple JSON syntax.
 * Select
 * Where

## Example syntax on the client side:

```js
let body = {
    word: {
        select: ["Word", "Type"],
        where: { ID: 3 }
    }
}
```

This is an example JSON syntax for the body of the request to Light. `"word"` is the name of the repository in the switch function (see below). Select is required, while `where` is not. 


## Switch function

The switch function is the only function that you need to implement in your backend in order to tell LightQuery which repositories can be accessed directly from the client side.

```js
let switchCallback = (key) => {
    let repository: any;
    let failed: boolean;

    switch(key.toLowerCase()) {
        case "word": // this is the name of the repository
            repository = Words; // you give access to this repository
            break;
        case "generated_word":
            repository = WordGenerated;
            break;
        case "word_of_the_day":
            repository = WordDay;
            break;
        default:
            // you set failed to true
            // when the key doesn't match a repository
            failed = true;
            break;
    }

    return {
        repository,
        failed
    }
}
```

### Implementation

If you want to see real-world implementation of this library, check out the [ZBORAPI.ts](https://github.com/mitkonikov/SchoolNet/blob/master/src/ZBORAPI.ts) file.

### Future

We are looking to make it available for MySQL without the need of TypeORM.
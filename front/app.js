
const foo = async () =>{
    const data = await (await fetch('https://jsonplaceholder.typicode.com/todos')).json();
    const dataLength = data.length;
    for (let i in data){
        const s = new User(data);
        s.createUser();
    }
}

foo();

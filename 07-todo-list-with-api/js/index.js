// Napisz aplikacje TodoList. Pod spodem lista wymagan

// 1. Stworz strone z lista todos i zaladuj elementy z API
// 2. Zrob nawigacje, dzieki ktorej bedziesz mogl przejsc do podstrony add
// 3. Na podstronie add, zrob obsluge dodawania elementow todo do API
// 4. Po poprawnym dodaniu do strony, przekieruj na podstrone glowna

// Zadania dodatkowe

// 5. Pod lista todo, dodaj przycisk 'remove todos', ktory spowoduje usuniecie wszystkich todos. Rzeczy do wykonania

//  - Dodaj do pliku server.js obsluge endpointa /todos z metoda HTTP REMOVE
//  - Endpoint bedzie mial za zadanie, wyczyscic tablice todos z pliku todos.json
//  - Jesli operacja sie powiedzie, to wyczysc liste z HTML

// 6. Ostyluj listę

// 7*. Dodaj ikonke X przy kazdym elemencie TODO. Nastepnie za pomoca document.addEventListener('click', handleRemoveTodo) i wlasciwosci event.target spraw, zeby usunac kazdy pojedynczy element. (pamietaj o przekazaniu ID na BE).


const todoList = document.querySelector('#todoList')

let todos =[];

// wyświetlanie listy
const renderTodos = (todos) => {
    todoList.innerHTML += '';

    todos.forEach(todo => {
        todoList.innerHTML += `
        <li>
            <p>${todo.title}</p>
            <p>${todo.author}</p>    
        </li>
        `;
    })
}

// //fetch - zapytanie do serwera
// const fetchTodos = () => {
//     fetch('http://localhost:5000/todos')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         renderTodos(data.todos);
//     })
// }

// fetchTodos();

//fetch - zapytanie do serwera
// zadeklarowanie funkcji fetch
const fetchTodos = () => {
    // zapytaj serwera pod adresem
    fetch('http://localhost:5000/todos')
    // żeby zwrócił odpowiedż = odpowiedź w json
    .then(res => res.json())
    // żeby wyświetlił dane z jsona.todos metodą renderTotos, którą napisaliśmy wyżej
    .then(data => {
        console.log(data);
        renderTodos(data.todos);
    })
}

// wywołaj metodę zapytania
fetchTodos();

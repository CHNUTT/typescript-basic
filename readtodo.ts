import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos';

// INFO define interface
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: false;
}

axios.get(url).then((res) => {
  const data: Todo[] = res.data;
  console.log(data)
});

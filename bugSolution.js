```javascript
// pages/index.js

export default async function Home({params}) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`);
  const data = await res.json();

  return (
    <div>Todo: {data.title}</div>
  );
}

// app/api/todos/[id]/route.js
export async function GET(request, {params}){
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`);
  const data = await res.json();
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
```
// app/api/route/route.ts (or route.js if using JavaScript)
export async function POST(req: Request) {
  const data = await req.json();
  console.log(data); // Here, you're logging the request body
  // console.log(data.name)  
  // Add your logic to handle the email sending here
  return new Response("Message received", { status: 200 });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("EVENT RECEIVED:", body);

    return Response.json({ ok: true });
  } catch (e) {
    return Response.json({ ok: false }, { status: 500 });
  }
}

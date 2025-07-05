import { NextResponse } from "next/server"

export async function GET() {
  // NOTE: do NOT prefix this env var with NEXT_PUBLIC –
  // we want it to stay on the server only.
  const key = process.env.RAZORPAY_KEY_ID

  if (!key) {
    return NextResponse.json({ error: "Key not set." }, { status: 500 })
  }

  // send only the public key
  return NextResponse.json({ key })
}

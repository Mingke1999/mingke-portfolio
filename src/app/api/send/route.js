import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend("re_eD16AhAx_MMtsmTtKZ24NnppR37RTEojr");
const fromEmail = process.env.FROM_EMAIL

export async function POST(req, res) {
  const { body } = await req;
  const { email, subject, message} = body;
  console.log(email)
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to:  ["leonardo.mingke1999@gmail.com",email],
      subject: subject,
      react: (
        <>
            <h1>{subject}</h1>
            <p>Thanks for contacing me.</p>
            <p>{message}</p>
        </>
      )
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

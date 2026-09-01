import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { supabase } from '../../../lib/supabase';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const { error: dbError } = await supabase
            .from('leads')
            .insert([{ name, email, message }]);

        if (dbError) {
            console.error('Supabase error:', dbError);
            return NextResponse.json(
                { error: 'Failed to save your message' },
                { status: 500 }
            );
        }

        await resend.emails.send({
            from: 'hello@alinakiptenko.com',
            to: 'alinakip20@gmail.com',
            subject: `New message from ${name}`,
            text: `From: ${name} (${email})\n\n${message}`,
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error('API error:', err);
        return NextResponse.json(
            { error: 'Something went wrong' },
            { status: 500 }
        );
    }
}
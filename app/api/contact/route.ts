import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    const formData = {
      access_key: 'ace837d0-8dd2-4f7d-9b27-8830b8e8a32c',
      name: name,
      email: email,
      message: message,
      subject: 'New Enquiry from DrmHope Website',
      from_name: 'DrmHope Contact Form',
      botcheck: false
    }

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    const json = await response.json()
    console.log('Web3Forms response:', json)

    if (json.success) {
      return NextResponse.json(
        { message: 'Email sent successfully!' },
        { status: 200 }
      )
    } else {
      console.error('Web3Forms error:', json)
      return NextResponse.json(
        { error: json.message || 'Failed to send email' },
        { status: 400 }
      )
    }
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Something went wrong!' },
      { status: 500 }
    )
  }
}

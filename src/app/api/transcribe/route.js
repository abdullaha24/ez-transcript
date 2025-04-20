// src/app/api/transcribe/route.js

export async function POST(request) {
  try {
    const data = await request.json();
    const fileUrl = data.fileUrl;

    console.log('Received file URL:', fileUrl);

    const assemblyAiApiKey = process.env.ASSEMBLYAI_API_KEY;

    if (!assemblyAiApiKey) {
      console.error('ASSEMBLYAI_API_KEY environment variable not set.');
      return new Response(JSON.stringify({ error: 'AssemblyAI API key not configured on the server' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    console.log('URL sent to AssemblyAI:', fileUrl);
    const assemblyAiResponse = await fetch('https://api.assemblyai.com/v2/transcript', {
      method: 'POST',
      headers: {
        'Authorization': assemblyAiApiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        audio_url: fileUrl,
      }),
    });

    if (!assemblyAiResponse.ok) {
      const errorResult = await assemblyAiResponse.json();
      console.error('AssemblyAI API error:', errorResult);
      return new Response(JSON.stringify({ error: `Failed to initiate transcription with AssemblyAI: ${assemblyAiResponse.statusText}` }), {
        status: assemblyAiResponse.status,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    const transcriptionData = await assemblyAiResponse.json();
    const transcriptId = transcriptionData.id;

    console.log('Transcription initiated with ID:', transcriptId);

    return new Response(JSON.stringify({ transcriptId }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });

  } catch (error) {
    console.error('Error processing request:', error);
    return new Response(JSON.stringify({ error: 'Failed to process request' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
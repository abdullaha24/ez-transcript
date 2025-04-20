// src/app/api/transcribe/status/route.js

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const transcriptId = searchParams.get('transcriptId');
    const assemblyAiApiKey = process.env.ASSEMBLYAI_API_KEY;
  
    if (!transcriptId) {
      return new Response(JSON.stringify({ error: 'Missing transcriptId' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  
    if (!assemblyAiApiKey) {
      return new Response(JSON.stringify({ error: 'AssemblyAI API key not configured on the server' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  
    try {
      const response = await fetch(`https://api.assemblyai.com/v2/transcript/${transcriptId}`, {
        headers: {
          'Authorization': assemblyAiApiKey,
        },
      });
  
      if (!response.ok) {
        const errorResult = await response.json();
        console.error('AssemblyAI API error (status check):', errorResult);
        return new Response(JSON.stringify({ error: `Failed to get transcription status: ${response.statusText}` }), {
          status: response.status,
          headers: { 'Content-Type': 'application/json' },
        });
      }
  
      const data = await response.json();
      return new Response(JSON.stringify({ status: data.status, transcript: data }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
  
    } catch (error) {
      console.error('Error fetching transcription status:', error);
      return new Response(JSON.stringify({ error: 'Failed to fetch transcription status' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }
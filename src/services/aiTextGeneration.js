// AI Text Generation Service
let API_URL = 'https://thejagstudio-corsanywhere4.hf.space/https://api.deepinfra.com/v1/openai/chat/completions';

export const generateAIResponse = async (prompt) => {
  try {
		const randomIP = Array.from({ length: 4 }, () => Math.floor(Math.random() * 256)).join('.');
		API_URL = API_URL.replace("corsanywhere4","corsanywhere"+(Math.floor(Math.random() * 4)+1).toString())
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Accept-Language': 'en-US,en;q=0.9',
		    'Connection': 'keep-alive',
		    'Content-Type': 'application/json',
		    'Origin': 'https://deepinfra.com',
		    'Referer': 'https://deepinfra.com/',
		    'Sec-Fetch-Dest': 'empty',
		    'Sec-Fetch-Mode': 'cors',
		    'Sec-Fetch-Site': 'same-site',
		    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
		    'X-Deepinfra-Source': 'model-embed',
		    'accept': 'text/event-stream',
		    'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
		    'sec-ch-ua-mobile': '?0',
		    'sec-ch-ua-platform': '"macOS"',
				'X-Forwarded-For': randomIP
      },
      body: JSON.stringify({
		    'model': 'meta-llama/Meta-Llama-3.1-8B-Instruct',
		    'messages': [
		      {
		        'role': 'user',
		        'content': prompt
		      }
		    ],
		    'stream': false,
		    'response_format': {
		      'type': 'json_object'
		    }
		  })
    });

    if (!response.ok) {
      throw new Error('Failed to generate AI response');
    }

    let text = await response.json();
    text = text["choices"][0]["message"]["content"];
		console.log(text);
    if (!text) {
      throw new Error('Invalid response format');
    }

    return JSON.parse(text);
  } catch (error) {
    console.error('AI Generation Error:', error);
    throw error;
  }
};

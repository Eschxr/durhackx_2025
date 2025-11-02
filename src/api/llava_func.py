import requests
import json

def Llava_mes(mes):
    # Set up the base URL for the local Ollama API
    url = "http://localhost:11434/api/chat"

    # Define the payload (your input prompt)
    payload = {
        "model": "llava:latest",  # Replace with the model name you're using
        "messages": [{"role": "user", "content": mes}]
    }

    # Send the HTTP POST request with streaming enabled
    response = requests.post(url, json=payload, stream=True)

    # Check the response status
    if response.status_code == 200:
        print("Streaming response from llava:")
        res = ""
        for line in response.iter_lines(decode_unicode=True):
            if line:
                try:
                    # Parse each line as a JSON object
                    json_data = json.loads(line)
                    # Extract and print the assistant's message content
                    if "message" in json_data and "content" in json_data["message"]:
                        curr = json_data["message"]["content"]
                        print(json_data["message"]["content"], end="")
                        res += curr
                except json.JSONDecodeError:
                    print(f"\nFailed to parse line: {line}")
        print()  # Ensure the final output ends with a newline
        return res
    else:
        print(f"Error: {response.status_code}")
        print(response.text)
        return 0
print(Llava_mes("hello"))
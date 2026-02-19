import json
import llama_2_func

def TaskAI(mes):
    prompt = f"""
You are a task planning AI.

Analyze the following user request and:
1. Decide how many AI agents are needed.
2. Define each agent's task.
3. Suggest the best AI model for each agent.

Reply ONLY in valid JSON format:

{{
  "total_agents": number,
  "agents": [
    {{
      "id": 1,
      "task": "task name",
      "model": "best_model_name"
    }}
  ]
}}

User request:
{mes}
"""

    response = llama_2_func.llama2_mes(prompt)

    try:
        return json.loads(response)
    except:
        return {"error": "Invalid planner output", "raw": response}

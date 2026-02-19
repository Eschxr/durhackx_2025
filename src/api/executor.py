import router
import TaskAI

def execute_task(user_input):
    plan = TaskAI.TaskAI(user_input)
    
    if "error" in plan:
        return plan

    results = {}

    for agent in plan["agents"]:
        agent_id = agent["id"]
        task = agent["task"]
        model = agent["model"]

        print(f"Running Agent {agent_id} using {model}")

        output = router.run_model(model, task)

        results[f"agent_{agent_id}"] = {
            "task": task,
            "model": model,
            "output": output
        }

    return {
        "plan": plan,
        "results": results
    }

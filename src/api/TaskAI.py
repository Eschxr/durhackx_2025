import llama_2_func

def TaskAI(mes):
    mess = "Please think carefully about the working flow of this task, and tell me how many AI agents we need to have to distribute the work and what each AI agent meant to do. You have to reply me in a uniform format, which is: {agent_num}: {task name}, the number of the agents(just the number), a simple response. Example response: total: 2, {1}: Transcript writing {2}: PPT creation. No need of description, and you need to specify each task for each agent one by one." + mes
    AI_mes = llama_2_func.llama2_mes(mess)
    return AI_mes

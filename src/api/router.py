# router.py

import llama_2_func
import mistral_func
import qrca_2_func
import qwen_2_func
import llava_func

def run_model(model_name, message):

    if model_name.lower() == "llama":
        return llama_2_func.llama2_mes(message)

    elif model_name.lower() == "mistral":
        return mistral_func.mistral_mes(message)

    elif model_name.lower() == "orca":
        return qrca_2_func.Orca_2_mes(message)

    elif model_name.lower() == "qwen":
        return qwen_2_func.Qwen_2_mes(message)

    elif model_name.lower() == "llava":
        return llava_func.Llava_mes(message)

    else:
        return "Model not supported"

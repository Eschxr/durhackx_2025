from flask import Flask, jsonify, request
import llama_2_func , mistral_func, TaskAI, qrca_2_func, qwen_2_func, llava_func


app = Flask(__name__)

@app.route('/api', methods = ['GET'])
def home():
    return "<h1>Welcome to the API home page!</h1>"

@app.route('/api/llama', methods = ['GET'])
def getLlama():
    mes = request.args.get('input')
    data = llama_2_func.llama2_mes(mes)
    # data = "Hello, world!" # llama_2_func.test_func("Hello, world!")
    # data = TaskAI.TaskAI(input)
    return jsonify({'data': data})

@app.route('/api/llava', methods = ['GET'])
def getLlava():
    mes = request.args.get('input')
    data = llava_func.Llava_mes(mes)
    return jsonify({'data': data})

@app.route('/api/mistral', methods = ['GET'])
def getMistral():
    mes = request.args.get('input')
    data = mistral_func.mistral_mes(mes)
    return jsonify({'data': data})

@app.route('/api/orca', methods = ['GET'])
def getOrca():
    mes = request.args.get('input')
    data = qrca_2_func.Orca_2_mes(mes)
    return jsonify({'data': data})

@app.route('/api/qwen', methods = ['GET'])
def getQwen():
    mes = request.args.get('input')
    data = qwen_2_func.Qwen_2_mes(mes)
    return jsonify({'data': data})

@app.route('/api/task', methods = ['GET'])
def getTask():
    mes = request.args.get('input')
    data = TaskAI.TaskAI(mes)
    return jsonify({'data': data})


# driver function
if __name__ == '__main__':

    app.run(debug = True)
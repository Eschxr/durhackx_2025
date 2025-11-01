from flask import Flask, jsonify, request
# import llama_2_func, mistral_fuc, TaskAI


# I am going to do a chemistry report demostration tomorrow. I need to write the transcript and make a ppt.


app = Flask(__name__)

@app.route('/', methods = ['GET'])
def getResponse():
    data = "Hello, world!" # llama_2_func.test_func("Hello, world!")
    # data = TaskAI.TaskAI(input)
    return jsonify({'data': data})


# driver function
if __name__ == '__main__':

    app.run(debug = True)
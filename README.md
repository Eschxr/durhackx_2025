# Durhack X 2025

Our project for Durhack 2025.

## I/We

#### Tired of working alone? I/We provides you with an on-demand team of AI agents ready to offer you help and support on nearly any task you want! With I/We, you may be alone, but you are never lonely. 

## Usage

Clone the repo, then, within the repository, run: 

`pip install -r requirements.txt`

`npm install`

Then, install the required AI models, which you do with: 

`ollama pull {name_of_AI}`

The models used in this software are: 
* Llama 2
* Llava Latest
* Mistral
* Orca 2
* Qwen 2.5

To run the developer deployment environment, first navigate to the `/src/api` folder and run:

`flask run --debug`

Then, return to the main folder and run:

`npm run dev`

The app should now be running on `localhost:3000`

Enjoy!

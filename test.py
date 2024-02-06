import openai
openai.api_key = "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"

def get_recipe():
    try:

        # Get the data from the POST request
        ingredients = ['apple', 'banana', 'milk']

        # Call OpenAI API to get recipe result
        prompt = '''
            Given the following ingredients available in my home:

            -  apple, banana, milk

            Please generate a delicious recipe using these ingredients in below format: 

            {
                recipe: "Delicious Recipe",
                instructions: [
                    "instruction 1 ",
                    "instruction 22",
                    "instruction 3 and soon",
                ]   
            }

            Note: generate me instruciton as format specified above and generate nothing else. 
                    Note: generate me instruciton as format specified above and generate nothing else. 
                '''
        completion = openai.ChatCompletion.create(
            model="gpt-3.5-turbo-0613", 
            messages = [{"role": "system", "content" : "Generate code for below explanition"},
                {"role": "user", "content" : f"{prompt}"}]
        )   

        response_data = completion.choices[0].message.content   

        # Send the response back to the frontend
        print(response_data)  
    except Exception as e: 
        print(f"an error occured:{e}")
        return None
    
get_recipe()
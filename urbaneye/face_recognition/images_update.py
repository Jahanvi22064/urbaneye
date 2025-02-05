import os

# code to update image in image folder everytime code is ran
target='/home/jahanvi/Downloads/urban/urbaneye/server/uploads'

def makenew():
    for x in os.listdir(target):
        if(x.endswith('.jpg')):
            os.unlink(target+x)
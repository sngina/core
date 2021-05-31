# handle = open("test.txt","r")
# data = handle.read()
# counter = 0
# for word in data.split():
#     if word == "Python":
#         counter +=1

with open("test.txt","r") as handle:
    data = handle.read()
    print(data)

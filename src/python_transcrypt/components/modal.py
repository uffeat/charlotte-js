root = document.getElementById('appGoesHere')
button = document.createElement('button')
button.textContent = "Resolve"
root.append(button)

def modal():
    print("MODAL!")

    def executor(resolve, reject):
        def onclick(event):
            resolve(True)
            print("RESOLVED")

        button.onclick = onclick

    return window.X.createAndAwaitPromise(executor)
    


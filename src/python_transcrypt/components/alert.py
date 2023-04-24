
class Alert:
    def __init__(self):
        print("PyComponent init")
        self._stuff = None
        
    @property
    def stuff(self):
        return self.get_stuff()
    
    def get_stuff(self):
        print(f"`stuff` getter called. Returning value: {self._stuff}")
        return self._stuff
    
    @stuff.setter
    def stuff(self, stuff):
        self.set_stuff(stuff)

    def set_stuff(self, stuff):
        print(f"`stuff` setter called with value `{stuff}`.")
        self._stuff = stuff


    def print_some_text(self, text):
        print(f"Some text: {text}")

    def print_my_text(self):
        print(self.textContent)


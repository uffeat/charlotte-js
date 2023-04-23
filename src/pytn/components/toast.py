def toast(text, yell):
    if text is None:
        print("TOAST!")
    else:
        if yell is True:
            text = text.upper()
        print(text)


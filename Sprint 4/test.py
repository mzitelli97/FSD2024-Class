from test2 import func2

def func1(*args, **kwargs):
    print(args, kwargs)


def main():
    func1(1,2,3, x=5, hola='pepe')
    func2()

# main()
if __name__ == "__main__":
    main()
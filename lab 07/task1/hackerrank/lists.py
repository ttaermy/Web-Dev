n = int(input())
lt = []

for _ in range(n):
    cmd, *args = input().split()
    if cmd == "insert":
        lt.insert(int(args[0]), int(args[1]))
    elif cmd == "print":
        print(lt)
    elif cmd == "remove":
        lt.remove(int(args[0]))
    elif cmd == "append":
        lt.append(int(args[0]))
    elif cmd == "sort":
        lt.sort()
    elif cmd == "pop":
        lt.pop()
    elif cmd == "reverse":
        lt.reverse()